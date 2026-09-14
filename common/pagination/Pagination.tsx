'use client';

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

type PageItem = number | 'ellipsis-start' | 'ellipsis-end';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  siblingCount?: number;
  ariaLabel?: string;
};

function getPageItems(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): PageItem[] {
  const visiblePages = siblingCount * 2 + 5;

  if (totalPages <= visiblePages) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages: PageItem[] = [1];
  const start = Math.max(2, currentPage - siblingCount);
  const end = Math.min(totalPages - 1, currentPage + siblingCount);

  if (start > 2) pages.push('ellipsis-start');

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (end < totalPages - 1) pages.push('ellipsis-end');

  pages.push(totalPages);
  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const page = Math.min(Math.max(currentPage, 1), totalPages);
  const pageItems = getPageItems(page, totalPages, Math.max(siblingCount, 0));

  const goToPage = (nextPage: number) => {
    if (nextPage !== page && nextPage >= 1 && nextPage <= totalPages) {
      onPageChange(nextPage);
    }
  };

  return (
    <nav className={cn('flex w-full justify-center', className)}>
      <ul className="flex items-center gap-1 sm:gap-1.5">
        <li>
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="inline-flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:text-muted-foreground/50 focus-visible:outline-none"
            aria-label="Trang trước"
          >
            <ChevronLeft
              className="size-5"
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </li>

        {pageItems.map((item) =>
          typeof item !== 'number' ? (
            <li
              key={item}
              className="flex size-11 items-center justify-center"
              aria-hidden="true"
            >
              <MoreHorizontal className="size-5" strokeWidth={2} />
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                onClick={() => goToPage(item)}
                aria-current={item === page ? 'page' : undefined}
                aria-label={
                  item === page
                    ? `Trang ${item}, trang hiện tại`
                    : `Đi tới trang ${item}`
                }
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-xl text-base font-medium transition-colors focus-visible:outline-none',
                  item === page
                    ? 'border border-border bg-white text-foreground shadow-[0_1px_2px_rgb(32_43_54/4%)]'
                    : 'text-foreground hover:bg-muted',
                )}
              >
                {item}
              </button>
            </li>
          ),
        )}

        <li>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="inline-flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:text-muted-foreground/50 focus-visible:outline-none"
            aria-label="Trang sau"
          >
            <ChevronRight
              className="size-5"
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
