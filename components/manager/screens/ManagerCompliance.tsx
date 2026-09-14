/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- Legacy DOM-driven screen pending React state migration.
import React from 'react';

export default function ManagerCompliance() {
  React.useEffect(() => {
    try {
      (function highlightActiveSidebar() {
      const activeLink = document.querySelector('nav a[data-path="tuan-thu-&-vi-pham"]');
      if (activeLink) {
        const activeClasses = (activeLink.parentElement.getAttribute('data-active-classes') || 'bg-primary-container text-on-primary font-semibold shadow-[0_2px_8px_rgba(35,78,112,0.12)]').split(' ');
        activeClasses.forEach(cls => activeLink.classList.add(cls));
        activeLink.classList.remove('text-on-surface-variant');
      }
    })();
    } catch (err) {
      console.error('Error executing interaction script:', err);
    }

    try {
      // Micro-interaction: click handler for queue cards to demonstrate workspace responsiveness
    (() => {
      const caseCards = document.querySelectorAll('.lg\\:col-span-6 > div.cursor-pointer');
      caseCards.forEach(card => {
        card.addEventListener('click', () => {
          caseCards.forEach(c => c.classList.remove('ring-2', 'ring-primary'));
          card.classList.add('ring-2', 'ring-primary');
        });
      });
    });
    } catch (err) {
      console.error('Error executing interaction script:', err);
    }
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 px-6 flex items-center gap-3 bg-surface-container-lowest">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">holiday_village</span>
            <span className="font-headline font-bold text-lg tracking-tight text-primary">StayReco</span>
          </div>
          <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-primary-fixed text-on-primary-fixed leading-tight">Manager</span>
        </div>
        <div className="px-4 py-3">
          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant/80">Quản trị nền tảng</div>
        </div>
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto" data-active-classes="bg-primary-container text-on-primary font-semibold shadow-[0_2px_8px_rgba(35,78,112,0.12)]">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="tong-quan-&-tang-truong" href="#">
            <span className="material-symbols-outlined text-xl">analytics</span>
            <span>Tổng quan & Tăng trưởng</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="duyet-ho-so-doi-tac" href="#">
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span>Duyệt hồ sơ đối tác</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="giam-sat-doi-tac" href="#">
            <span className="material-symbols-outlined text-xl">storefront</span>
            <span>Giám sát đối tác</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="tuan-thu-&-vi-pham" href="#">
            <span className="material-symbols-outlined text-xl">gavel</span>
            <span>Tuân thủ & Vi phạm</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="doanh-thu-&-hoa-hong" href="#">
            <span className="material-symbols-outlined text-xl">payments</span>
            <span>Doanh thu & Hoa hồng</span>
          </a>
        </nav>
        <div className="p-4 mt-auto bg-surface-container-lowest">
          <div className="p-3 rounded-xl bg-surface-container-low flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
            <div className="text-xs">
              <div className="font-medium text-on-surface">Hệ thống bình thường</div>
              <div className="text-[11px] text-on-surface-variant">SLA hạ tầng: 99.98%</div>
            </div>
          </div>
        </div>
      </aside>
      <div className="pl-64">
        <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-6 flex items-center justify-between gap-6">
          <div className="flex-1 max-w-xl">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-xl pointer-events-none">search</span>
              <input className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-container-low border-0 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" placeholder="Tìm kiếm đối tác, khách sạn, hồ sơ thẩm định... (Ctrl+K)" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="text-xs font-medium text-on-surface-variant">Hệ thống vận hành bình thường</span>
            </div>
            <button aria-label="Notifications" className="relative w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-22">notifications</span>
              <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-secondary text-on-secondary text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="h-8 w-px bg-surface-container-high"></div>
            <div className="flex items-center gap-3 pl-1">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-semibold text-on-surface leading-snug">Lê Hoàng Quân</div>
                <div className="text-[11px] text-on-surface-variant leading-none">Chuyên viên Quản lý Nền tảng (Miền Trung)</div>
              </div>
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-high" src="https://lh3.googleusercontent.com/aida/AEtjO1V-SCfN5vRag32eaaMCe725o3qjMzRhq78BRcuhKmOXxEDu4G8qm577peTkqU28fF62pdny08VmbaOwjGzlFo32VJpAA8SPA924onlWgQ2t92x5iGKeuhw1fCMiUdigsg6mge97P7ahRot5alw95ynt0-n2m7IucAr968MgN5mTjYAV6AnplZ0Xx-7f4H3KdFhb1vm9RS4hCaI81jJK3nFDIJCSwTS5926q0xHmfGl3sY60Y-Y_wuhSWwMDAhg2Nz8K1d9sN9cn" />
            </div>
          </div>
        </header>
        <main className="relative pt-16 bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            <div className="p-8 max-w-[1600px] w-full mx-auto space-y-6">
              {/* Header Context & Actions */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div className="space-y-1.5">
                  <nav className="flex items-center gap-2 text-xs text-on-surface-variant font-medium tracking-wide">
                    <span className="hover:text-primary transition-colors cursor-pointer">Quản trị nền tảng</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-primary font-semibold">Xử lý Vi phạm & Tuân thủ</span>
                  </nav>
                  <h1 className="text-2xl lg:text-3xl font-bold font-headline text-primary tracking-tight">Quản lý Hồ sơ Tuân thủ, Khiếu nại & Đề xuất Đình chỉ Đối tác</h1>
                  <p className="text-sm text-on-surface-variant max-w-3xl">Giám sát cam kết dịch vụ StayReco Shield, thụ lý khiếu nại khách hàng và lập biên bản đề xuất chế tài xử lý vi phạm vận hành đối tác lưu trú.</p>
                </div>
                <div className="flex items-center gap-3 self-start lg:self-auto">
                  <button className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-primary text-on-primary text-sm font-semibold shadow-sm hover:bg-primary/90 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2" type="button">
                    <span className="material-symbols-outlined text-lg">add_circle</span>
                    <span>+ Mở hồ sơ tuân thủ mới</span>
                  </button>
                </div>
              </div>
              {/* Severity Legend & Filter Navigation */}
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_16px_rgba(32,43,54,0.05)] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-sm">
                    <button className="px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-semibold whitespace-nowrap shadow-sm">Tất cả vụ việc (8)</button>
                    <button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-medium whitespace-nowrap transition-colors">Đang điều tra xác minh (3)</button>
                    <button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-medium whitespace-nowrap transition-colors">Chờ đối tác phản hồi (2)</button>
                    <button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-medium whitespace-nowrap transition-colors">Đã gửi Đề nghị Đình chỉ sang Admin (1)</button>
                    <button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-medium whitespace-nowrap transition-colors">Đã giải quyết & Đóng hồ sơ (12)</button>
                  </div>
                  {/* Severity Chips */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-on-surface-variant font-medium mr-1 hidden sm:inline">Phân cấp nghiêm trọng:</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
                      Khẩn cấp (High)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Trung bình (Medium)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                      Cảnh báo nhẹ (Low)
                    </span>
                  </div>
                </div>
              </div>
              {/* Main Investigation Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Case Queue List (50% / 6 Cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">folder_managed</span>
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">Danh sách hồ sơ chờ xử lý</h2>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">3 vụ việc mở trong ca trực</span>
                  </div>
                  {/* Case Item 1: Active High Severity */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-5 shadow-[0_8px_24px_rgba(32,43,54,0.08)] cursor-pointer transition-all hover:shadow-md">
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-secondary"></div>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-mono font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded">#CASE-2026-1002</span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container text-[11px] font-bold">
                              <span className="material-symbols-outlined text-[13px]">warning</span>
                              KHẨN CẤP (High)
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-semibold">Đang thụ lý</span>
                          </div>
                          <h3 className="text-base font-bold text-on-surface mt-1.5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-secondary text-base">hotel</span>
                            Biển Xanh Retreat & Spa
                            <span className="text-xs font-normal text-on-surface-variant">(Đà Nẵng)</span>
                          </h3>
                        </div>
                        <span className="text-xs text-on-surface-variant whitespace-nowrap bg-surface-container-low px-2 py-1 rounded">2 ngày trước</span>
                      </div>
                      <p className="text-sm text-on-surface leading-relaxed line-clamp-2">
                        <strong className="text-secondary font-semibold">Nội dung:</strong>
                        Từ chối nhận phòng khách có mã xác nhận hợp lệ (Overbooking) & Không bố trí nơi nghỉ thay thế tương đương.
                      </p>
                      <div className="p-3 bg-surface-container-low rounded-lg space-y-1.5 text-xs text-on-surface-variant">
                        <div className="flex items-center justify-between">
                          <span>
                            Người khiếu nại:
                            <strong className="text-on-surface font-medium">Đặng Thu Hà</strong>
                          </span>
                          <span className="font-mono text-primary font-semibold">Mã: SR-261018-7712</span>
                        </div>
                        <div className="flex items-center gap-2 text-error font-medium">
                          <span className="material-symbols-outlined text-[15px]">report</span>
                          <span>Trạng thái: Đã có đủ bằng chứng — Đề xuất đình chỉ tài khoản.</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-0">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="text-xs text-on-surface-variant">Hồ sơ đã được thẩm tra nội bộ 100%</span>
                        </div>
                        <span className="inline-flex items-center text-xs font-semibold text-primary">
                          Xem chi tiết
                          <span className="material-symbols-outlined text-sm ml-0.5">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Case Item 2: Medium Severity */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_16px_rgba(32,43,54,0.05)] cursor-pointer transition-all hover:bg-surface-container-low/40">
                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r bg-secondary-container"></div>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-mono font-bold text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">#CASE-2026-1004</span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[11px] font-semibold">
                              <span className="material-symbols-outlined text-[13px]">info</span>
                              TRUNG BÌNH (Medium)
                            </span>
                          </div>
                          <h3 className="text-base font-semibold text-on-surface mt-1.5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-on-surface-variant text-base">villa</span>
                            Hội An Riverside Homestay
                            <span className="text-xs font-normal text-on-surface-variant">(Cẩm Châu, Hội An)</span>
                          </h3>
                        </div>
                        <span className="text-xs text-on-surface-variant whitespace-nowrap">Hôm qua 14:20</span>
                      </div>
                      <p className="text-sm text-on-surface leading-relaxed line-clamp-2">
                        <strong className="text-on-surface font-semibold">Nội dung:</strong>
                        Thu thêm phụ phí tiền phòng trực tiếp của khách sai quy định cam kết minh bạch giá của StayReco.
                      </p>
                      <div className="p-3 bg-surface-container-low rounded-lg space-y-1.5 text-xs text-on-surface-variant">
                        <div className="flex items-center justify-between">
                          <span>
                            Người khiếu nại:
                            <strong className="text-on-surface font-medium">Trần Minh Hoàng</strong>
                          </span>
                          <span className="font-mono text-on-surface-variant font-medium">SR-261019-8921</span>
                        </div>
                        <div className="flex items-center gap-2 text-secondary font-medium">
                          <span className="material-symbols-outlined text-[15px]">timelapse</span>
                          <span>Trạng thái: Đang chờ đối tác giải trình (Hạn chót còn 14 giờ).</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-on-surface-variant">Cảnh báo vi phạm lần đầu</span>
                        <button className="text-xs font-medium text-primary hover:underline">Chuyển sang xem</button>
                      </div>
                    </div>
                  </div>
                  {/* Case Item 3: Low Severity */}
                  <div className="relative bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_16px_rgba(32,43,54,0.05)] cursor-pointer transition-all hover:bg-surface-container-low/40">
                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r bg-outline-variant"></div>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-mono font-bold text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">#CASE-2026-0998</span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-medium">
                              <span className="material-symbols-outlined text-[13px]">low_priority</span>
                              CẢNH BÁO NHẸ (Low)
                            </span>
                          </div>
                          <h3 className="text-base font-semibold text-on-surface mt-1.5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-on-surface-variant text-base">cabin</span>
                            Đà Lạt View Eco-Cabin
                            <span className="text-xs font-normal text-on-surface-variant">(Lâm Đồng)</span>
                          </h3>
                        </div>
                        <span className="text-xs text-on-surface-variant whitespace-nowrap">16/10/2026</span>
                      </div>
                      <p className="text-sm text-on-surface leading-relaxed line-clamp-2">
                        <strong className="text-on-surface font-semibold">Nội dung:</strong>
                        Chậm trễ hoàn tiền đặt phòng hợp lệ quá 48h so với chính sách quy định.
                      </p>
                      <div className="p-3 bg-surface-container-low rounded-lg space-y-1.5 text-xs text-on-surface-variant">
                        <div className="flex items-center justify-between">
                          <span>Phân loại: Đối soát thanh toán cổng</span>
                          <span className="text-tertiary font-semibold">Mức độ ưu tiên C</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[15px]">sync</span>
                          <span>Trạng thái: Đang đối soát với cổng VNPay.</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-on-surface-variant">Đã đối chiếu log hệ thống</span>
                        <button className="text-xs font-medium text-primary hover:underline">Chuyển sang xem</button>
                      </div>
                    </div>
                  </div>
                  {/* System Audit Log Metric Card */}
                  <div className="bg-surface-container-low rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-xl">policy</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-on-surface">Tỉ lệ tuân thủ tháng 10/2026: 98.4%</div>
                        <div className="text-[11px] text-on-surface-variant">Tổng số 182 đối tác đang kích hoạt trên vùng miền Trung</div>
                      </div>
                    </div>
                    <button className="text-xs text-primary font-semibold hover:underline">Tải báo cáo kỳ</button>
                  </div>
                </div>
                {/* Right Column: Case Investigation Workspace & Action (50% / 6 Cols) */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="bg-surface-container-lowest rounded-2xl shadow-[0_8px_32px_rgba(32,43,54,0.08)] overflow-hidden">
                    {/* Case Detail Header Card */}
                    <div className="p-6 bg-gradient-to-r from-primary-container via-primary-container to-primary text-on-primary">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-surface-container-lowest/20 backdrop-blur-sm text-xs font-mono font-bold tracking-wide">#CASE-2026-1002</span>
                          <span className="px-2.5 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold tracking-wide flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">crisis_alert</span>
                            Khẩn cấp
                          </span>
                        </div>
                        <div className="text-xs text-on-primary-container flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          Khởi tạo: 18/10/2026 lúc 22:15
                        </div>
                      </div>
                      <h2 className="text-xl font-bold font-headline tracking-tight mt-1">Chi tiết Hồ sơ Vi phạm #CASE-2026-1002</h2>
                      <p className="text-xs text-on-primary-container/90 mt-1">Hành vi: Huỷ dịch vụ tại chỗ không lý do chính đáng & Vi phạm điều khoản bảo vệ khách hàng StayReco Shield.</p>
                    </div>
                    <div className="p-6 space-y-6">
                      {/* Partner Information Summary */}
                      <div className="bg-surface-container-low rounded-xl p-4.5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Thông tin đối tác liên quan</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">ID: PRT-DN-088</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <div className="text-xs text-on-surface-variant">Tên cơ sở lưu trú:</div>
                            <div className="font-bold text-on-surface text-base">Biển Xanh Retreat & Spa</div>
                            <div className="text-xs text-on-surface-variant mt-0.5">Võ Nguyên Giáp, Sơn Trà, TP. Đà Nẵng</div>
                          </div>
                          <div className="space-y-1">
                            <div>
                              <span className="text-xs text-on-surface-variant">Mã số thuế:</span>
                              <span className="font-mono font-medium text-on-surface ml-1">0401889922</span>
                            </div>
                            <div>
                              <span className="text-xs text-on-surface-variant">Đại diện pháp lý / Quản lý:</span>
                              <span className="font-semibold text-on-surface ml-1">Lê Khắc Toàn</span>
                            </div>
                            <div>
                              <span className="text-xs text-on-surface-variant">Lịch sử vi phạm:</span>
                              <span className="font-bold text-error ml-1">2 lần trong 60 ngày gần nhất</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Incident Timeline / Summary */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-lg">history_edu</span>
                          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wide">Tóm tắt diễn biến vụ việc</h3>
                        </div>
                        <div className="p-4 rounded-xl bg-surface-container text-sm leading-relaxed text-on-surface">
                          Du khách
                          <strong className="font-semibold">Đặng Thu Hà</strong>
                          (Mã booking:
                          <code className="font-mono text-primary font-semibold">SR-261018-7712</code>
                          ) hoàn tất thủ tục check-in đến quầy lúc
                          <strong className="font-semibold">21:30 ngày 18/10/2026</strong>
                          . Lễ tân cơ sở thông báo không còn phòng trống do cơ sở bán chéo qua kênh OTA khác trước đó nhưng không đóng phòng trên cổng StayReco. Cơ sở không bố trí chỗ ở thay thế tương đương tại thời điểm xảy ra sự cố, buộc du khách phải tự tìm phòng tại Đà Nẵng vào ban đêm.
                        </div>
                      </div>
                      {/* Evidence Collection Verification (Checklist) */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary text-lg">fact_check</span>
                            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wide">Bằng chứng thẩm tra thu thập</h3>
                          </div>
                          <span className="text-xs font-semibold text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded">3/3 Hợp lệ</span>
                        </div>
                        <div className="space-y-2.5">
                          <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
                            <span className="material-symbols-outlined text-tertiary text-xl flex-shrink-0 mt-0.5">check_circle</span>
                            <div className="flex-1 text-xs">
                              <div className="font-semibold text-on-surface">Ảnh chụp màn hình trao đổi của lễ tân cơ sở lưu trú</div>
                              <div className="text-on-surface-variant mt-0.5">Xác nhận trực tiếp qua Zalo nội dung: "Hết phòng do lỗi đồng bộ ca tối, mong khách thông cảm huỷ trên app". Đã lưu trữ tài liệu chứng cứ kỹ thuật số.</div>
                            </div>
                            <button className="text-xs text-primary font-semibold hover:underline whitespace-nowrap">Xem tệp</button>
                          </div>
                          <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
                            <span className="material-symbols-outlined text-tertiary text-xl flex-shrink-0 mt-0.5">check_circle</span>
                            <div className="flex-1 text-xs">
                              <div className="font-semibold text-on-surface">Ủy nhiệm chi & Giao dịch thanh toán cổng VNPay</div>
                              <div className="text-on-surface-variant mt-0.5">
                                Mã giao dịch VP-882910, số tiền thanh toán trước
                                <strong className="text-on-surface font-semibold">3.300.000 ₫</strong>
                                ghi nhận hoàn tất lúc 14:10 ngày 18/10/2026.
                              </div>
                            </div>
                            <span className="text-xs font-mono font-medium text-tertiary whitespace-nowrap">Khớp 100%</span>
                          </div>
                          <div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
                            <span className="material-symbols-outlined text-tertiary text-xl flex-shrink-0 mt-0.5">check_circle</span>
                            <div className="flex-1 text-xs">
                              <div className="font-semibold text-on-surface">Biên bản ghi nhận cuộc gọi tổng đài StayReco 24/7 (Hotline Shield)</div>
                              <div className="text-on-surface-variant mt-0.5">Ghi âm cuộc gọi lúc 21:42 phản ánh tình trạng đứng tại sảnh không có phòng. Chuyên viên trực tổng đài đã hỗ trợ đặt taxi và tạm ứng phòng khẩn cấp tại khách sạn lân cận.</div>
                            </div>
                            <button className="text-xs text-primary font-semibold hover:underline whitespace-nowrap">Nghe lại</button>
                          </div>
                        </div>
                      </div>
                      {/* Partner Response Box */}
                      <div className="p-4 rounded-xl bg-secondary-fixed/40 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-on-secondary-fixed flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-base">forum</span>
                            Phản hồi chính thức từ Đối tác
                          </span>
                          <span className="text-[11px] text-on-secondary-fixed-variant font-medium">Gửi lúc 09:15 hôm qua</span>
                        </div>
                        <p className="text-xs text-on-secondary-fixed-variant leading-relaxed italic bg-surface-container-lowest/70 p-3 rounded-lg">"Cơ sở Biển Xanh xin nhận lỗi toàn diện về sự cố đêm 18/10. Do nhân viên ca tối chưa đối soát và đồng bộ lại hệ thống Channel Manager nên để xảy ra tình trạng trùng phòng. Cơ sở xin cam kết hoàn tiền 100% cho khách Đặng Thu Hà và gửi tặng voucher miễn phí 1 đêm cho lần lưu trú tiếp theo."</p>
                      </div>
                      {/* Manager Internal Assessment */}
                      <div className="p-4 rounded-xl bg-primary-fixed/30 space-y-2">
                        <div className="flex items-center gap-2 text-on-primary-fixed">
                          <span className="material-symbols-outlined text-base text-primary">rate_review</span>
                          <span className="text-xs font-bold uppercase tracking-wider">Đánh giá của Platform Manager (Lê Hoàng Quân)</span>
                        </div>
                        <p className="text-xs text-on-primary-fixed-variant leading-relaxed">
                          "Hành vi vi phạm nghiêm trọng cam kết bảo đảm nơi ở
                          <strong className="font-semibold text-primary">StayReco Shield</strong>
                          . Cơ sở đã có 2 lần vi phạm tương tự trong tháng 9 với lý do đồng bộ kỹ thuật nhưng không có biện pháp khắc phục triệt để. Đề xuất chuyển Admin đình chỉ mở bán tạm thời 14 ngày để rà soát lại quy trình vận hành và kiểm tra kết nối API."
                        </p>
                      </div>
                      {/* Action Form & Governance Guardrail */}
                      <div className="pt-2 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Quyết định xử lý theo thẩm quyền</h4>
                          <span className="text-[11px] text-on-surface-variant">Vai trò: Platform Manager (Thẩm định & Kiến nghị)</span>
                        </div>
                        {/* Action Buttons Stack */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button className="h-11 px-4 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high text-xs font-semibold flex items-center justify-center gap-2 transition-colors" type="button">
                            <span className="material-symbols-outlined text-base">payments</span>
                            <span>Yêu cầu bồi hoàn khách hàng</span>
                          </button>
                          <button className="h-11 px-4 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high text-xs font-semibold flex items-center justify-center gap-2 transition-colors" type="button">
                            <span className="material-symbols-outlined text-base">mail</span>
                            <span>Gửi văn bản cảnh cáo chính thức</span>
                          </button>
                        </div>
                        {/* Primary Execution CTA */}
                        <button className="w-full h-12 px-6 rounded-xl bg-secondary text-on-secondary hover:bg-secondary/90 shadow-md flex items-center justify-center gap-2.5 text-sm font-bold tracking-wide transition-all focus:ring-2 focus:ring-secondary focus:ring-offset-2" type="button">
                          <span className="material-symbols-outlined text-xl">gavel</span>
                          <span>GỬI ĐỀ NGHỊ ĐÌNH CHỈ TÀI KHOẢN (Chuyển Admin A03 phê duyệt)</span>
                        </button>
                        {/* Governance Warning Notice */}
                        <div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-2.5 text-on-surface-variant">
                          <span className="material-symbols-outlined text-base text-primary flex-shrink-0 mt-0.5">lock</span>
                          <p className="text-[11px] leading-relaxed">
                            <strong className="text-on-surface font-semibold">Ghi chú nguyên tắc bảo mật & phân quyền:</strong>
                            Platform Manager chỉ có quyền lập biên bản điều tra và đề nghị đình chỉ; quyết định khóa tài khoản/thu hồi quyền truy cập đối tác và hoàn tiền cưỡng chế thuộc thẩm quyền Admin tối cao (A03).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Evidence Attachment Preview Row */}
                  <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_16px_rgba(32,43,54,0.05)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-on-surface">Tài liệu đính kèm hồ sơ vụ việc</span>
                      <span className="text-xs text-on-surface-variant">2 tệp ảnh chụp | 1 tệp âm thanh WAV</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="relative group rounded-lg overflow-hidden bg-surface-container h-20">
                        <img className="w-full h-full object-cover" data-alt="Screenshot of chat messages between hotel receptionist admitting room overbooking and the distressed guest at night in Vietnamese language" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQj7iKpQjmG91-TmAumpyl1bzqvfu41WGuL4Rn7L1-XBEAExxzDsqwkxiYCZ3v_Uf7QVmnlzs2WikJl57MHzxhA9ns-pZxsHprlkQo69GtT2hk2JbhzuNXrRCkj_t1VqspLgq18sFYsBjVyxuQ02frnzc7NMa6UDU6aclRjeTYc9_yzdcboMFQ3Gj9nFNpPB1TKbhCXD2xvp4XBKQdywH-jA6UucICG7NVAvJE0qtLc2u7-qxftkhT" />
                        <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary text-xs font-semibold">Xem ảnh</div>
                      </div>
                      <div className="relative group rounded-lg overflow-hidden bg-surface-container h-20">
                        <img className="w-full h-full object-cover" data-alt="Digital invoice receipt showing electronic payment of 3,300,000 VND completed via VNPay gateway for hotel booking in Da Nang Vietnam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3BO4IQl1X5pEelNiIRko_kTNOfwMi78XyQXu0XiyRmZO1JdW_el4T-cVuD4vMm0wKWLwggBKZfb4Zewy-gMiIJj3-0G94HURCLWi6Kd6xnb1MXiXfnOMpzgCNKSOfIVvLYRhaUPD72CmN3NKzr7dMintUhg3aiKkvTtQK0WY-_oPZaeUf-rsqWAm2rNHfULP5-k1pTglKEQtTlBW1yuKP_hz-mDPfYPG1Uggt5yKLuUMPqDeCOWfx" />
                        <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary text-xs font-semibold">Hóa đơn</div>
                      </div>
                      <div className="rounded-lg bg-surface-container-low p-2 flex flex-col justify-center items-center text-center">
                        <span className="material-symbols-outlined text-primary text-2xl">audio_file</span>
                        <span className="text-[10px] font-mono text-on-surface-variant mt-1">call_214218_rec.wav</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
