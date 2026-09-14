<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Quy tắc dự án StayReco (Project Rules)

1. **Ưu tiên Common Component**: Luôn kiểm tra và ưu tiên tái sử dụng các common component sẵn có trong dự án. Nếu chưa có mà thấy cần thiết cho tái sử dụng lâu dài, tự động tạo common component chuẩn tại thư mục `common/`.
2. **Ưu tiên Shadcn UI**: Ưu tiên sử dụng các UI primitive từ `shadcn/ui` tại `components/ui/` (Button, Card, Badge, Input, Select, Dialog, Breadcrumb, v.v.).
3. **Không sửa đụng code người khác**: Giữ nguyên code, tính năng và phạm vi không thuộc nhiệm vụ được giao.
4. **Tuân thủ cấu trúc & Tailwind CSS**: Đọc cấu trúc dự án trước khi code, làm theo mẫu chuẩn của dự án và dùng Tailwind CSS.
5. **Bắt buộc Audit UI/UX sau khi code xong**: Sau khi hoàn thành code Frontend, luôn luôn tự Audit lại UI/UX (bố cục, độ tương phản, khoảng cách padding/margin, visual hierarchy, responsive di động, hiệu ứng tương tác hover/focus) để đảm bảo trải nghiệm người dùng tối ưu.
6. **Audit kích thước Button**: Luôn kiểm tra tỉ lệ và kích thước của các Button (tránh trường hợp button quá bé gây khó bấm hoặc quá to làm mất cân đối UI/UX). Kích thước chuẩn cho nút trong Navbar là `h-9` hoặc `h-10` với font `text-xs md:text-sm font-semibold`, cân đối khoảng cách padding phù hợp với tổng thể.
7. **Audit Input kèm Button nhúng (Absolute Action Input)**: Khi tạo Input có nút bấm đặt bên trong (`absolute right-*`), luôn set chiều cao cố định cho Input (`h-11` hoặc `h-12`), căn giữa chiều cao nút bấm bằng `top-1/2 -translate-y-1/2` với chiều cao nút chuẩn (`h-8` hoặc `h-9`), và cấp đủ padding bên phải `pr-*` cho Input để tránh tràn nút bấm ra ngoài viền hoặc che chữ.
8. **Bắt buộc gắn liên kết điều hướng (`<Link href="...">`)**: Khi tạo hoặc cập nhật bất kỳ trang hay component nào chứa nút bấm hành động (CTA, đặt phòng, đăng nhập, thanh toán, xem danh sách), luôn luôn phải bọc hoặc gắn thẻ `<Link>` chuẩn của Next.js để kết nối toàn bộ luồng trải nghiệm người dùng (UX flow) một cách mượt mà và liền mạch.
9. **Bắt buộc gắn hình ảnh minh họa chất lượng cao & Cấu hình Hostname**: Khi tạo hoặc cập nhật các trang giao diện (Auth banner, phòng, khách sạn, voucher), luôn kiểm tra và cung cấp đầy đủ hình ảnh minh họa thực tế/Unsplash chất lượng cao và đảm bảo hostname đã được cấu hình trong `next.config.ts` để tránh thiếu ảnh hoặc lỗi runtime.
10. **Bắt buộc đọc toàn bộ Context & Mẫu Code người dùng cung cấp**: Dù người dùng có dán (paste) đoạn mã dài, nhiều trang hoặc nhiều file HTML/JSX cùng lúc, luôn luôn phải phân tích và đọc 100% toàn bộ mẫu code được cung cấp từ trên xuống dưới, không bao giờ bỏ sót, làm thiếu hoặc bỏ quên bất kỳ chi tiết giao diện, hình ảnh, văn bản hay luồng xử lý nào.
11. **Bắt buộc Audit độ tương phản màu sắc & Chữ trên hình ảnh (Text Contrast & Readability Audit)**: Sau khi tạo hoặc cập nhật bất kỳ trang nào, bắt buộc tự audit độ tương phản của chữ (font-color) trên nền hình ảnh/banner/card. Không bao giờ để chữ màu trắng hoặc màu nhạt đè lên nền sáng/ảnh mờ làm khó đọc hoặc bị chìm; các tiêu đề chính phải nằm ở vùng nền tối có gradient sẫm (`from-black/70`) hoặc đặt ở khung container có màu chữ sẫm (`text-foreground` / `text-text-main`) rõ ràng 100%.
