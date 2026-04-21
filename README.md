# FOREVER Coffee & Beer - Website quảng cáo

Website landing page React + Vite dành cho FOREVER Coffee & Beer.

## Chạy local

```bash
npm install
npm run dev
```

## Build production

```bash
npm install
npm run build
```

Thư mục build sẽ nằm trong `dist/`.

## Deploy lên Vercel

### Cách 1: Import GitHub vào Vercel
- Upload toàn bộ project này lên GitHub
- Vào Vercel > Add New Project
- Chọn repo này
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Deploy

### Cách 2: Kéo thả
- Chạy `npm install`
- Chạy `npm run build`
- Upload thư mục `dist` lên Vercel

## Gắn domain riêng
- Vào project trên Vercel
- Chọn `Settings`
- Chọn `Domains`
- Add domain anh đã mua
- Làm theo DNS records mà Vercel hiển thị
