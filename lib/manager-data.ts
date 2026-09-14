import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, Building2, ChartNoAxesCombined, Landmark, ShieldAlert, WalletCards } from 'lucide-react';

export type ManagerMode = 'dashboard' | 'partners' | 'verifications' | 'compliance' | 'revenue' | 'cashflow' | 'transactions';
export type ManagerWorkspace = { title: string; description: string; action: string; icon: LucideIcon; summary: string; rows: readonly (readonly [string, string, string])[] };

const workspace = (title: string, description: string, action: string, icon: LucideIcon, summary: string, rows: ManagerWorkspace['rows']): ManagerWorkspace => ({ title, description, action, icon, summary, rows });

export const managerWorkspaces: Record<Exclude<ManagerMode, 'dashboard'>, ManagerWorkspace> = {
  partners: workspace('Đối tác khách sạn', 'Theo dõi chất lượng danh mục đối tác và xử lý các cơ sở cần hỗ trợ vận hành.', 'Thêm đối tác', Building2, '248 đối tác đang hoạt động', [['An Nhiên Riverside', 'Hội An · Điểm chất lượng 4.8', 'Hoạt động'], ['Mây Sapa Retreat', 'Lào Cai · Cần bổ sung hồ sơ', 'Cần xem'], ['Tam Cốc Garden', 'Ninh Bình · Chờ xác minh', 'Chờ duyệt']]),
  verifications: workspace('Xác minh đối tác', 'Kiểm tra hồ sơ, pháp nhân và tài khoản nhận tiền trước khi mở bán.', 'Xem hồ sơ', BadgeCheck, '12 hồ sơ đang chờ xử lý', [['Tam Cốc Garden', 'Pháp nhân · 2 tài liệu mới', 'Kiểm tra'], ['The Salt House', 'Tài khoản nhận tiền chưa khớp', 'Cần phản hồi'], ['Nếp House', 'Đã hoàn tất đối chiếu', 'Đã duyệt']]),
  compliance: workspace('Tuân thủ & chất lượng', 'Theo dõi tiêu chuẩn dịch vụ, tỷ lệ hủy và các vi phạm cần xử lý kịp thời.', 'Tạo yêu cầu', ShieldAlert, '3 cơ sở cần xử lý trong hôm nay', [['Hội An Riverside Villa', '5 lượt hủy gần ngày trong 30 ngày', 'Cảnh báo'], ['Mây Sapa Retreat', 'Thiếu 2 tài liệu an toàn', 'Theo dõi'], ['An Lâm Retreats', 'Điểm đánh giá trung bình 4.7', 'Ổn định']]),
  revenue: workspace('Doanh thu nền tảng', 'Xem hiệu quả theo đối tác, khu vực và các kênh bán để điều hành mục tiêu doanh thu.', 'Xuất báo cáo', ChartNoAxesCombined, 'GMV tháng này: 8,55 tỷ ₫', [['Miền Trung', '3,28 tỷ ₫ · tăng 12%', 'Tích cực'], ['Miền Bắc', '2,94 tỷ ₫ · tăng 8%', 'Tích cực'], ['Miền Nam', '2,33 tỷ ₫ · giảm 3%', 'Theo dõi']]),
  cashflow: workspace('Dòng tiền & đối soát', 'Quản lý lịch thanh toán đối tác, các khoản giữ lại và chênh lệch cần đối soát.', 'Tạo đối soát', Landmark, '1,24 tỷ ₫ chờ quyết toán', [['Phiên 15:00 hôm nay', '48 giao dịch · 284,6 triệu ₫', 'Sẵn sàng'], ['An Nhiên Riverside', 'Chênh lệch 1 giao dịch', 'Cần xử lý'], ['Phiên 20 Th10', 'Đã hoàn tất đối soát', 'Hoàn tất']]),
  transactions: workspace('Giao dịch & quyết toán', 'Tra cứu giao dịch, xử lý trạng thái bất thường và duy trì lịch sử kiểm toán rõ ràng.', 'Xuất giao dịch', WalletCards, '6 giao dịch cần đối soát', [['#TX-8921', '4.250.000 ₫ · VNPay timeout', 'Cần xử lý'], ['#TX-8919', '2.180.000 ₫ · Đã thanh toán', 'Hoàn tất'], ['#TX-8918', '1.650.000 ₫ · Chờ IPN', 'Chờ IPN']]),
};

