# 🚀 Panduan Deploy Otomatis ke Vercel via GitHub

## Langkah 1: Upload ke GitHub

### A. Jika belum punya repository GitHub:

1. **Buka GitHub** (https://github.com) dan login
2. **Klik tombol "+"** di pojok kanan atas → **"New repository"**
3. **Isi informasi:**
   - Repository name: `arcy-buket` (atau nama lain yang Anda inginkan)
   - Description: `Website bisnis Arcy Buket - Toko buket bunga`
   - Visibility: **Public** (gratis) atau **Private** (jika ingin private)
   - **JANGAN centang** "Add a README file", "Add .gitignore", atau "Choose a license"
   - Klik **"Create repository"**

### B. Upload file ke GitHub:

Jalankan perintah berikut di terminal (sudah disiapkan di bawah):

```bash
# 1. Tambahkan semua file ke staging
git add .

# 2. Commit dengan pesan
git commit -m "Initial commit: Arcy Buket website ready for deployment"

# 3. Tambahkan remote GitHub (ganti YOUR_USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/YOUR_USERNAME/arcy-buket.git

# 4. Push ke GitHub
git branch -M main
git push -u origin main
```

**Catatan:** Ganti `YOUR_USERNAME` dengan username GitHub Anda, dan `arcy-buket` dengan nama repository yang Anda buat.

---

## Langkah 2: Connect ke Vercel

### A. Login ke Vercel:

1. **Buka Vercel** (https://vercel.com)
2. **Klik "Sign Up"** atau **"Log In"**
3. **Pilih "Continue with GitHub"** (paling mudah)
4. **Authorize Vercel** untuk mengakses GitHub Anda

### B. Import Project dari GitHub:

1. **Klik "Add New..."** → **"Project"**
2. **Pilih repository** `arcy-buket` (atau nama repository Anda)
3. **Klik "Import"**

### C. Konfigurasi Deploy:

Vercel akan otomatis mendeteksi:
- **Framework Preset:** Vite
- **Root Directory:** `./` (biarkan default)
- **Build Command:** `npm run build` (otomatis terdeteksi)
- **Output Directory:** `dist` (otomatis terdeteksi)

**Tidak perlu ubah apa-apa**, langsung klik **"Deploy"**

---

## Langkah 3: Deploy Otomatis

Setelah klik "Deploy":
- Vercel akan **otomatis build** project Anda
- Proses biasanya memakan waktu **2-3 menit**
- Setelah selesai, Anda akan mendapat **URL website** (contoh: `arcy-buket.vercel.app`)

---

## ✅ Deploy Otomatis di Masa Depan

**Setelah setup pertama kali selesai:**

Setiap kali Anda:
1. **Mengubah kode** di komputer
2. **Commit dan push** ke GitHub:
   ```bash
   git add .
   git commit -m "Update: deskripsi perubahan"
   git push
   ```
3. **Vercel akan otomatis deploy** ulang website Anda dalam 1-2 menit!

**Tidak perlu login ke Vercel lagi** - semuanya otomatis! 🎉

---

## 🔧 Troubleshooting

### Jika build gagal di Vercel:

1. **Cek log error** di dashboard Vercel
2. **Pastikan semua file penting sudah di-commit:**
   - `package.json`
   - `vite.config.js`
   - `tailwind.config.js`
   - `vercel.json`
   - Semua file di folder `src/` dan `public/`

### Jika ada masalah dengan path:

- Pastikan `index.html` menggunakan path relatif: `./src/main.jsx`
- Pastikan `vite.config.js` sudah dikonfigurasi dengan benar

### Jika perlu update Node.js version:

- File `.nvmrc` sudah disiapkan dengan versi Node.js yang kompatibel

---

## 📝 Checklist Sebelum Deploy

- [x] Semua file sudah di-commit ke Git
- [x] `package.json` sudah benar
- [x] `vite.config.js` sudah dikonfigurasi
- [x] `vercel.json` sudah ada
- [x] `.gitignore` sudah benar
- [x] Build lokal berhasil (`npm run build`)
- [x] Semua gambar ada di `public/images/`

---

## 🎯 Quick Commands

```bash
# Build lokal untuk test
npm run build

# Test build hasilnya
npm run preview

# Commit dan push ke GitHub
git add .
git commit -m "Update: deskripsi"
git push
```

---

**Selamat! Website Anda akan live di Vercel dalam beberapa menit! 🚀**

