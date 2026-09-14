import type { LucideIcon } from 'lucide-react';
import {
  BedDouble,
  Building2,
  CalendarDays,
  CheckCircle2,
  Settings2,
  Sparkles,
  TrendingUp,
  UsersRound,
} from 'lucide-react';

export type PartnerMode =
  | 'dashboard' | 'bookings' | 'revenue' | 'hotel' | 'rooms' | 'availability' | 'pricing'
  | 'promotions' | 'loyalty' | 'ai-brand' | 'staff' | 'verification';

export type PartnerWorkspaceMode = Exclude<PartnerMode, 'dashboard' | 'bookings' | 'revenue'>;

export type PartnerWorkspace = {
  title: string;
  description: string;
  action: string;
  icon: LucideIcon;
  summary: string;
  rows: readonly (readonly [name: string, detail: string, state: string])[];
};

const workspace = (
  title: string, description: string, action: string, icon: LucideIcon,
  summary: string, rows: PartnerWorkspace['rows'],
): PartnerWorkspace => ({ title, description, action, icon, summary, rows });

export const partnerWorkspaces: Record<PartnerWorkspaceMode, PartnerWorkspace> = {
  hotel: workspace('Khách sạn & cơ sở', 'Hoàn thiện hồ sơ hiển thị để khách dễ tìm và tin tưởng cơ sở của bạn.', 'Lưu thay đổi', Building2, 'Hồ sơ cơ sở đã hoàn thiện 92%', [['Thông tin cơ bản', 'An Nhiên Riverside · Hội An', 'Đã cập nhật'], ['Tiện nghi', '21 tiện nghi đang hiển thị', 'Kiểm tra'], ['Hình ảnh', '32 ảnh đã được duyệt', 'Quản lý']]),
  rooms: workspace('Kho phòng', 'Quản lý loại phòng, số lượng và thông tin hiển thị khi khách đặt phòng.', 'Thêm loại phòng', BedDouble, '36 phòng đang mở bán', [['Deluxe Riverside', '12 phòng · 2 khách', 'Còn bán'], ['Garden Suite', '8 phòng · 3 khách', 'Còn bán'], ['Family Villa', '4 phòng · 5 khách', 'Tạm dừng']]),
  availability: workspace('Lịch tồn & khả dụng', 'Cập nhật số phòng trống và hạn chế bán theo ngày để tránh overbooking.', 'Cập nhật tồn', CalendarDays, 'Đồng bộ PMS lần cuối 2 phút trước', [['Hôm nay, 20 Th10', '28 / 36 phòng đang bán', 'Còn 8 phòng'], ['Cuối tuần này', '24 / 36 phòng đang bán', 'Còn 12 phòng'], ['Lễ 2/9', '16 / 36 phòng đang bán', 'Cần chú ý']]),
  pricing: workspace('Luật giá & mùa vụ', 'Thiết lập giá linh hoạt theo mùa, ngày trong tuần và điều kiện đặt phòng.', 'Tạo luật giá', Settings2, '4 luật giá đang áp dụng', [['Giá ngày thường', 'Thứ Hai – Thứ Năm', 'Đang áp dụng'], ['Cuối tuần', 'Thứ Sáu – Chủ Nhật', 'Đang áp dụng'], ['Mùa cao điểm', '20 Th12 – 05 Th01', 'Đã lên lịch']]),
  promotions: workspace('Chiến dịch & giảm giá', 'Tạo ưu đãi rõ ràng, có kiểm soát để tăng chuyển đổi mà vẫn giữ biên lợi nhuận.', 'Tạo chiến dịch', TrendingUp, '2 ưu đãi đang hiển thị', [['Đặt sớm mùa hè', 'Giảm 12% · đến 30 Th11', 'Đang chạy'], ['Ở dài ngày', 'Giảm 10% từ 3 đêm', 'Đang chạy'], ['Ưu đãi khai trương', 'Giảm 15%', 'Đã kết thúc']]),
  loyalty: workspace('Khách hàng thân thiết', 'Theo dõi khách quay lại và quyền lợi dành riêng cho những lượt lưu trú giá trị.', 'Thiết lập quyền lợi', UsersRound, '184 khách thân thiết trong 90 ngày', [['Hạng Riverside', '38 khách · ưu đãi 8%', 'Đang hoạt động'], ['Hạng Garden', '96 khách · ưu đãi 5%', 'Đang hoạt động'], ['Khách quay lại', '50 khách cần mời tham gia', 'Gửi lời mời']]),
  'ai-brand': workspace('Giọng thương hiệu AI', 'Cung cấp ngữ cảnh để AI viết mô tả và trả lời khách đúng với bản sắc An Nhiên Riverside.', 'Lưu giọng thương hiệu', Sparkles, 'AI đang dùng hồ sơ giọng thương hiệu v2', [['Tính cách thương hiệu', 'Ấm áp, tinh tế, địa phương', 'Đã lưu'], ['Ngôn ngữ ưu tiên', 'Tiếng Việt · English', 'Đã lưu'], ['Mô phỏng phản hồi', '12 phản hồi trong tháng', 'Thử lại']]),
  staff: workspace('Nhân viên & phân quyền', 'Cấp đúng quyền cho từng vai trò, giữ mọi thao tác vận hành có thể kiểm tra.', 'Mời nhân viên', UsersRound, '6 thành viên đang hoạt động', [['Nguyễn Minh Anh', 'Chủ cơ sở · toàn quyền', 'Đang hoạt động'], ['Lê Hoài Nam', 'Quản lý vận hành', 'Đang hoạt động'], ['Trần Hà My', 'Lễ tân · lịch tồn', 'Đang hoạt động']]),
  verification: workspace('Hồ sơ & xác minh', 'Duy trì hồ sơ pháp lý minh bạch để cơ sở luôn đủ điều kiện nhận đặt phòng.', 'Cập nhật hồ sơ', CheckCircle2, 'Xác minh cơ sở hợp lệ đến 18 Th08 2027', [['Thông tin pháp nhân', 'Đã đối chiếu', 'Hợp lệ'], ['Tài khoản nhận tiền', 'Vietcombank ·••• 2689', 'Đã xác minh'], ['Giấy phép kinh doanh', 'Tải lên 18 Th08 2026', 'Hợp lệ']]),
};

