# Hướng dẫn chỉnh sửa website

Bạn có thể sửa toàn bộ website ngay trên **github.com**, không cần cài đặt gì.
Mỗi lần bạn lưu (commit), GitHub tự build lại và cập nhật website sau khoảng **1–2 phút**.
Xem tiến trình ở tab **Actions** của repository (dấu ✓ xanh là đã xong).

---

## 1. Sửa chữ (nội dung)

Toàn bộ nội dung nằm trong **một file duy nhất**: `src/data/site.js`

1. Mở repository trên github.com → vào `src` → `data` → `site.js`
2. Bấm biểu tượng **bút chì ✏️** (Edit this file) ở góc phải
3. Sửa phần chữ **nằm giữa dấu nháy** `'...'`
4. Bấm **Commit changes…** → **Commit changes**

> ⚠️ Chỉ sửa chữ bên trong dấu nháy. Giữ nguyên dấu nháy `'`, dấu phẩy `,`
> và ngoặc `{ } [ ]`. Nếu trong câu có dấu nháy đơn (vd. `I'm`), hãy dùng
> dấu nháy cong `’` như `I’m`.

### Những phần hay sửa

| Muốn sửa | Tìm trong `site.js` |
|---|---|
| Email, LinkedIn | `profile` |
| Học vấn | `education` |
| Công việc Philips | `philips` |
| Kinh nghiệm cũ | `earlierExperience` |
| Chứng chỉ, kỹ năng | `certifications`, `skills` |
| Con số nổi bật (5,000+, 1,200+) | `achievements` |
| Dự án | `projects` |

### Điền nội dung còn trống (Placeholder)

Các ô viền đứt màu đỏ rượu ghi **PLACEHOLDER** trên web tương ứng với dòng
`placeholder: '...'` trong `projects`. Đổi dòng đó thành `body: '...'`
và viết nội dung thật:

```js
// Trước
{ heading: 'Key learnings', placeholder: 'What did this internship teach you…' },
// Sau
{ heading: 'Key learnings', body: 'Viết điều bạn học được ở đây.' },
```

Muốn liệt kê nhiều ý, dùng `list`:

```js
{ heading: 'Outcomes', list: ['Ý thứ nhất', 'Ý thứ hai'] },
```

Năm/vai trò đang trống (`year: null`) → đổi thành `year: '2021'`.
Khi một dự án mẫu đã có nội dung thật, xoá dòng `placeholder: true,` để bỏ nhãn "Placeholder".

---

## 2. Thêm ảnh (4 vị trí)

1. Vào thư mục `public/images` → **Add file** → **Upload files** → kéo ảnh vào → **Commit**
   (đặt tên không dấu, không khoảng trắng, vd. `portrait.jpg`)
2. Mở `src/data/site.js`, tìm `images`, sửa `src: null` thành đường dẫn ảnh:

```js
portrait: {
  src: '/images/portrait.jpg',
```

| Vị trí | Hiển thị ở | Tỉ lệ gợi ý |
|---|---|---|
| `portrait` | Trang chủ (đầu trang) | Dọc 4:5 |
| `about` | Trang About | Dọc 4:5 |
| `philips` | Trang chủ + Experience | Ngang 16:10 |
| `creative` | Trang chủ ("Beyond the classroom") | Dọc 4:5 |

Nhớ sửa `alt` (mô tả ảnh) cho đúng nội dung ảnh — tốt cho người khiếm thị và SEO.

---

## 3. Thay file CV

Upload file PDF mới vào thư mục `public/` với **đúng tên** `VanAnhTran_CV_2026.pdf`
(GitHub sẽ hỏi ghi đè → đồng ý). Nếu đổi tên file, sửa dòng `cv:` trong `profile`.

---

## 4. Lỡ sửa hỏng?

- Tab **Actions** hiện dấu ✗ đỏ → website **vẫn giữ bản cũ**, không bị sập.
  Bấm vào lần chạy lỗi để xem dòng báo lỗi (thường do thiếu dấu nháy hoặc dấu phẩy).
- Quay lại bản trước: mở file → **History** → chọn bản cũ → copy nội dung → dán lại.

## 5. Đổi tên website

"Tên website" có 2 nghĩa — chọn cái bạn cần:

### A. Đổi địa chỉ (link) website

Hiện tại: `https://chatgptlamtran-ctrl.github.io/my-portfolio/`

**Cách 1 — Đổi phần cuối link (miễn phí)**
1. Vào repository → **Settings** (bánh răng) → mục **General**
2. Ô **Repository name**: đổi `my-portfolio` thành tên mới, vd. `vananhtran`
3. Bấm **Rename**
4. Vào tab **Actions** → **Deploy to GitHub Pages** → **Run workflow** để build lại
5. Link mới: `https://chatgptlamtran-ctrl.github.io/vananhtran/`

**Cách 2 — Link ngắn nhất (miễn phí)**
Đổi tên repository thành đúng `chatgptlamtran-ctrl.github.io` (làm như Cách 1)
→ link thành `https://chatgptlamtran-ctrl.github.io/`

**Cách 3 — Tên miền riêng, vd. `vananhtran.com` (khoảng 10–15 €/năm)**
1. Mua tên miền ở Namecheap, Cloudflare, Porkbun…
2. Repository → **Settings** → **Pages** → **Custom domain**: nhập `vananhtran.com` → **Save**
3. Tạo file `public/CNAME` (Add file → Create new file) chỉ chứa một dòng: `vananhtran.com`
4. Ở trang quản lý tên miền, thêm bản ghi DNS theo hướng dẫn GitHub:
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
5. Đợi vài phút đến vài giờ, rồi tích **Enforce HTTPS** trong Settings → Pages

> Phần đầu link (`chatgptlamtran-ctrl`) là tên tài khoản GitHub. Muốn đổi phần này:
> github.com → ảnh đại diện → **Settings** → **Account** → **Change username**.
> Lưu ý: link cũ sẽ ngừng hoạt động.

### B. Đổi tên hiển thị trên website

| Muốn đổi | File | Tìm dòng |
|---|---|---|
| Tên trên tab trình duyệt / Google | `index.html` | `<title>…</title>` và các dòng `content="…"` |
| Phần đuôi tiêu đề mỗi trang | `src/components/useSeo.js` | `const SUFFIX = 'Van Anh Tran'` |
| Tên ở góc trái menu | `src/components/Header.jsx` | `Van Anh Tran</span>` |
| Tên ở chân trang & trang About | `src/data/site.js` | `fullName`, `name` |

---

## 6. Chạy trên máy tính (tuỳ chọn)

Cần cài [Node.js](https://nodejs.org) (bản 22). Sau đó:

```bash
npm install
npm run dev
```

Mở http://localhost:5173
