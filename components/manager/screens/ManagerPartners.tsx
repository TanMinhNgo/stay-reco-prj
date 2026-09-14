/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- Legacy DOM-driven screen pending React state migration.
import React from 'react';

export default function ManagerPartners() {
  React.useEffect(() => {
    try {
      (function() {
      const searchInput = document.getElementById('partnerSearchInput');
      if (searchInput) {
        searchInput.addEventListener('input', function(e) {
          const query = e.target.value.toLowerCase().trim();
          const rows = document.querySelectorAll('tbody tr');
          rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            if (text.includes(query)) {
              row.style.display = '';
            } else {
              row.style.display = 'none';
            }
          });
        });
      }
    })();
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
            <div className="px-8 py-8 space-y-8 max-w-[1600px] mx-auto w-full">
              {/* Breadcrumb & Title Section */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div className="space-y-2">
                  <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                    <a className="hover:text-primary transition-colors" href="#">Quản trị nền tảng</a>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-primary font-semibold">Giám sát đối tác & Chất lượng lưu trú</span>
                  </nav>
                  <h1 className="text-2xl lg:text-3xl font-bold font-headline text-on-surface tracking-tight">Giám sát Vận hành & Chỉ số Chất lượng Đối tác Khách sạn</h1>
                  <p className="text-xs lg:text-sm text-on-surface-variant max-w-2xl">Theo dõi real-time chất lượng dịch vụ, chỉ số CSAT và hệ số rủi ro vận hành theo tiêu chuẩn thẩm định StayReco Shield trên toàn bộ hệ thống boutique & eco-resort.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="h-11 px-4 rounded-xl bg-surface-container-lowest text-primary font-semibold text-xs tracking-wide shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">download</span>
                    <span>Xuất báo cáo chất lượng</span>
                  </button>
                  <button className="h-11 px-5 rounded-xl bg-primary text-on-primary font-semibold text-xs tracking-wide shadow-md hover:bg-primary-container transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">tune</span>
                    <span>Thiết lập ngưỡng cảnh báo</span>
                  </button>
                </div>
              </div>
              {/* Metric Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {/* KPI 1 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary-fixed/20 blur-xl group-hover:scale-125 transition-transform"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Đối tác hoạt động</span>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">domain</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <div className="text-3xl font-bold text-on-surface font-headline">186</div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-[13px]">trending_up</span>
                      +8 đối tác tháng này
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-primary">verified</span>
                    <span>100% qua xác thực pháp lý định kỳ</span>
                  </div>
                </div>
                {/* KPI 2 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-tertiary-fixed/20 blur-xl group-hover:scale-125 transition-transform"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Đạt chuẩn StayReco Shield</span>
                    <div className="w-10 h-10 rounded-xl bg-tertiary-container/10 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">shield_with_heart</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <div className="text-3xl font-bold text-on-surface font-headline">98.4%</div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-[13px]">check_circle</span>
                      Vượt SLA 98.0%
                    </span>
                  </div>
                  <div className="mt-3 w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                    <div className="bg-tertiary-container h-full rounded-full" style={{"width":"98.4%"}}></div>
                  </div>
                </div>
                {/* KPI 3 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-secondary-fixed/30 blur-xl group-hover:scale-125 transition-transform"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Tỷ lệ hủy đơn trung bình</span>
                    <div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">event_busy</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <div className="text-3xl font-bold text-on-surface font-headline">4.2%</div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-secondary-fixed/40 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-[13px]">arrow_downward</span>
                      -0.6% vs T-1
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span>1 cơ sở ghi nhận tỷ lệ hủy bất thường (&gt;10%)</span>
                  </div>
                </div>
                {/* KPI 4 */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-primary-fixed/20 blur-xl group-hover:scale-125 transition-transform"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">CSAT Toàn Nền tảng</span>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <div className="text-3xl font-bold text-on-surface font-headline">
                      4.75
                      <span className="text-base text-on-surface-variant font-normal">/5.0</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary-fixed/40 px-2 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-[13px]">hotel_class</span>
                      Dịch vụ xuất sắc
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-on-surface-variant flex items-center justify-between">
                    <span>Dựa trên 3,420 lượt đánh giá lưu trú</span>
                    <span className="font-semibold text-primary">Top 5% OTA</span>
                  </div>
                </div>
              </div>
              {/* Filter Control Bar */}
              <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row items-center gap-4 justify-between">
                <div className="w-full lg:w-96 relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-lg pointer-events-none">search</span>
                  <input className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest transition-all" id="partnerSearchInput" placeholder="Tìm kiếm đối tác khách sạn, địa chỉ, mã PMS..." type="text" />
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  {/* Vùng / Miền */}
                  <div className="relative">
                    <select className="appearance-none h-11 pl-3 pr-9 rounded-xl bg-surface-container-low text-xs font-medium text-on-surface focus:outline-none cursor-pointer">
                      <option value="all">Tất cả vùng miền</option>
                      <option value="danang">Đà Nẵng</option>
                      <option value="hoian">Hội An</option>
                      <option value="dalat">Đà Lạt</option>
                      <option value="phuquoc">Phú Quốc</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-3 text-on-surface-variant pointer-events-none text-base">expand_more</span>
                  </div>
                  {/* Trạng thái mở bán */}
                  <div className="relative">
                    <select className="appearance-none h-11 pl-3 pr-9 rounded-xl bg-surface-container-low text-xs font-medium text-on-surface focus:outline-none cursor-pointer">
                      <option value="all">Tất cả trạng thái</option>
                      <option value="active">Đang mở bán</option>
                      <option value="paused">Tạm dừng nhận khách</option>
                      <option value="warning">Cần cảnh báo chất lượng</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-3 text-on-surface-variant pointer-events-none text-base">expand_more</span>
                  </div>
                  {/* Phân khúc */}
                  <div className="relative">
                    <select className="appearance-none h-11 pl-3 pr-9 rounded-xl bg-surface-container-low text-xs font-medium text-on-surface focus:outline-none cursor-pointer">
                      <option value="all">Hạng phân khúc</option>
                      <option value="boutique">Boutique 4-5 sao</option>
                      <option value="heritage">Heritage Villa</option>
                      <option value="eco">Eco-lodge</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-3 text-on-surface-variant pointer-events-none text-base">expand_more</span>
                  </div>
                  <button className="h-11 px-3.5 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-center" title="Làm mới bộ lọc">
                    <span className="material-symbols-outlined text-lg">restart_alt</span>
                  </button>
                </div>
              </div>
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Partner Table Column */}
                <div className="xl:col-span-8 flex flex-col space-y-4">
                  <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                    <div className="p-5 flex items-center justify-between bg-surface-container-lowest">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                        <h2 className="font-headline font-semibold text-sm text-on-surface">Danh sách cơ sở lưu trú trực tiếp (5 đối tác trọng điểm)</h2>
                      </div>
                      <div className="text-[11px] text-on-surface-variant">Cập nhật lúc: 10:42 sáng nay</div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-surface-container text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider">
                            <th className="py-3 px-5">Tên Khách sạn & Vị trí</th>
                            <th className="py-3 px-4">Số phòng & Công suất</th>
                            <th className="py-3 px-4">Booking tháng</th>
                            <th className="py-3 px-4">Tỷ lệ hủy phòng</th>
                            <th className="py-3 px-4">CSAT</th>
                            <th className="py-3 px-4">Tỷ lệ phản hồi</th>
                            <th className="py-3 px-4">Trạng thái</th>
                            <th className="py-3 px-5 text-right">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-low text-xs">
                          {/* Row 1 */}
                          <tr className="hover:bg-surface-container-low/70 transition-colors group">
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                                  <img className="w-full h-full object-cover" data-alt="A tranquil boutique hotel facade along the Da Nang riverside at dawn, modern warm architecture with timber accents, coastal blue atmosphere, soft morning light, architectural photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbaWFsSUPyrzVVeHKV2hOZ4qOfpQ28LNvxVvTnQDa2_Z_QHCRvqx3SB7t5bYm8PnL0tB59x256Ea9lNmccMo7MKPxLDV0zpmNlCck3X_39hJtRDmCfX3qjST3ApR5iFLJHxEuqsy0orgAPeR_Lm6Z16Ns1o0XIvolqdo7QZ2HBlHBIvaimOUeqkRRdMXpa10YqjnirO2t--781ul3dRMmoWyF5Jco-t6y0HBhhJTvXOsi2jx3FhzBl" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-on-surface text-sm group-hover:text-primary transition-colors truncate">An Nhiên Riverside Hotel</div>
                                  <div className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5 truncate">
                                    <span className="material-symbols-outlined text-[13px] text-on-surface-variant">location_on</span>
                                    128 Bạch Đằng, Đà Nẵng
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">36 phòng</div>
                              <div className="text-[11px] text-tertiary flex items-center gap-1 font-medium mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                84.6% công suất
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface font-headline text-sm">228</div>
                              <span className="text-[10px] text-on-surface-variant">lượt đặt phòng</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-tertiary">3.1%</div>
                              <span className="px-2 py-0.5 text-[10px] rounded font-medium bg-tertiary-fixed/30 text-tertiary">Rất tốt</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="flex items-center gap-1 font-semibold text-on-surface">
                                <span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                                4.8
                              </div>
                              <span className="text-[10px] text-on-surface-variant">48 đánh giá</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">98.4%</div>
                              <div className="text-[10px] text-on-surface-variant">&lt; 2 phút phản hồi</div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-tertiary-fixed/40 text-tertiary">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                Đang mở bán
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2">
                                <button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all text-xs font-medium" title="Xem chi tiết giám sát">Xem chi tiết</button>
                                <button className="p-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Mở hồ sơ tuân thủ">
                                  <span className="material-symbols-outlined text-base">policy</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr className="hover:bg-surface-container-low/70 transition-colors group">
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                                  <img className="w-full h-full object-cover" data-alt="Traditional Vietnamese heritage villa courtyard in Hoi An old town with terracotta tiles, paper lanterns, blooming bougainvillea, and wooden colonial louvers in soft golden afternoon light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIgwr2EtoZ11cyqH-AOinN1YHHS3WrRcgodq65SfQLmwElbTUD4De2-sw0iKsR9WgHsJu-Xwt9eYLyrbjzq07wQgdLoYWToX8m_1XlpYp_e-_LVtqT5NiB75lUihPH43OIsvNnnsJQRuEGAbvka8j2Jw1X8GVVOTgeSp_YakJnBfjPjoQeFKyCw366NObgaKKCdTVxJJn3OXqek71Dwa1k0_SczVDRioBXK4WVi1beNuSY-kDvgI3P" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-on-surface text-sm group-hover:text-primary transition-colors truncate">Phố Hoài Heritage Villa</div>
                                  <div className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5 truncate">
                                    <span className="material-symbols-outlined text-[13px] text-on-surface-variant">location_on</span>
                                    Phố cổ Hội An
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">24 phòng</div>
                              <div className="text-[11px] text-tertiary flex items-center gap-1 font-medium mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                78.2% công suất
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface font-headline text-sm">196</div>
                              <span className="text-[10px] text-on-surface-variant">lượt đặt phòng</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">4.5%</div>
                              <span className="px-2 py-0.5 text-[10px] rounded font-medium bg-surface-container text-on-surface-variant">Tốt</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="flex items-center gap-1 font-semibold text-on-surface">
                                <span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                                4.7
                              </div>
                              <span className="text-[10px] text-on-surface-variant">36 đánh giá</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">95.0%</div>
                              <div className="text-[10px] text-on-surface-variant">&lt; 5 phút phản hồi</div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-tertiary-fixed/40 text-tertiary">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                Đang mở bán
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2">
                                <button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all text-xs font-medium">Xem chi tiết</button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr className="hover:bg-surface-container-low/70 transition-colors group">
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                                  <img className="w-full h-full object-cover" data-alt="Eco-friendly luxury wooden lodge nestled amongst misty pine hills in Da Lat, large glass windows reflecting nature, warm indoor fireplace glow, architectural calm aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuyfztjHJlhMYFPNl2-eT5lxsk4LWBQroL3zic8hvcHNBNNRSXehiTPKCKRYByvDogma4RuFYmF2BKh502uBqzxiMHR_ydpNXui_cFlX42Go15lej2_T6pg_8P_yxpC4hx_7wGXJ6XD96midUHhXRIzKid36Eu7u2JSFpCIvBYpXb-rQkiOWZ8CdXtJf6tvVJlTBXEgQlSvo6dXqkEsY19wFrmxiIQ24u0rMWXu6GS56jiDmwpqjYC" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-on-surface text-sm group-hover:text-primary transition-colors truncate">Mộc Nhiên Eco-Lodge</div>
                                  <div className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5 truncate">
                                    <span className="material-symbols-outlined text-[13px] text-on-surface-variant">location_on</span>
                                    Đồi thông Đà Lạt
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">18 phòng</div>
                              <div className="text-[11px] text-tertiary flex items-center gap-1 font-medium mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                91.0% công suất
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface font-headline text-sm">172</div>
                              <span className="text-[10px] text-on-surface-variant">lượt đặt phòng</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-tertiary">2.8%</div>
                              <span className="px-2 py-0.5 text-[10px] rounded font-medium bg-tertiary-fixed/30 text-tertiary">Rất tốt</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="flex items-center gap-1 font-semibold text-on-surface">
                                <span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                                4.8
                              </div>
                              <span className="text-[10px] text-on-surface-variant">52 đánh giá</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">99.1%</div>
                              <div className="text-[10px] text-on-surface-variant">&lt; 1 phút phản hồi</div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-tertiary-fixed/40 text-tertiary">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                Đang mở bán
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2">
                                <button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all text-xs font-medium">Xem chi tiết</button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 4: WARNING */}
                          <tr className="bg-secondary-container/10 hover:bg-secondary-container/20 transition-colors group">
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 ring-2 ring-secondary/30">
                                  <img className="w-full h-full object-cover" data-alt="Modern coastal retreat hotel near My Khe beach Da Nang with infinity pool and palm trees, overcast tropical sky, luxury exterior architecture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApuG2EFwjixGCO242o3-H2LbYo8jqAgAQR9UVhnc9kiZHkFBeDoUnNRXJsHv5ljiQYQgqnWepCUuapDUNuIN8ID5x1rQQdI3U_C3R0EtXABSvMrOKo3dvpf6UigiIbNjjsgScifAzLdMLTwgP7uTWbIYm6hb4fMrgsCtrN0hozNP4YS1dYX8jiRIth8lBRNUdYPSS7Ow94goZ42eOC61Zbjb91FRmWpYU8F33q9rog4TzDCAx3oV6O" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-on-surface text-sm truncate">Biển Xanh Retreat & Spa</span>
                                    <span className="px-1.5 py-0.5 rounded bg-secondary text-on-secondary text-[9px] font-bold uppercase">Cần lưu ý</span>
                                  </div>
                                  <div className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5 truncate">
                                    <span className="material-symbols-outlined text-[13px] text-on-surface-variant">location_on</span>
                                    Mỹ Khê, Đà Nẵng
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">42 phòng</div>
                              <div className="text-[11px] text-secondary flex items-center gap-1 font-medium mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                62.4% công suất
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface font-headline text-sm">88</div>
                              <span className="text-[10px] text-secondary font-medium">Giảm 42% vs T-1</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-bold text-secondary text-sm">14.8%</div>
                              <span className="px-2 py-0.5 text-[10px] rounded font-bold bg-secondary-fixed text-on-secondary-fixed">Bất thường</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="flex items-center gap-1 font-bold text-secondary">
                                <span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star_half</span>
                                3.9
                              </div>
                              <span className="text-[10px] text-secondary">18 đánh giá (Xu hướng giảm)</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-secondary">74.2%</div>
                              <div className="text-[10px] text-secondary">&gt; 45 phút phản hồi</div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                                Cần cảnh báo chất lượng
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-1.5">
                                <a className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary hover:bg-on-secondary-container transition-all text-xs font-semibold shadow-sm inline-flex items-center gap-1" data-path="tuan-thu-&-vi-pham" href="#">
                                  <span className="material-symbols-outlined text-sm">gavel</span>
                                  <span>Mở M05</span>
                                </a>
                                <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant transition-all text-xs font-medium">Nhắc nhở</button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 5 */}
                          <tr className="hover:bg-surface-container-low/70 transition-colors group">
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                                  <img className="w-full h-full object-cover" data-alt="Sunset Boutique Retreat in An Thoi, Phu Quoc with panoramic ocean views, infinity wooden deck, serene tropical island ambience, sunset reflections on water." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3L0Axb7Rpp_-IiO2EkfuOvQYer4RC3Xcb8G6IxzhjQ9HINtpJYDj6JXWfqEpAyTof9qhoGqOMDkcoc09HOcdIqUMB7gEMrjvovbLA8Xvb5XKsKsxwJGCb33oUOidxWtri833QnxcSoAadxdEPUnzv_SPcFH2vhS_7XedCtn7SxODX1S_1FrcFH48Vee_OTduNydFFkyMnxxWI0lSkkFb1FRb83Y4iupYfQmv4NxYg4KY9gwC4S9dy" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-on-surface text-sm group-hover:text-primary transition-colors truncate">Sunset Bay Boutique Retreat</div>
                                  <div className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5 truncate">
                                    <span className="material-symbols-outlined text-[13px] text-on-surface-variant">location_on</span>
                                    An Thới, Phú Quốc
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">30 phòng</div>
                              <div className="text-[11px] text-tertiary flex items-center gap-1 font-medium mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                88.5% công suất
                              </div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface font-headline text-sm">165</div>
                              <span className="text-[10px] text-on-surface-variant">lượt đặt phòng</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">3.6%</div>
                              <span className="px-2 py-0.5 text-[10px] rounded font-medium bg-surface-container text-on-surface-variant">Tốt</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="flex items-center gap-1 font-semibold text-on-surface">
                                <span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
                                4.9
                              </div>
                              <span className="text-[10px] text-on-surface-variant">64 đánh giá</span>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-semibold text-on-surface">97.8%</div>
                              <div className="text-[10px] text-on-surface-variant">&lt; 3 phút phản hồi</div>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-tertiary-fixed/40 text-tertiary">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                Đang mở bán
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2">
                                <button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all text-xs font-medium">Xem chi tiết</button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Table Pagination Footer */}
                    <div className="p-4 bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
                      <div>Hiển thị 1 - 5 trên tổng số 186 cơ sở đối tác hoạt động</div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface flex items-center justify-center shadow-sm disabled:opacity-50" disabled>
                          <span className="material-symbols-outlined text-base">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-semibold flex items-center justify-center shadow-sm">1</button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-on-surface flex items-center justify-center shadow-sm">2</button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-on-surface flex items-center justify-center shadow-sm">3</button>
                        <span className="px-1 text-on-surface-variant">...</span>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-on-surface flex items-center justify-center shadow-sm">38</button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-on-surface flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-base">chevron_right</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Regional Performance Distribution Bar */}
                  <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-headline font-semibold text-sm text-on-surface">Phân bố công suất phòng theo địa bàn trọng điểm</h3>
                        <p className="text-xs text-on-surface-variant mt-0.5">Tỷ lệ lấp đầy phòng trung bình và số lượng cơ sở quản lý</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-surface-container text-on-surface-variant">Thời gian thực</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-on-surface">Đà Nẵng</span>
                          <span className="font-bold text-primary">82.4%</span>
                        </div>
                        <div className="mt-2 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{"width":"82.4%"}}></div>
                        </div>
                        <span className="text-[10px] text-on-surface-variant mt-2">64 cơ sở lưu trú</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-on-surface">Hội An</span>
                          <span className="font-bold text-primary">79.1%</span>
                        </div>
                        <div className="mt-2 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{"width":"79.1%"}}></div>
                        </div>
                        <span className="text-[10px] text-on-surface-variant mt-2">48 cơ sở lưu trú</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-on-surface">Đà Lạt</span>
                          <span className="font-bold text-primary">88.6%</span>
                        </div>
                        <div className="mt-2 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{"width":"88.6%"}}></div>
                        </div>
                        <span className="text-[10px] text-on-surface-variant mt-2">42 cơ sở lưu trú</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-on-surface">Phú Quốc</span>
                          <span className="font-bold text-primary">86.2%</span>
                        </div>
                        <div className="mt-2 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{"width":"86.2%"}}></div>
                        </div>
                        <span className="text-[10px] text-on-surface-variant mt-2">32 cơ sở lưu trú</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Analytical & AI Sentinel Panel */}
                <div className="xl:col-span-4 flex flex-col space-y-6">
                  {/* AI Quality Sentinel Box */}
                  <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm relative overflow-hidden">
                    <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-lg">crisis_alert</span>
                        </div>
                        <div>
                          <h3 className="font-headline font-bold text-sm text-on-surface">AI Quality Sentinel</h3>
                          <div className="text-[11px] text-on-surface-variant">Phát hiện rủi ro vận hành tự động</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-secondary-fixed text-on-secondary-fixed">2 Cảnh báo</span>
                    </div>
                    {/* Risk Items */}
                    <div className="mt-5 space-y-4">
                      {/* Risk 1 */}
                      <div className="p-4 rounded-xl bg-secondary-container/15 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                            <span className="material-symbols-outlined text-base">warning</span>
                            <span>Tỷ lệ hủy vọt ngưỡng đỏ (+14.8%)</span>
                          </div>
                          <span className="text-[10px] font-mono text-on-surface-variant">7 ngày qua</span>
                        </div>
                        <p className="text-xs text-on-surface leading-relaxed">
                          <strong className="text-on-surface">Biển Xanh Retreat & Spa</strong>
                          có tỷ lệ hủy đơn tăng từ 3.2% lên 14.8%. Tỷ lệ không chấp nhận booking đạt đỉnh vào khung giờ 18h-22h.
                        </p>
                        <div className="pt-2 flex items-center justify-between text-[11px]">
                          <span className="text-on-surface-variant">
                            Mức độ ảnh hưởng:
                            <strong className="text-secondary font-semibold">Nghiêm trọng</strong>
                          </span>
                          <span className="text-primary font-medium hover:underline cursor-pointer">Xem dữ liệu chi tiết →</span>
                        </div>
                      </div>
                      {/* Risk 2 */}
                      <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-on-surface">
                            <span className="material-symbols-outlined text-base text-secondary">volume_up</span>
                            <span>Phản ánh tiếng ồn chưa khai báo</span>
                          </div>
                          <span className="text-[10px] font-mono text-on-surface-variant">24 giờ qua</span>
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">2 phản hồi tiêu cực liên tiếp từ khách hàng lưu trú phàn nàn về công trình thi công hạ tầng kế cận gây ồn từ 06:30 sáng, vi phạm cam kết minh bạch trải nghiệm.</p>
                        <div className="flex items-center gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-surface-container text-[10px] font-medium text-on-surface-variant">CSAT giảm: 4.8 → 3.9</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container text-[10px] font-medium text-on-surface-variant">2 khiếu nại bồi hoàn</span>
                        </div>
                      </div>
                    </div>
                    {/* AI Recommendation Box */}
                    <div className="mt-6 p-4 rounded-xl bg-primary-container text-on-primary space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-primary-fixed-dim">auto_awesome</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary-fixed">Khuyến nghị Platform Manager</span>
                      </div>
                      <p className="text-xs text-on-primary leading-relaxed opacity-95">Áp dụng chế tài tuân thủ tức thời: Yêu cầu đại diện cơ sở giải trình allotments trong 12 giờ, đồng thời tạm thời hạ thứ hạng hiển thị (Search Rank Suppression) để bảo vệ trải nghiệm khách hàng.</p>
                      <div className="pt-1 flex flex-col sm:flex-row items-stretch gap-2">
                        <a className="h-9 px-3.5 rounded-lg bg-surface-container-lowest text-primary text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-surface-container-low transition-colors text-center" data-path="tuan-thu-&-vi-pham" href="#">
                          <span className="material-symbols-outlined text-sm">assignment_turned_in</span>
                          <span>Kích hoạt quy trình M05</span>
                        </a>
                        <button className="h-9 px-3 rounded-lg bg-primary-container text-primary-fixed hover:bg-primary transition-colors text-xs font-medium text-center">Bỏ qua cảnh báo</button>
                      </div>
                    </div>
                  </div>
                  {/* Quick Compliance Actions Card */}
                  <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline font-semibold text-sm text-on-surface">Tiêu chuẩn kiểm duyệt định kỳ</h3>
                      <span className="material-symbols-outlined text-on-surface-variant text-base">verified</span>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
                            <span className="material-symbols-outlined text-base">fact_check</span>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-on-surface">Đánh giá cơ sở vật chất Q2</div>
                            <div className="text-[11px] text-on-surface-variant">142/186 cơ sở hoàn tất</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-tertiary">76.3%</span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-base">security</span>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-on-surface">Bảo hiểm trách nhiệm lưu trú</div>
                            <div className="text-[11px] text-on-surface-variant">182/186 còn hiệu lực</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-primary">97.8%</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <a className="text-xs font-semibold text-primary hover:text-primary-container flex items-center justify-center gap-1 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all" data-path="duyet-ho-so-doi-tac" href="#">
                        <span>Xem toàn bộ danh sách hồ sơ kiểm định</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Interactive script for inline table filtering */}
          </div>
        </main>
      </div>
    </div>
  );
}