export const partnerDashboardMetrics = [
  { label: 'Đặt phòng tháng này', value: '128', hint: 'Tăng 14% so với tháng trước', icon: CalendarDays, tone: 'primary' },
  { label: 'Doanh thu dự kiến', value: '284,6 tr ₫', hint: '87% đã được xác nhận', icon: TrendingUp, tone: 'accent' },
  { label: 'Công suất phòng', value: '78%', hint: '28 / 36 phòng đang bán', icon: BedDouble, tone: 'success' },
  { label: 'Khách quay lại', value: '24', hint: 'Trong 30 ngày gần nhất', icon: UsersRound, tone: 'primary' },
] as const;

export const partnerDashboardTasks = [
  ['Cập nhật tồn phòng cuối tuần', '12 phòng còn mở bán cho Thứ Bảy', 'Cập nhật'],
  ['Phản hồi 3 đánh giá mới', 'Khách đang chờ phản hồi của cơ sở', 'Xem đánh giá'],
  ['Xem lại giá mùa lễ', 'Luật giá cao điểm bắt đầu sau 8 ngày', 'Kiểm tra'],
] as const;

export const partnerBookings = [
  ['SR-261020-0842', 'Nguyễn Minh Anh', 'Deluxe River View', '20–22/10/2026', '2 đêm', 'Đã xác nhận', '2.500.000 ₫'],
  ['BK-90412', 'David Miller', 'Riverside Suite', '24–25/10/2026', '1 đêm', 'Sắp check-in', '1.850.000 ₫'],
  ['SR-261021-0915', 'Trần Ngọc Mai', 'Superior Garden', '26–29/10/2026', '3 đêm', 'Chờ xác nhận', '2.940.000 ₫'],
  ['AG-18421', 'Yuki Tanaka', 'Studio Gác Lửng', '27–29/10/2026', '2 đêm', 'Đang lưu trú', '1.700.000 ₫'],
  ['SR-261022-1048', 'Lê Hoàng Phúc', 'Deluxe River View', '28–30/10/2026', '2 đêm', 'Đã xác nhận', '2.500.000 ₫'],
  ['BK-90517', 'Emma Wilson', 'Riverside Suite', '29–31/10/2026', '2 đêm', 'Sắp check-in', '3.700.000 ₫'],
  ['SR-261023-1124', 'Phạm Thu Hà', 'Superior Garden', '30/10–01/11/2026', '2 đêm', 'Chờ xác nhận', '1.960.000 ₫'],
  ['AG-18506', 'Park Ji-hoon', 'Deluxe River View', '31/10–02/11/2026', '2 đêm', 'Đã xác nhận', '2.700.000 ₫'],
  ['SR-261024-1202', 'Võ Thanh Tùng', 'Studio Gác Lửng', '01–03/11/2026', '2 đêm', 'Đã xác nhận', '1.700.000 ₫'],
  ['BK-90641', 'Sophie Martin', 'Riverside Suite', '02–05/11/2026', '3 đêm', 'Chờ xác nhận', '5.550.000 ₫'],
  ['SR-261025-1319', 'Đặng Khánh Linh', 'Superior Garden', '03–05/11/2026', '2 đêm', 'Sắp check-in', '1.960.000 ₫'],
  ['AG-18622', 'Lucas Meyer', 'Deluxe River View', '04–07/11/2026', '3 đêm', 'Đã xác nhận', '4.050.000 ₫'],
] as const;

