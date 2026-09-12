'use client';

import { useState } from 'react';
import {
  BedDouble,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from 'lucide-react';
import AppFilter, { type FilterDefinition } from '@/common/filter/AppFilter';
import Navbar from '@/common/navbar/Navbar';
import Pagination from '@/common/pagination/Pagination';
import Sidebar, {
  SidebarProvider,
  type SidebarItem,
} from '@/common/sidebar/Sidebar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Badge } from '@/components/ui/badge';
import { SidebarInset } from '@/components/ui/sidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const sidebarItems: SidebarItem[] = [
  {
    href: '#workspace',
    label: 'Tổng quan',
    icon: LayoutDashboard,
    isActive: true,
  },
  { href: '#table', label: 'Đặt phòng', icon: CalendarDays, badge: 12 },
  { href: '#table', label: 'Phòng & giá', icon: BedDouble },
  { href: '#workspace', label: 'Hộp thư', icon: MessageSquare, badge: 3 },
  { href: '#table', label: 'Thanh toán', icon: CreditCard },
  { href: '#workspace', label: 'Cài đặt', icon: Settings },
];

const tableFilters: FilterDefinition[] = [
  {
    key: 'status',
    type: 'select',
    label: 'Trạng thái',
    options: [
      { label: 'Đã xác nhận', value: 'confirmed', count: 18 },
      { label: 'Chờ thanh toán', value: 'pending', count: 6 },
      { label: 'Đã hủy', value: 'cancelled', count: 3 },
    ],
  },
  {
    key: 'roomType',
    type: 'multi-select',
    label: 'Loại phòng',
    options: [
      { label: 'Deluxe River View', value: 'deluxe', count: 8 },
      { label: 'Superior Double', value: 'superior', count: 12 },
      { label: 'Family Suite', value: 'family', count: 5 },
    ],
  },
  {
    key: 'stayDate',
    type: 'date-range',
    label: 'Ngày lưu trú',
    placeholder: 'Chọn khoảng ngày',
  },
];

const bookings = [
  {
    code: 'SR-261020-0842',
    guest: 'Nguyễn Minh Anh',
    room: 'Deluxe River View',
    dates: '20/10 – 22/10/2026',
    total: '2.250.000 ₫',
    status: 'Đã xác nhận',
    statusClass: 'bg-success-soft text-success',
  },
  {
    code: 'SR-261021-0916',
    guest: 'Trần Hoàng Nam',
    room: 'Superior Double',
    dates: '21/10 – 23/10/2026',
    total: '1.980.000 ₫',
    status: 'Chờ thanh toán',
    statusClass: 'bg-warning-soft text-warning',
  },
  {
    code: 'SR-261022-1054',
    guest: 'Lê Thu Hà',
    room: 'Family Suite',
    dates: '22/10 – 25/10/2026',
    total: '4.350.000 ₫',
    status: 'Đã hoàn tiền',
    statusClass: 'bg-info-soft text-info',
  },
  {
    code: 'SR-261023-1128',
    guest: 'Phạm Gia Bảo',
    room: 'Deluxe River View',
    dates: '23/10 – 24/10/2026',
    total: '1.250.000 ₫',
    status: 'Đã hủy',
    statusClass: 'bg-danger-soft text-danger',
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <SidebarProvider>
      <Sidebar
        items={sidebarItems}
        roleLabel="Nhân viên khách sạn"
        contextName="An Nhiên Riverside Hotel"
      />
      <SidebarInset className="min-w-0 bg-background">
        <Navbar
          user={{ name: 'Nguyễn Minh Anh', role: 'Hotel Staff' }}
          notificationCount={4}
          showSidebarTrigger
        />

        <main id="workspace" className="flex-1">
          <div className="mx-auto max-w-[100rem] space-y-8 px-4 py-7 sm:px-6 lg:px-8">
            <section>
              <p className="text-sm font-medium text-primary">
                StayReco UI foundation
              </p>
              <h1 className="sr-page-title mt-2">
                Tổng hợp giao diện dùng chung
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Trang thử nghiệm các component public và workspace theo hệ
                Coastal Blue & Warm Paper.
              </p>
            </section>

            <section aria-labelledby="public-header-title">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <h2 id="public-header-title" className="sr-section-title">
                    Header khách hàng
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Trạng thái đã đăng nhập, kèm menu ngôn ngữ và tiền tệ.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-card">
                <Header isAuthenticated user={{ name: 'Nguyễn Minh Anh' }} />
              </div>
            </section>

            <section
              id="table"
              aria-labelledby="table-title"
              className="space-y-4"
            >
              <div>
                <h2 id="table-title" className="sr-section-title">
                  Danh sách đặt phòng
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Filter, table và pagination trong một luồng quản lý thực tế.
                </p>
              </div>

              <AppFilter
                filters={tableFilters}
                searchPlaceholder="Tìm mã booking hoặc tên khách..."
              />

              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
                <Table>
                  <TableHeader className="bg-muted/45">
                    <TableRow>
                      <TableHead className="h-12 px-4">Mã booking</TableHead>
                      <TableHead className="h-12 px-4">Khách hàng</TableHead>
                      <TableHead className="h-12 px-4">Phòng</TableHead>
                      <TableHead className="h-12 px-4">Ngày lưu trú</TableHead>
                      <TableHead className="h-12 px-4">Tổng tiền</TableHead>
                      <TableHead className="h-12 px-4">Trạng thái</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.code} className="h-14">
                        <TableCell className="px-4 font-semibold text-primary">
                          {booking.code}
                        </TableCell>
                        <TableCell className="px-4 font-medium">
                          {booking.guest}
                        </TableCell>
                        <TableCell className="px-4 text-muted-foreground">
                          {booking.room}
                        </TableCell>
                        <TableCell className="px-4 tabular-nums text-muted-foreground">
                          {booking.dates}
                        </TableCell>
                        <TableCell className="px-4 font-semibold tabular-nums">
                          {booking.total}
                        </TableCell>
                        <TableCell className="px-4">
                          <Badge className={booking.statusClass}>
                            {booking.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="border-t border-border px-4 py-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={12}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="footer-title">
              <h2 id="footer-title" className="sr-section-title mb-4">
                Footer khách hàng
              </h2>
              <div className="overflow-hidden rounded-2xl border border-border shadow-card">
                <Footer />
              </div>
            </section>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
