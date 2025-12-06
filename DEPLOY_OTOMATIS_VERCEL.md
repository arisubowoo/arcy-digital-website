# 🚀 DEPLOY OTOMATIS KE VERCEL VIA GITHUB

Panduan lengkap untuk setup deploy otomatis dari GitHub ke Vercel.

## 📋 LANGKAH 1: UPLOAD KE GITHUB

### A. Buat Repository di GitHub

1. Buka https://github.com
2. Klik tombol **"+"** di kanan atas → **"New repository"**
3. Isi:
   - **Repository name**: `arcy-buket` (atau nama lain)
   - **Description**: "Website Arcy Buket - Buket Bunga Terindah"
   - **Visibility**: Pilih **Public** atau **Private**
   - JANGAN centang "Add a README file"
   - Klik **"Create repository"**

### B. Upload File ke GitHub

**OPSI 1: Menggunakan Script Otomatis (RECOMMENDED)**

Jalankan script PowerShell yang sudah disediakan:
```powershell
.\deploy-to-github.ps1
```

**OPSI 2: Manual Upload via Browser**

1. Setelah membuat repository, GitHub akan menampilkan halaman dengan instruksi
2. Scroll ke bagian **"uploading an existing file"**
3. Klik **"uploading an existing file"**
4. Drag & drop semua file dari folder project (kecuali `node_modules`, `.git`, `.vercel`)
5. Klik **"Commit changes"**

**OPSI 3: Menggunakan Git Command Line**

Jalankan perintah berikut di PowerShell:
```powershell
git init
git add .
git commit -m "Initial commit - Arcy Buket website"
git branch -M main
git remote add origin https://github.com/USERNAME/arcy-buket.git
git push -u origin main
```
*(Ganti USERNAME dengan username GitHub Anda)*

---

## 📋 LANGKAH 2: CONNECT GITHUB KE VERCEL

### A. Login ke Vercel

1. Buka https://vercel.com
2. Klik **"Sign Up"** atau **"Log In"**
3. Pilih **"Continue with GitHub"**
4. Authorize Vercel untuk mengakses GitHub Anda

### B. Import Project dari GitHub

1. Setelah login, klik **"Add New..."** → **"Project"**
2. Pilih **"Import Git Repository"**
3. Pilih repository **"arcy-buket"** (atau nama repository Anda)
4. Klik **"Import"**

### C. Configure Project

Vercel akan otomatis detect:
- **Framework Preset**: Vite (akan terdeteksi otomatis)
- **Root Directory**: `./` (biarkan default)
- **Build Command**: `npm run build` (otomatis)
- **Output Directory**: `dist` (otomatis)

**Yang perlu dicek:**
- ✅ Framework: **Vite**
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

5. Klik **"Deploy"**

### D. Tunggu Deployment

- Vercel akan otomatis:
  - Install dependencies
  - Build project
  - Deploy ke production
- Proses ini memakan waktu **2-5 menit**
- Setelah selesai, Anda akan mendapat URL seperti: `https://arcy-buket.vercel.app`

---

## 📋 LANGKAH 3: SETUP AUTO DEPLOY

Setelah pertama kali deploy, **SETUP SUDAH OTOMATIS!** 🎉

Setiap kali Anda:
1. **Push perubahan ke GitHub** (via browser upload atau git push)
2. Vercel akan **otomatis detect perubahan**
3. Vercel akan **otomatis rebuild dan redeploy**
4. Website akan **otomatis update** dalam 2-5 menit

---

## 🔄 CARA UPDATE WEBSITE (SETELAH SETUP)

### Metode 1: Upload via GitHub Browser

1. Buka repository di GitHub
2. Klik file yang ingin diubah
3. Klik ikon **pensil** (Edit)
4. Edit file
5. Scroll ke bawah, klik **"Commit changes"**
6. Vercel akan otomatis deploy dalam 2-5 menit

### Metode 2: Menggunakan Git

```powershell
git add .
git commit -m "Update website"
git push
```

### Metode 3: Menggunakan Script

```powershell
.\update-and-deploy.ps1
```

---

## ✅ CHECKLIST SETUP

- [ ] Repository GitHub sudah dibuat
- [ ] File sudah di-upload ke GitHub
- [ ] Vercel account sudah dibuat
- [ ] Project sudah di-import dari GitHub
- [ ] Deployment pertama sudah berhasil
- [ ] URL website sudah bisa diakses

---

## 🐛 TROUBLESHOOTING

### Error: Build Failed

**Solusi:**
1. Cek apakah `package.json` ada
2. Pastikan `vite.config.js` ada
3. Pastikan semua dependencies terinstall
4. Cek log error di Vercel dashboard

### Error: Module Not Found

**Solusi:**
1. Pastikan semua file di folder `src/` sudah di-upload
2. Pastikan `public/images/` sudah di-upload
3. Cek apakah path file benar

### Website Tidak Update

**Solusi:**
1. Cek apakah commit sudah di-push ke GitHub
2. Cek Vercel dashboard → Deployments
3. Tunggu 2-5 menit untuk auto-deploy

### Build Timeout

**Solusi:**
1. Pastikan `node_modules` tidak di-upload (ada di `.gitignore`)
2. Pastikan `dist/` tidak di-upload (ada di `.gitignore`)
3. Hapus file besar yang tidak perlu

---

## 📞 BANTUAN

Jika ada masalah:
1. Cek log di Vercel Dashboard → Deployments → klik deployment terbaru
2. Cek GitHub repository apakah semua file sudah ter-upload
3. Pastikan semua file penting tidak di-ignore oleh `.gitignore`

---

## 🎉 SELESAI!

Setelah setup selesai, setiap perubahan yang di-push ke GitHub akan **otomatis deploy ke Vercel**!

**URL Website Anda:** `https://arcy-buket.vercel.app` (atau sesuai nama repository)

