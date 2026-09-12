"use client";

import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { CalendarDays, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

export type FilterOption = {
  label: string;
  value: string;
  count?: number;
};

type BaseFilter = {
  key: string;
  label: string;
  placeholder?: string;
};

export type FilterDefinition =
  | (BaseFilter & {
      type: "select";
      options: FilterOption[];
      allLabel?: string;
    })
  | (BaseFilter & {
      type: "multi-select";
      options: FilterOption[];
    })
  | (BaseFilter & {
      type: "date-range";
    });

export type FilterValue = string | string[] | DateRange | undefined;
export type FilterValues = Record<string, FilterValue>;

type AppFilterProps = {
  filters?: FilterDefinition[];
  initialValues?: FilterValues;
  initialSearch?: string;
  searchPlaceholder?: string;
  debounceMs?: number;
  onSearchChange?: (query: string) => void;
  onFiltersChange?: (values: FilterValues) => void;
  onReset?: () => void;
  className?: string;
};

function isDateRange(value: FilterValue): value is DateRange {
  return Boolean(value && !Array.isArray(value) && typeof value === "object" && ("from" in value || "to" in value));
}

function countActiveFilters(values: FilterValues) {
  return Object.values(values).reduce((count, value) => {
    if (Array.isArray(value)) return count + value.length;
    if (typeof value === "string") return count + (value ? 1 : 0);
    if (isDateRange(value)) return count + (value.from || value.to ? 1 : 0);
    return count;
  }, 0);
}

function formatDateRange(value?: DateRange) {
  if (!value?.from) return null;
  if (!value.to) return format(value.from, "dd/MM/yyyy");
  return `${format(value.from, "dd/MM/yyyy")} – ${format(value.to, "dd/MM/yyyy")}`;
}

export default function AppFilter({
  filters = [],
  initialValues = {},
  initialSearch = "",
  searchPlaceholder = "Tìm kiếm...",
  debounceMs = 400,
  onSearchChange,
  onFiltersChange,
  onReset,
  className,
}: AppFilterProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [values, setValues] = useState<FilterValues>(initialValues);
  const debouncedSearch = useDebounce(searchQuery, debounceMs);
  const activeFilterCount = useMemo(() => countActiveFilters(values), [values]);
  const hasActiveFilters = Boolean(searchQuery.trim()) || activeFilterCount > 0;

  useEffect(() => {
    onSearchChange?.(debouncedSearch.trim());
  }, [debouncedSearch, onSearchChange]);

  const updateFilter = (key: string, value: FilterValue) => {
    const nextValues = { ...values, [key]: value };
    setValues(nextValues);
    onFiltersChange?.(nextValues);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setValues({});
    onSearchChange?.("");
    onFiltersChange?.({});
    onReset?.();
  };

  return (
    <section
      className={cn("flex flex-col gap-3 rounded-xl border border-border bg-white p-3 shadow-card", className)}
      aria-label="Bộ lọc dữ liệu"
    >
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <div className="relative w-full xl:max-w-sm">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <Input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="h-11 bg-white pr-10 pl-9 text-sm"
            aria-label={searchPlaceholder}
          />
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setSearchQuery("")}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground"
              aria-label="Xóa nội dung tìm kiếm"
            >
              <X className="size-4" aria-hidden="true" />
            </Button>
          )}
        </div>

        <div className="flex flex-1 flex-wrap items-center gap-2">
          {filters.map((filter) => {
            if (filter.type === "select") {
              const rawValue = values[filter.key];
              const selectedValue = typeof rawValue === "string" ? rawValue : "";
              const selectedLabel = selectedValue
                ? filter.options.find((option) => option.value === selectedValue)?.label
                : filter.allLabel ?? `Tất cả ${filter.label.toLowerCase()}`;

              return (
                <Select
                  key={filter.key}
                  value={selectedValue || "__all__"}
                  onValueChange={(value) => updateFilter(filter.key, value === "__all__" ? undefined : String(value))}
                >
                  <SelectTrigger className="h-11 min-w-40 bg-white px-3">
                    <SelectValue>{selectedLabel}</SelectValue>
                  </SelectTrigger>
                  <SelectContent align="start" className="rounded-xl p-1.5">
                    <SelectItem value="__all__" className="min-h-9 px-2.5">
                      {filter.allLabel ?? `Tất cả ${filter.label.toLowerCase()}`}
                    </SelectItem>
                    {filter.options.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="min-h-9 px-2.5">
                        {option.label}
                        {option.count !== undefined && (
                          <span className="ml-auto text-xs tabular-nums text-muted-foreground">{option.count}</span>
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }

            if (filter.type === "multi-select") {
              const rawValue = values[filter.key];
              const selectedValues: string[] = Array.isArray(rawValue) ? rawValue : [];

              return (
                <Popover key={filter.key}>
                  <PopoverTrigger className="inline-flex h-11 min-w-40 items-center justify-between gap-2 rounded-lg border border-input bg-white px-3 text-sm text-foreground focus-visible:outline-none">
                    <span className="truncate">{filter.label}</span>
                    <span className="ml-auto flex items-center gap-1.5">
                      {selectedValues.length > 0 && <Badge className="h-5 min-w-5 px-1.5">{selectedValues.length}</Badge>}
                      <ChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />
                    </span>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-64 rounded-xl p-2.5">
                    <PopoverHeader className="px-1 pb-1">
                      <PopoverTitle>{filter.label}</PopoverTitle>
                    </PopoverHeader>
                    <div className="max-h-64 space-y-1 overflow-y-auto">
                      {filter.options.map((option) => {
                        const checked = selectedValues.includes(option.value);

                        return (
                          <label
                            key={option.value}
                            className="flex min-h-10 cursor-pointer items-center gap-3 rounded-lg px-2 text-sm hover:bg-muted"
                          >
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(nextChecked) =>
                                updateFilter(
                                  filter.key,
                                  nextChecked
                                    ? [...selectedValues, option.value]
                                    : selectedValues.filter((value) => value !== option.value),
                                )
                              }
                            />
                            <span className="min-w-0 flex-1 truncate">{option.label}</span>
                            {option.count !== undefined && (
                              <span className="text-xs tabular-nums text-muted-foreground">{option.count}</span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </PopoverContent>
                </Popover>
              );
            }

            const rawValue = values[filter.key];
            const selectedRange: DateRange | undefined = isDateRange(rawValue) ? rawValue : undefined;
            const rangeLabel = formatDateRange(selectedRange);

            return (
              <Popover key={filter.key}>
                <PopoverTrigger className="inline-flex h-11 min-w-48 items-center gap-2 rounded-lg border border-input bg-white px-3 text-sm text-foreground focus-visible:outline-none">
                  <CalendarDays className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.75} aria-hidden="true" />
                  <span className={cn("truncate", !rangeLabel && "text-muted-foreground")}>
                    {rangeLabel ?? filter.placeholder ?? filter.label}
                  </span>
                  <ChevronDown className="ml-auto size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto rounded-xl p-2">
                  <Calendar
                    mode="range"
                    selected={selectedRange}
                    onSelect={(range) => updateFilter(filter.key, range)}
                    locale={vi}
                  />
                </PopoverContent>
              </Popover>
            );
          })}

          {hasActiveFilters && (
            <Button type="button" variant="ghost" size="lg" onClick={resetFilters} className="h-11 px-3 text-muted-foreground">
              <X className="size-4" aria-hidden="true" />
              Xóa bộ lọc
              {activeFilterCount > 0 && <Badge variant="secondary">{activeFilterCount}</Badge>}
            </Button>
          )}
        </div>
      </div>

      {filters.length > 0 && (
        <p className="sr-only" aria-live="polite">
          <SlidersHorizontal aria-hidden="true" />
          {activeFilterCount} bộ lọc đang được áp dụng
        </p>
      )}
    </section>
  );
}
