'use client';

import { useState } from 'react';
import { BedDouble, CalendarDays, CheckCircle2, Clock3, Plus, UserRoundCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PartnerPanel, PartnerTitle } from '@/components/partner/partner-primitives';
import AppFilter, { type FilterDefinition, type FilterValues } from '@/common/filter/AppFilter';
import { TablePagination } from '@/common/table/TablePagination';
import { partnerBookings } from '@/lib/partner-data';

type Notify = (message: string) => void;

const bookingFilters: FilterDefinition[] = [
  {
    key: 'status',
    label: 'trạng thái',
    type: 'select',
    allLabel: 'Tất cả trạng thái',
    options: [
      { label: 'Đã xác nhận', value: 'Đã xác nhận' },
      { label: 'Sắp check-in', value: 'Sắp check-in' },
      { label: 'Chờ xác nhận', value: 'Chờ xác nhận' },
      { label: 'Đang lưu trú', value: 'Đang lưu trú' },
    ],
  },
];

export function PartnerBookingsScreen({ notify }: { notify: Notify }) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValues, setFilterValues] = useState<FilterValues>({});
  const pageSize = 4;
  const selectedStatus = typeof filterValues.status === 'string' ? filterValues.status : '';
  const normalizedQuery = searchQuery.toLocaleLowerCase();
  const filteredBookings = partnerBookings.filter((booking) => {
    const matchesQuery = booking.slice(0, 3).some((value) => value.toLocaleLowerCase().includes(normalizedQuery));
    return matchesQuery && (!selectedStatus || booking[5] === selectedStatus);
  });
  const visibleBookings = filteredBookings.slice((page - 1) * pageSize, page * pageSize);

  return <div className="space-y-6">
    <PartnerTitle title="Đặt phòng & Điều phối lưu trú" description="Theo dõi toàn bộ vòng đời booking, từ xác nhận giữ phòng đến check-in, lưu trú và hoàn tất thanh toán." action={<><Button variant="outline" onClick={() => notify('Xuất danh sách booking')}><CalendarDays />Xuất lịch đặt phòng</Button><Button onClick={() => notify('Tạo booking trực tiếp')}><Plus />Tạo booking mới</Button></>} />

    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {[
        ['Đến hôm nay', '12', '4 khách cần check-in', CalendarDays, 'text-primary'],
        ['Đang lưu trú', '18', '25 khách tại cơ sở', BedDouble, 'text-success'],
        ['Chờ xác nhận', '05', 'Cần xử lý trước 14:00', Clock3, 'text-brand-accent'],
        ['Hoàn tất tháng này', '128', 'Tỷ lệ hoàn thành 96,8%', CheckCircle2, 'text-primary'],
      ].map(([label, value, hint, Icon, tone]) => <PartnerPanel key={label as string} className="p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold text-muted-foreground">{label as string}</p><strong className={`mt-2 block text-3xl ${tone as string}`}>{value as string}</strong></div><span className="grid size-10 place-items-center rounded-xl bg-muted text-primary">{typeof Icon !== 'string' && <Icon size={19} />}</span></div><p className="mt-5 text-xs text-muted-foreground">{hint as string}</p></PartnerPanel>)}
    </section>

    <section className="grid gap-6 xl:grid-cols-[1fr_320px]">
      <PartnerPanel className="overflow-hidden">
        <AppFilter filters={bookingFilters} searchPlaceholder="Tìm mã booking, khách hoặc phòng..." onSearchChange={(value) => { setSearchQuery(value); setPage(1); }} onFiltersChange={(values) => { setFilterValues(values); setPage(1); }} className="rounded-none border-0 border-b p-5 shadow-none" />
        <div className="overflow-x-auto"><Table className="w-full min-w-[900px] text-left text-sm"><TableHeader className="bg-muted text-xs text-muted-foreground"><TableRow>{['Booking','Khách lưu trú','Hạng phòng','Thời gian','Trạng thái','Thành tiền','Thao tác'].map(item => <TableHead key={item} className="px-5 py-4 font-semibold">{item}</TableHead>)}</TableRow></TableHeader><TableBody>{visibleBookings.map((row) => <TableRow key={row[0]} className="border-t"><TableCell className="px-5 py-5"><strong className="text-primary">#{row[0]}</strong><p className="mt-1 text-xs text-muted-foreground">StayReco Direct</p></TableCell><TableCell className="px-5 py-5 font-medium">{row[1]}</TableCell><TableCell className="px-5 py-5">{row[2]}</TableCell><TableCell className="px-5 py-5">{row[3]}<p className="text-xs text-muted-foreground">{row[4]}</p></TableCell><TableCell className="px-5 py-5"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${row[5] === 'Chờ xác nhận' ? 'bg-brand-accent-soft text-brand-accent' : 'bg-success-soft text-success'}`}>● {row[5]}</span></TableCell><TableCell className="px-5 py-5 font-semibold text-primary">{row[6]}</TableCell><TableCell className="px-5 py-5"><Button type="button" variant="ghost" size="sm" onClick={() => notify(`Xử lý booking ${row[0]}`)} className="font-semibold text-primary">Xử lý</Button></TableCell></TableRow>)}</TableBody></Table></div>
        <TablePagination page={page} pageSize={pageSize} total={filteredBookings.length} onPageChange={setPage} />
      </PartnerPanel>

      <aside className="space-y-5"><PartnerPanel className="p-5"><h2 className="font-bold text-primary">Ca vận hành hôm nay</h2><div className="mt-5 space-y-4">{[['06:30','Mở quầy lễ tân','Đã hoàn tất'],['11:30','Chuẩn bị 7 phòng check-out','Đang xử lý'],['14:00','Check-in 4 booking mới','Sắp tới'],['18:00','Đối soát tiền cọc','Sắp tới']].map(([time,task,state]) => <div key={time} className="flex gap-3"><span className="font-mono text-xs font-bold text-primary">{time}</span><div><p className="text-sm font-medium">{task}</p><p className="mt-1 text-xs text-muted-foreground">{state}</p></div></div>)}</div></PartnerPanel><PartnerPanel className="bg-primary p-5 text-primary-foreground"><UserRoundCheck size={20}/><h2 className="mt-3 font-bold">Check-in nhanh bằng QR</h2><p className="mt-2 text-sm text-primary-foreground/75">Xác thực booking, giấy tờ và gán phòng trong một luồng.</p><Button onClick={() => notify('Check-in nhanh bằng QR')} className="mt-5 w-full bg-card text-primary hover:bg-card/90">Mở máy quét QR</Button></PartnerPanel></aside>
    </section>
  </div>;
}
