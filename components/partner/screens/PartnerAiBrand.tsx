/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck -- Legacy DOM-driven screen; migrate interactions to React state separately.
import React from 'react';

export default function PartnerAiBrand() {
  React.useEffect(() => {
    try {
      (function() {
    const saveBtn = document.getElementById('btn-save-voice');
    const toast = document.getElementById('toast-success');
    const reSimBtn = document.getElementById('btn-re-simulate');
    const testGenBtn = document.getElementById('btn-test-gen');

    if (saveBtn && toast) {
      saveBtn.addEventListener('click', () => {
        saveBtn.classList.add('opacity-80', 'scale-95');
        setTimeout(() => {
          saveBtn.classList.remove('opacity-80', 'scale-95');
          toast.classList.remove('translate-y-24');
          setTimeout(() => {
            toast.classList.add('translate-y-24');
          }, 3500);
        }, 300);
      });
    }

    if (reSimBtn) {
      reSimBtn.addEventListener('click', () => {
        const syncIcon = reSimBtn.querySelector('.material-symbols-outlined');
        if (syncIcon) {
          syncIcon.classList.add('animate-spin');
          setTimeout(() => syncIcon.classList.remove('animate-spin'), 700);
        }
      });
    }

    if (testGenBtn && saveBtn) {
      testGenBtn.addEventListener('click', () => {
        testGenBtn.classList.add('bg-surface-container');
        setTimeout(() => testGenBtn.classList.remove('bg-surface-container'), 400);
      });
    }
  })();
    } catch (err) {
      console.error('Error executing interaction script:', err);
    }
  }, []);

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-16 px-5 flex items-center gap-3 bg-surface-container-lowest">
            <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-headline font-bold text-lg">S</div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-sm tracking-tight text-primary leading-tight">StayReco</span>
              <span className="text-[11px] font-medium text-secondary uppercase tracking-wider">Partner Portal</span>
            </div>
          </div>
          <nav className="px-3 pt-4 space-y-6" data-active-classes="bg-primary-container text-on-primary font-medium rounded-lg shadow-sm">
            <div className="space-y-1">
              <p className="px-3 pb-1 text-[11px] font-semibold text-on-surface-variant/70 tracking-wider uppercase">Quản lý kinh doanh</p>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="tong-quan" href="#">
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                Tổng quan
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="khach-san-va-co-so" href="#">
                <span className="material-symbols-outlined text-[20px]">apartment</span>
                Khách sạn & Cơ sở
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="kho-phong" href="#">
                <span className="material-symbols-outlined text-[20px]">bed</span>
                Kho phòng
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="lich-ton-va-kha-dung" href="#">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                Lịch tồn & Khả dụng
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="luat-gia-va-mua-vu" href="#">
                <span className="material-symbols-outlined text-[20px]">price_change</span>
                Luật giá & Mùa vụ
              </a>
            </div>
            <div className="space-y-1">
              <p className="px-3 pb-1 text-[11px] font-semibold text-on-surface-variant/70 tracking-wider uppercase">Tiếp thị & Khách hàng</p>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="chien-dich-va-giam-gia" href="#">
                <span className="material-symbols-outlined text-[20px]">campaign</span>
                Chiến dịch & Giảm giá
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="khach-hang-than-thiet" href="#">
                <span className="material-symbols-outlined text-[20px]">loyalty</span>
                Khách hàng thân thiết
              </a>
              <a aria-current="page" className="flex items-center gap-3 px-3 py-2 transition-colors bg-primary-container text-on-primary font-medium rounded-lg shadow-sm" data-path="giong-thuong-hieu-ai" href="#">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                Giọng thương hiệu AI
              </a>
            </div>
            <div className="space-y-1">
              <p className="px-3 pb-1 text-[11px] font-semibold text-on-surface-variant/70 tracking-wider uppercase">Tổ chức & Hồ sơ</p>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="nhan-vien-va-phan-quyen" href="#">
                <span className="material-symbols-outlined text-[20px]">badge</span>
                Nhân viên & Phân quyền
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="ho-so-va-xac-minh" href="#">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
                Hồ sơ & Xác minh
              </a>
            </div>
          </nav>
        </div>
        <div className="p-3 space-y-2 bg-surface-container-low/50 m-3 rounded-xl">
          <a className="flex items-center justify-between px-3 py-2 text-xs font-medium text-primary hover:text-on-primary-fixed-variant rounded-lg hover:bg-surface-container-lowest transition-colors" href="#">
            <span>Xem trang khách sạn</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
          <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-on-surface-variant">
            <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[11px]">CM: Đang đồng bộ</span>
          </div>
        </div>
      </aside>
      <div className="pl-64">
        <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg">
              <span className="material-symbols-outlined text-secondary text-[20px]">domain</span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-on-surface leading-tight">An Nhiên Riverside Hotel</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-on-surface-variant">4-Star, Đà Nẵng</span>
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">Đã xác minh</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] ml-1 cursor-pointer">arrow_drop_down</span>
            </div>
            <div className="relative hidden lg:block w-72">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
              <input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="Tìm kiếm đặt phòng, phòng, khách sạn..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
            </button>
            <div className="h-6 w-px bg-surface-container-high mx-1"></div>
            <div className="flex items-center gap-3 pl-1">
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-on-surface leading-tight">Trần Nam</span>
                <span className="text-[11px] text-secondary font-medium">Chủ khách sạn</span>
              </div>
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida/AEtjO1V-SCfN5vRag32eaaMCe725o3qjMzRhq78BRcuhKmOXxEDu4G8qm577peTkqU28fF62pdny08VmbaOwjGzlFo32VJpAA8SPA924onlWgQ2t92x5iGKeuhw1fCMiUdigsg6mge97P7ahRot5alw95ynt0-n2m7IucAr968MgN5mTjYAV6AnplZ0Xx-7f4H3KdFhb1vm9RS4hCaI81jJK3nFDIJCSwTS5926q0xHmfGl3sY60Y-Y_wuhSWwMDAhg2Nz8K1d9sN9cn" />
            </div>
          </div>
        </header>
        <main className="w-full pt-16 bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            {/* Top Context Header & Actions */}
            <div className="p-8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                  <span className="hover:text-primary transition-colors cursor-pointer">Tiếp thị & Khách hàng</span>
                  <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
                  <span className="text-secondary font-semibold">Giọng thương hiệu AI</span>
                </nav>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold font-headline text-primary tracking-tight">Cấu hình Giọng điệu Thương hiệu AI</h1>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    Đang áp dụng
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant max-w-2xl leading-relaxed">
                  Thiết lập tính cách, phong cách ngôn từ và các dữ kiện cốt lõi của
                  <strong className="text-on-surface font-semibold">An Nhiên Riverside Hotel</strong>
                  để Trợ lý AI và AI Marketing kế thừa khi tương tác với du khách.
                </p>
              </div>
              {/* Action Toolbar */}
              <div className="flex items-center gap-3 shrink-0">
                <button className="h-11 px-5 rounded-lg bg-surface-container-lowest text-on-surface text-xs font-semibold shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-2" id="btn-test-gen" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">auto_awesome</span>
                  <span>Tạo thử nghiệm nội dung mẫu</span>
                </button>
                <button className="h-11 px-6 rounded-lg bg-primary-container text-on-primary text-xs font-semibold shadow-md hover:bg-primary transition-all flex items-center gap-2" id="btn-save-voice" type="button">
                  <span className="material-symbols-outlined text-[18px]">bookmark_added</span>
                  <span>Lưu cấu hình thương hiệu</span>
                </button>
              </div>
            </div>
            {/* Main Dual Column Workspace */}
            <div className="px-8 pb-12 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              {/* LEFT COLUMN: Brand Persona Configuration (7 Cols) */}
              <div className="xl:col-span-7 space-y-6">
                {/* Section 1: Tôn chỉ & Tính cách */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-5">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">psychology</span>
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-on-surface font-headline tracking-tight">1. Tôn chỉ & Tính cách thương hiệu</h2>
                        <p className="text-[11px] text-on-surface-variant">Định vị nhân dạng cốt lõi của trợ lý truyền thông khách sạn</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-secondary px-2 py-0.5 rounded-full bg-secondary-fixed">Boutique Core</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1.5">Tên phong cách nhận diện</label>
                      <div className="relative">
                        <input className="w-full h-11 px-3.5 bg-surface-container-low text-xs font-medium text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-all" type="text" defaultValue="Boutique Zen & Văn hóa Sông Hàn" />
                        <span className="material-symbols-outlined absolute right-3 top-3 text-secondary text-[18px]">verified</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-on-surface">Sắc thái cảm xúc chủ đạo (Mood & Temperament)</label>
                        <span className="text-[11px] text-on-surface-variant">Chọn tối đa 4 thuộc tính</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-container text-on-primary shadow-sm cursor-pointer">
                          <span className="material-symbols-outlined text-[14px]">local_cafe</span>
                          Ấm cúng & Thân mật
                          <span className="material-symbols-outlined text-[14px] hover:text-error transition-colors">close</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-container text-on-primary shadow-sm cursor-pointer">
                          <span className="material-symbols-outlined text-[14px]">spa</span>
                          Mộc mạc & Thư thái
                          <span className="material-symbols-outlined text-[14px] hover:text-error transition-colors">close</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-container text-on-primary shadow-sm cursor-pointer">
                          <span className="material-symbols-outlined text-[14px]">palette</span>
                          Bản địa tinh tế (Quảng Nam - Đà Nẵng)
                          <span className="material-symbols-outlined text-[14px] hover:text-error transition-colors">close</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-container text-on-primary shadow-sm cursor-pointer">
                          <span className="material-symbols-outlined text-[14px]">diamond</span>
                          Tinh tế & Sang trọng (Tránh giật tít)
                          <span className="material-symbols-outlined text-[14px] hover:text-error transition-colors">close</span>
                        </span>
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
                          <span className="material-symbols-outlined text-[14px]">add</span>
                          Thêm sắc thái
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section 2: Quy tắc từ ngữ & Phát ngôn */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-5">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[20px]">spellcheck</span>
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-on-surface font-headline tracking-tight">2. Quy tắc Từ ngữ & Phát ngôn độc quyền</h2>
                        <p className="text-[11px] text-on-surface-variant">Chỉ dẫn AI các thuật ngữ đại diện và danh mục cấm tuyệt đối</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary-fixed">Strict Filter: On</span>
                  </div>
                  {/* Preferred Lexicon */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-on-surface flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        Từ khóa & Cụm từ ưu tiên sử dụng
                      </label>
                      <span className="text-[11px] text-on-surface-variant">5 cụm từ trọng tâm</span>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 rounded-lg text-xs font-medium text-on-surface shadow-xs">
                        <span>Chốn an yên</span>
                        <span className="material-symbols-outlined text-[13px] text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 rounded-lg text-xs font-medium text-on-surface shadow-xs">
                        <span>Gió mát sông Hàn</span>
                        <span className="material-symbols-outlined text-[13px] text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 rounded-lg text-xs font-medium text-on-surface shadow-xs">
                        <span>Bồn tắm đá ngâm thảo mộc</span>
                        <span className="material-symbols-outlined text-[13px] text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 rounded-lg text-xs font-medium text-on-surface shadow-xs">
                        <span>Bữa sáng nông sản sạch Hội An</span>
                        <span className="material-symbols-outlined text-[13px] text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1 rounded-lg text-xs font-medium text-on-surface shadow-xs">
                        <span>Cầu Rồng</span>
                        <span className="material-symbols-outlined text-[13px] text-outline cursor-pointer hover:text-error">close</span>
                      </div>
                      <input className="bg-transparent text-xs text-on-surface placeholder:text-outline focus:outline-none px-2 py-1 min-w-[140px]" placeholder="+ Nhập từ mới rồi nhấn Enter" type="text" />
                    </div>
                  </div>
                  {/* Blacklist & Guardrails */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-error flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-error"></span>
                        Tuyên bố cấm kỵ (Blacklist Guardrails)
                      </label>
                      <span className="text-[11px] text-error">AI sẽ từ chối đưa vào bản nháp</span>
                    </div>
                    <div className="space-y-2 bg-error-container/20 p-3.5 rounded-xl">
                      <div className="flex items-start gap-2 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">block</span>
                        <p className="leading-relaxed">
                          Tuyệt đối không xưng hô kiểu thương mại phổ thông như
                          <code className="bg-surface-container-lowest px-1.5 py-0.5 rounded text-error font-medium">khách yêu</code>
                          ,
                          <code className="bg-surface-container-lowest px-1.5 py-0.5 rounded text-error font-medium">chế iu</code>
                          .
                        </p>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">block</span>
                        <p className="leading-relaxed">
                          Không dùng thuật ngữ phóng đại sai thực tế như
                          <code className="bg-surface-container-lowest px-1.5 py-0.5 rounded text-error font-medium">đẳng cấp 5 sao quốc tế siêu sang</code>
                          (Khách sạn giữ định vị chuẩn Boutique 4 sao).
                        </p>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">block</span>
                        <p className="leading-relaxed">
                          Không cam kết chiêu trò giảm giá giật gân:
                          <code className="bg-surface-container-lowest px-1.5 py-0.5 rounded text-error font-medium">sale sốc sập sàn</code>
                          ,
                          <code className="bg-surface-container-lowest px-1.5 py-0.5 rounded text-error font-medium">giá rẻ nhất hành tinh</code>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section 3: Khung dữ kiện chuẩn xác (Fact Sheet) */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-5">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">fact_check</span>
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-on-surface font-headline tracking-tight">3. Khung dữ kiện thực tế cốt lõi (Fact Sheet cho AI)</h2>
                        <p className="text-[11px] text-on-surface-variant">Dữ liệu cố định bắt buộc không được sai lệch khi tạo nội dung tư vấn</p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-primary hover:underline flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[16px]">add_circle</span>
                      Thêm dữ kiện
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3.5 bg-surface-container-low rounded-xl space-y-1">
                      <span className="text-[10px] uppercase font-semibold text-outline">Quy định Lưu trú</span>
                      <p className="text-xs font-bold text-on-surface">Nhận phòng: 14:00</p>
                      <p className="text-xs font-bold text-on-surface">Trả phòng: 12:00</p>
                      <span className="inline-block text-[10px] text-on-surface-variant mt-1">Hỗ trợ nhận sớm theo tình trạng phòng</span>
                    </div>
                    <div className="p-3.5 bg-surface-container-low rounded-xl space-y-1">
                      <span className="text-[10px] uppercase font-semibold text-outline">Đặc quyền Trà Chiều</span>
                      <p className="text-xs font-bold text-on-surface">15:00 - 17:00 Hàng ngày</p>
                      <p className="text-xs text-on-surface-variant">Phục vụ miễn phí tại tầng 6</p>
                      <span className="inline-block text-[10px] text-secondary font-medium mt-1">Trà hoa thảo mộc & bánh xứ Quảng</span>
                    </div>
                    <div className="p-3.5 bg-surface-container-low rounded-xl space-y-1">
                      <span className="text-[10px] uppercase font-semibold text-outline">Quy cách Kiến trúc</span>
                      <p className="text-xs font-bold text-on-surface">Kính cách âm 2 lớp</p>
                      <p className="text-xs text-on-surface-variant">100% phòng tiêu chuẩn Châu Âu</p>
                      <span className="inline-block text-[10px] text-tertiary font-medium mt-1">Triệt tiêu tiếng ồn phố thị bên ngoài</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT COLUMN: Real-Time AI Output Simulator (5 Cols) */}
              <div className="xl:col-span-5 space-y-6">
                {/* Brand Consistency Index Gauge Card */}
                <div className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-2xl p-6 shadow-md relative overflow-hidden">
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] text-secondary-container">verified_user</span>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-on-primary-container">Chỉ số nhất quán thương hiệu</h3>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold font-headline">98.2%</span>
                        <span className="text-xs text-tertiary-fixed font-semibold">Tuân thủ hoàn hảo</span>
                      </div>
                      <p className="text-[11px] text-on-primary-container max-w-xs leading-relaxed">Mô hình đã lọc 100% ngôn ngữ rẻ tiền và gắn đầy đủ đặc tính bản địa ven sông Hàn.</p>
                    </div>
                    {/* Circular Metric Progress Graphic */}
                    <div className="relative w-20 h-20 shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-primary/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                        <path className="text-secondary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98.2, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[22px] text-on-primary">insights</span>
                      </div>
                    </div>
                  </div>
                  {/* Ambient decorative background glow */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
                </div>
                {/* Preview 1: AI Concierge Guest Chat */}
                <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                      <h4 className="text-xs font-bold text-on-surface uppercase tracking-wide">Mô phỏng 1: Tư vấn Khách hàng (Concierge AI)</h4>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">Trực tiếp</span>
                  </div>
                  {/* Simulation Chat Screen */}
                  <div className="bg-surface-container-low/60 rounded-xl p-3.5 space-y-3">
                    {/* Guest Question */}
                    <div className="flex items-start gap-2.5 justify-end">
                      <div className="bg-primary-container text-on-primary text-xs p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs leading-relaxed">Khách sạn mình gần cầu Rồng buổi tối ngắm có ồn xe cộ lắm không em? Phòng Deluxe River View có view thoáng không?</div>
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold text-on-surface shrink-0">KH</div>
                    </div>
                    {/* AI Response Inherited Brand Voice */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-xs">
                        <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                      </div>
                      <div className="bg-surface-container-lowest text-on-surface text-xs p-3.5 rounded-2xl rounded-tl-none max-w-[90%] shadow-sm space-y-2 leading-relaxed">
                        <p>
                          Dạ chào Anh/Chị,
                          <strong className="text-primary font-semibold">An Nhiên Riverside</strong>
                          xin chia sẻ sự an tâm đến mình ạ.
                        </p>
                        <p>
                          Toàn bộ hạng phòng
                          <strong className="text-secondary font-medium">Deluxe River View</strong>
                          đều sở hữu tầm nhìn trực diện ôm trọn vẻ đẹp của dòng sông Hàn thơ mộng và Cầu Rồng. Đặc biệt, nhờ hệ thống kính cách âm 2 lớp chuẩn Châu Âu, Anh/Chị hoàn toàn có thể an yên thưởng ngoạn nhịp thở lung linh của phố thị mà vẫn giữ trọn không gian tĩnh lặng, thư thái bên trong chốn nghỉ.
                        </p>
                        <p className="text-[11px] text-on-surface-variant pt-1 border-t-0 bg-surface-container-low p-2 rounded-lg">
                          🌿
                          <em>Gợi ý nhỏ:</em>
                          Từ 15:00 - 17:00, kính mời mình ghé tầng 6 nhâm nhi một tách trà hoa mộc ấm cúng ngắm làn gió sông thanh lành.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Preview 2: Social Media Marketing Content Draft */}
                <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">campaign</span>
                      <h4 className="text-xs font-bold text-on-surface uppercase tracking-wide">Mô phỏng 2: Bài viết Marketing Mùa thu</h4>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Sẵn sàng xuất bản</span>
                  </div>
                  {/* Social Preview Card */}
                  <div className="bg-surface-container-low/40 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">AN</div>
                      <div>
                        <p className="text-xs font-bold text-on-surface leading-tight">An Nhiên Riverside Hotel</p>
                        <p className="text-[10px] text-outline">Bản nháp AI kế thừa Brand Voice • Vừa xong</p>
                      </div>
                    </div>
                    <div className="text-xs text-on-surface space-y-2 leading-relaxed">
                      <p className="font-medium text-primary">[GIỮ CHO LÒNG MỘT KHOẢNG LẶNG BÊN DÒNG SÔNG HÀN]</p>
                      <p>Khi những cơn gió heo may đầu thu khẽ chạm mặt nước Đà thành, người ta lại thèm một chốn an yên để buông lỏng đôi vai sau những bộn bề.</p>
                      <p>Tại An Nhiên, buổi sáng của bạn được khẽ khàng đánh thức bởi hương vị trong lành từ nông sản xanh xứ Quảng, một tách trà tim sen và bồn tắm đá thảo mộc xoa dịu giác quan. Khép lại một ngày ngắm Cầu Rồng rực rỡ qua khung cửa cách âm tĩnh lặng...</p>
                      <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-medium text-secondary">
                        <span>#AnNhienRiverside</span>
                        <span>#ChonAnYen</span>
                        <span>#SongHanDaNang</span>
                        <span>#BoutiqueHospitality</span>
                      </div>
                    </div>
                    {/* Embedded Visual Mock */}
                    <div className="relative w-full h-36 rounded-lg overflow-hidden bg-surface-container shadow-inner">
                      <div className="bg-cover bg-center w-full h-full flex items-end p-3" data-alt="Boutique hotel room balcony overlooking Han River Da Nang at gentle sunrise, wooden zen furnishings, herbal tea pot on ceramic table, misty peaceful river scenery with Dragon Bridge in distance, warm cinematic lighting, authentic Vietnamese boutique aesthetic" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDztdOotrb_IO4K--K8oQGc7PLNd1X2ShdrxA6aXWPnVArdczk9BSj__IpYzzWJtMQpQuoIhyMTyZINoklASszABUSRY5BHOtytOBkYOeOhWzkkLO4kkwzBs-Zp52OZ37uFJlg4SDQydOFsvVEKsgH7qR_zaVASGZ8sMhqVNGOUJ5G1UyU5M_QIIqiMr8Z1wb1hfSCWnFC_EioVi7K5lfIuONEkXCvQ6dCHmuc8ZhVhiZS5qSWzEkUR')"}}>
                        <div className="bg-surface-container-lowest/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-medium text-on-surface shadow-xs">Hình ảnh đồng bộ tự động từ thư viện An Nhiên</div>
                      </div>
                    </div>
                  </div>
                  {/* Live Refresh Feedback Bar */}
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>
                      Không vi phạm từ cấm • Đầy đủ 3 dữ kiện
                    </span>
                    <button className="text-secondary font-semibold hover:underline flex items-center gap-1" id="btn-re-simulate" type="button">
                      <span className="material-symbols-outlined text-[14px]">sync</span>
                      Tạo lại biến thể khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Notification Toast (Hidden by default) */}
            <div className="fixed bottom-6 right-6 bg-surface-container-lowest shadow-xl rounded-xl p-4 flex items-center gap-3 transition-transform duration-300 transform translate-y-24 z-50" id="toast-success">
              <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">done</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface">Đã lưu cấu hình thương hiệu</span>
                <span className="text-[11px] text-on-surface-variant">Tất cả trợ lý AI và chiến dịch mới sẽ áp dụng bộ quy tắc này.</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
