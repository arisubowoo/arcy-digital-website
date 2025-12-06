# 📤 Langkah Push ke GitHub

## ⚠️ PENTING: Ganti Informasi di Bawah

Sebelum menjalankan perintah, **ganti informasi berikut:**
- `YOUR_GITHUB_USERNAME` → Username GitHub Anda
- `arcy-buket` → Nama repository GitHub Anda (jika berbeda)

---

## 🚀 Langkah 1: Buat Repository di GitHub

1. Buka https://github.com dan login
2. Klik tombol **"+"** di pojok kanan atas → **"New repository"**
3. Isi:
   - **Repository name:** `arcy-buket`
   - **Description:** `Website bisnis Arcy Buket`
   - **Visibility:** Public atau Private
   - **JANGAN centang** apapun (README, .gitignore, license)
4. Klik **"Create repository"**

---

## 📤 Langkah 2: Push ke GitHub

**Jalankan perintah berikut di terminal** (ganti `YOUR_GITHUB_USERNAME`):

```powershell
# Ganti YOUR_GITHUB_USERNAME dengan username GitHub Anda
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/arcy-buket.git
git branch -M main
git push -u origin main
```

**Contoh jika username Anda adalah `bhevi`:**
```powershell
git remote add origin https://github.com/bhevi/arcy-buket.git
git branch -M main
git push -u origin main
```

**Jika diminta login:**
- GitHub akan meminta username dan password
- Untuk password, gunakan **Personal Access Token** (bukan password GitHub)
- Cara buat token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

---

## ✅ Setelah Push Berhasil

Lanjut ke langkah berikutnya: **Connect ke Vercel** (lihat `DEPLOYMENT_GUIDE.md`)