export const partnerSettlements = [
  ['DS-1126-02', '08–14/11/2026', '92.840.000 ₫', '−11.140.800 ₫', '81.699.200 ₫', 'Đang đối soát'],
  ['DS-1126-01', '01–07/11/2026', '79.600.000 ₫', '−9.552.000 ₫', '70.048.000 ₫', 'Đã chuyển'],
  ['DS-1026-04', '22–31/10/2026', '96.250.000 ₫', '−11.550.000 ₫', '84.700.000 ₫', 'Đã chuyển'],
  ['DS-1026-03', '15–21/10/2026', '86.200.000 ₫', '−10.344.000 ₫', '75.856.000 ₫', 'Đã chuyển'],
  ['DS-1026-02', '08–14/10/2026', '72.450.000 ₫', '−8.694.000 ₫', '63.756.000 ₫', 'Đã chuyển'],
  ['DS-1026-01', '01–07/10/2026', '68.100.000 ₫', '−8.172.000 ₫', '59.928.000 ₫', 'Đã chuyển'],
  ['DS-0926-04', '22–30/09/2026', '74.920.000 ₫', '−8.990.400 ₫', '65.929.600 ₫', 'Đã chuyển'],
  ['DS-0926-03', '15–21/09/2026', '65.780.000 ₫', '−7.893.600 ₫', '57.886.400 ₫', 'Đã chuyển'],
  ['DS-0926-02', '08–14/09/2026', '61.350.000 ₫', '−7.362.000 ₫', '53.988.000 ₫', 'Đã chuyển'],
  ['DS-0926-01', '01–07/09/2026', '58.900.000 ₫', '−7.068.000 ₫', '51.832.000 ₫', 'Đã chuyển'],
] as const;

export const partnerDashboardChannels = [
  ['StayReco Trực tiếp', '142 đơn', '177.500.000 ₫', '−12.000.000 ₫', '−9.900.000 ₫', '155.600.000 ₫'],
  ['StayReco AI Assistant', '68 đơn', '85.000.000 ₫', '−6.500.000 ₫', '−4.700.000 ₫', '73.800.000 ₫'],
  ['Khách thân thiết QR', '18 đơn', '22.500.000 ₫', '0 ₫', '−1.350.000 ₫', '21.150.000 ₫'],
  ['Booking.com', '54 đơn', '71.200.000 ₫', '−2.400.000 ₫', '−8.544.000 ₫', '60.256.000 ₫'],
  ['Agoda', '37 đơn', '48.650.000 ₫', '−1.800.000 ₫', '−5.838.000 ₫', '41.012.000 ₫'],
  ['Đặt phòng tại quầy', '21 đơn', '27.300.000 ₫', '0 ₫', '−1.638.000 ₫', '25.662.000 ₫'],
] as const;
