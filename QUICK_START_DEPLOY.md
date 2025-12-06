# ⚡ QUICK START - DEPLOY KE VERCEL

## 🎯 3 LANGKAH MUDAH

### 1️⃣ UPLOAD KE GITHUB

**Cara Termudah (Browser):**
1. Buka https://github.com → Buat repository baru
2. Klik **"uploading an existing file"**
3. Drag & drop semua file (kecuali `node_modules`)
4. Klik **"Commit changes"**

**Atau gunakan script:**
```powershell
.\deploy-to-github.ps1
```

### 2️⃣ CONNECT KE VERCEL

1. Buka https://vercel.com
2. Login dengan **GitHub**
3. Klik **"Add New..."** → **"Project"**
4. Pilih repository **"arcy-buket"**
5. Klik **"Deploy"**

### 3️⃣ SELESAI! 🎉

Vercel akan otomatis:
- ✅ Build website
- ✅ Deploy ke production
- ✅ Berikan URL website

**Setiap kali Anda update di GitHub, Vercel akan otomatis deploy!**

---

## 📝 UPDATE WEBSITE

**Cara 1: Browser (Termudah)**
1. Buka repository di GitHub
2. Edit file → Commit changes
3. Vercel otomatis deploy!

**Cara 2: Script**
```powershell
.\update-and-deploy.ps1
```

---

## 📚 PANDUAN LENGKAP

Lihat file: **`DEPLOY_OTOMATIS_VERCEL.md`**

---

## ❓ TANYA?

- Cek log di Vercel Dashboard
- Pastikan semua file sudah di-upload ke GitHub
- Pastikan `package.json` ada