export const managerAdditionalRows: Record<Exclude<ManagerMode, 'dashboard'>, ManagerWorkspace['rows']> = {
  partners: [
    ['Làng Biển Boutique', 'Đà Nẵng · Điểm chất lượng 4.6', 'Hoạt động'],
    ['The Lantern Hội An', 'Quảng Nam · Tỷ lệ lấp đầy 81%', 'Hoạt động'],
    ['Pù Luông Eco Lodge', 'Thanh Hóa · Cần cập nhật bảng giá', 'Cần xem'],
    ['Ninh Bình Hidden Charm', 'Ninh Bình · Đồng bộ OTA ổn định', 'Hoạt động'],
    ['Đồi Mây Đà Lạt', 'Lâm Đồng · Chờ hoàn tất hợp đồng', 'Chờ duyệt'],
  ],
  verifications: [
    ['Làng Biển Boutique', 'Giấy phép kinh doanh · Đã đối chiếu', 'Đã duyệt'],
    ['Pù Luông Eco Lodge', 'PCCC · Cần bổ sung bản mới', 'Cần phản hồi'],
    ['The Lantern Hội An', 'Tài khoản nhận tiền · Đã xác thực', 'Đã duyệt'],
    ['Đồi Mây Đà Lạt', 'Pháp nhân · Đang xác minh đại diện', 'Kiểm tra'],
    ['Ninh Bình Hidden Charm', 'Hồ sơ cơ sở · 1 tài liệu mới', 'Kiểm tra'],
  ],
  compliance: [
    ['Làng Biển Boutique', 'Điểm vệ sinh phòng giảm 0.3', 'Theo dõi'],
    ['The Lantern Hội An', 'Tỷ lệ phản hồi khách đạt 98%', 'Ổn định'],
    ['Pù Luông Eco Lodge', '2 phản ánh về thời gian check-in', 'Cảnh báo'],
    ['Đồi Mây Đà Lạt', 'Đã hoàn tất kiểm tra chất lượng', 'Ổn định'],
    ['Ninh Bình Hidden Charm', 'Tỷ lệ hủy phòng trong ngưỡng', 'Ổn định'],
  ],
  revenue: [
    ['Đà Nẵng', '1,46 tỷ ₫ · tăng 15%', 'Tích cực'],
    ['Hà Nội', '1,21 tỷ ₫ · tăng 7%', 'Tích cực'],
    ['Hội An', '986 triệu ₫ · tăng 11%', 'Tích cực'],
    ['Đà Lạt', '842 triệu ₫ · giảm 2%', 'Theo dõi'],
    ['Ninh Bình', '615 triệu ₫ · tăng 6%', 'Tích cực'],
  ],
  cashflow: [
    ['Phiên 11:00 hôm nay', '32 giao dịch · 196,4 triệu ₫', 'Sẵn sàng'],
    ['Mây Sapa Retreat', 'Chênh lệch phí nền tảng 420.000 ₫', 'Cần xử lý'],
    ['Phiên 18 Th10', '61 giao dịch · 352,8 triệu ₫', 'Hoàn tất'],
    ['The Lantern Hội An', 'Đang xác nhận hoàn tiền khách', 'Đang xử lý'],
    ['Phiên 13 Th10', '54 giao dịch · 318,2 triệu ₫', 'Hoàn tất'],
  ],
  transactions: [
    ['#TX-8917', '3.900.000 ₫ · Đã thanh toán', 'Hoàn tất'],
    ['#TX-8916', '980.000 ₫ · Chờ ngân hàng phản hồi', 'Chờ IPN'],
    ['#TX-8915', '6.240.000 ₫ · Yêu cầu hoàn tiền', 'Cần xử lý'],
    ['#TX-8914', '1.250.000 ₫ · Đã thanh toán', 'Hoàn tất'],
    ['#TX-8913', '2.760.000 ₫ · Đã đối soát', 'Hoàn tất'],
  ],
};

export const managerDashboardSignals = [
  ['10:42', 'Đối soát', 'An Nhiên Riverside', 'Chênh lệch 1 giao dịch VNPay', 'Cần xử lý', 'Quân T.Đ'],
  ['10:18', 'Xác minh', 'Tam Cốc Garden', 'Đã bổ sung giấy phép PCCC', 'Chờ duyệt', 'Vy N.T'],
  ['09:56', 'Chất lượng', 'Hội An Riverside', 'Tỷ lệ hủy gần ngày vượt ngưỡng', 'Cảnh báo', 'Lâm V.H'],
  ['09:30', 'Đối tác mới', 'The Salt House', 'Hoàn tất bước khai báo cơ sở', 'Bình thường', 'Hà P.'],
  ['09:12', 'Thanh toán', 'Mây Sapa Retreat', 'Xác nhận tài khoản nhận tiền mới', 'Chờ duyệt', 'Minh N.'],
  ['08:48', 'Chất lượng', 'Pù Luông Eco Lodge', 'Khách phản hồi chậm check-in', 'Cần xử lý', 'Lâm V.H'],
  ['08:25', 'Đối soát', 'The Lantern Hội An', 'Phiên thanh toán đã hoàn tất', 'Bình thường', 'Quân T.Đ'],
  ['08:04', 'Xác minh', 'Đồi Mây Đà Lạt', 'Đã tải lên hồ sơ pháp nhân', 'Chờ duyệt', 'Vy N.T'],
  ['07:42', 'Hệ thống', 'Ninh Bình Hidden Charm', 'Channel Manager đồng bộ trở lại', 'Bình thường', 'Hà P.'],
  ['07:15', 'Chất lượng', 'Làng Biển Boutique', 'Điểm vệ sinh phòng giảm nhẹ', 'Cảnh báo', 'Lâm V.H'],
] as const;

export const managerDashboardMetrics = [
  { label: 'Đối tác hoạt động', value: '248', hint: 'Tăng 12 cơ sở trong tháng', icon: Building2, tone: 'primary' },
  { label: 'GMV tháng này', value: '8,55 tỷ ₫', hint: 'Tăng 9,4% so với tháng trước', icon: ChartNoAxesCombined, tone: 'accent' },
  { label: 'Hồ sơ cần duyệt', value: '12', hint: '4 hồ sơ vượt SLA hôm nay', icon: BadgeCheck, tone: 'warning' },
  { label: 'Cảnh báo chất lượng', value: '03', hint: 'Cần xem trước 15:00', icon: ShieldAlert, tone: 'danger' },
] as const;

export const managerDashboardQueue = [
  ['Xác minh Tam Cốc Garden', 'Đã nhận đủ giấy phép và tài khoản nhận tiền', 'Mở hồ sơ'],
  ['Đối soát #TX-8921', 'VNPay timeout, giao dịch đang chờ xác nhận', 'Kiểm tra'],
  ['Phản hồi cảnh báo chất lượng', 'Hội An Riverside Villa có 5 lượt hủy gần ngày', 'Xử lý'],
] as const;
