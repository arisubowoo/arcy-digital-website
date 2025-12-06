# 🚀 CARA DEPLOY OTOMATIS KE VERCEL VIA GITHUB

## 📋 Ringkasan Proses

1. ✅ **File sudah siap** - Semua file project sudah di-commit ke Git
2. 📤 **Upload ke GitHub** - Push file ke repository GitHub
3. 🔗 **Connect ke Vercel** - Import project dari GitHub ke Vercel
4. 🎉 **Deploy Otomatis** - Vercel akan otomatis deploy website Anda

---

## 🎯 LANGKAH 1: BUAT REPOSITORY DI GITHUB

### A. Login ke GitHub
1. Buka **https://github.com**
2. Login dengan akun GitHub Anda
3. Jika belum punya akun, klik **"Sign up"** (gratis)

### B. Buat Repository Baru
1. Klik tombol **"+"** di pojok kanan atas
2. Pilih **"New repository"**
3. Isi form:
   - **Repository name:** `arcy-buket` (atau nama lain)
   - **Description:** `Website bisnis Arcy Buket - Toko buket bunga`
   - **Visibility:** Pilih **Public** (gratis) atau **Private**
   - ⚠️ **JANGAN centang:**
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
4. Klik **"Create repository"**

---

## 📤 LANGKAH 2: PUSH FILE KE GITHUB

### Opsi A: Menggunakan Script Otomatis (MUDAH)

1. **Edit file `push-to-github.ps1`**
   - Buka file tersebut
   - Ganti `YOUR_GITHUB_USERNAME` dengan username GitHub Anda
   - Simpan file

2. **Jalankan script:**
   ```powershell
   .\push-to-github.ps1
   ```

3. **Ikuti instruksi di layar**

### Opsi B: Manual (Jika script tidak jalan)

**Jalankan perintah berikut di terminal** (ganti `YOUR_GITHUB_USERNAME`):

```powershell
# Ganti YOUR_GITHUB_USERNAME dengan username GitHub Anda
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/arcy-buket.git
git branch -M main
git push -u origin main
```

**Contoh:**
Jika username GitHub Anda adalah `bhevi`, maka:
```powershell
git remote add origin https://github.com/bhevi/arcy-buket.git
git branch -M main
git push -u origin main
```

**Jika diminta login:**
- **Username:** Masukkan username GitHub Anda
- **Password:** Gunakan **Personal Access Token** (bukan password biasa)
  - Cara buat token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Centang scope: `repo`
  - Copy token dan gunakan sebagai password

---

## 🔗 LANGKAH 3: CONNECT KE VERCEL

### A. Login ke Vercel
1. Buka **https://vercel.com**
2. Klik **"Sign Up"** atau **"Log In"**
3. Pilih **"Continue with GitHub"** (paling mudah)
4. Authorize Vercel untuk mengakses GitHub Anda

### B. Import Project
1. Setelah login, klik **"Add New..."** → **"Project"**
2. Anda akan melihat daftar repository GitHub
3. **Pilih repository** `arcy-buket` (atau nama repository Anda)
4. Klik **"Import"**

### C. Konfigurasi Deploy
Vercel akan otomatis mendeteksi:
- ✅ **Framework Preset:** Vite
- ✅ **Root Directory:** `./`
- ✅ **Build Command:** `npm run build`
- ✅ **Output Directory:** `dist`

**TIDAK PERLU UBAH APA-APA!** Langsung klik **"Deploy"**

---

## ⏳ LANGKAH 4: TUNGGU DEPLOY

1. Vercel akan mulai build project Anda
2. Proses biasanya memakan waktu **2-3 menit**
3. Anda bisa melihat progress di layar
4. Setelah selesai, Anda akan mendapat **URL website**:
   - Contoh: `arcy-buket.vercel.app`
   - Atau: `arcy-buket-YOUR_USERNAME.vercel.app`

**🎉 SELESAI! Website Anda sudah live!**

---

## 🔄 DEPLOY OTOMATIS DI MASA DEPAN

**Setelah setup pertama kali selesai:**

Setiap kali Anda mengubah kode dan push ke GitHub, Vercel akan **otomatis deploy ulang**!

**Cara update website:**
```powershell
# 1. Edit file yang ingin diubah
# 2. Commit perubahan
git add .
git commit -m "Update: deskripsi perubahan"
git push

# 3. Vercel otomatis deploy dalam 1-2 menit!
```

**Tidak perlu login ke Vercel lagi!** Semuanya otomatis! 🚀

---

## ✅ CHECKLIST

Sebelum deploy, pastikan:
- [x] ✅ Semua file sudah di-commit (sudah dilakukan)
- [x] ✅ Repository GitHub sudah dibuat
- [ ] ⏳ File sudah di-push ke GitHub
- [ ] ⏳ Project sudah di-import ke Vercel
- [ ] ⏳ Deploy berhasil dan website live

---

## 🆘 TROUBLESHOOTING

### Error: "Repository not found"
- Pastikan repository sudah dibuat di GitHub
- Pastikan username benar
- Pastikan repository visibility adalah Public (atau Anda sudah authorize Vercel untuk akses Private repo)

### Error: "Build failed"
- Cek log error di dashboard Vercel
- Pastikan semua file penting sudah di-commit:
  - `package.json`
  - `vite.config.js`
  - `tailwind.config.js`
  - `vercel.json`
  - Semua file di `src/` dan `public/`

### Error saat push: "Authentication failed"
- Gunakan Personal Access Token, bukan password GitHub
- Pastikan token memiliki scope `repo`

### Website tidak muncul gambar
- Pastikan semua gambar ada di folder `public/images/`
- Pastikan path gambar di `buket.json` benar

---

## 📞 BANTUAN LEBIH LANJUT

Jika masih ada masalah:
1. Cek file `DEPLOYMENT_GUIDE.md` untuk panduan lengkap
2. Cek file `PUSH_TO_GITHUB.md` untuk detail push ke GitHub
3. Cek log error di dashboard Vercel

---

**Selamat! Website Arcy Buket siap go live! 🎉🌸**

