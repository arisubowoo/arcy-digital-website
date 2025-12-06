# Arcy Buket - Website Bisnis Buket Bunga

Website bisnis untuk Arcy Buket, menyediakan buket bunga terindah dengan kualitas terbaik untuk setiap momen spesial.

## 🚀 Fitur

- **Home Page** - Halaman utama dengan hero section dan informasi layanan
- **Katalog** - Daftar lengkap buket yang tersedia
- **Detail Buket** - Halaman detail untuk setiap buket
- **Lokasi** - Informasi lokasi dan peta Google Maps
- **WhatsApp Integration** - Tombol pesan langsung via WhatsApp
- **Instagram Integration** - Link ke Instagram
- **Responsive Design** - Tampilan yang optimal di semua perangkat
- **Animasi Modern** - Animasi halus dan menarik
- **Custom Request** - Fitur untuk request buket sesuai keinginan

## 🛠️ Teknologi

- **React 18** - Framework JavaScript
- **Vite** - Build tool dan dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Routing untuk SPA
- **Google Maps** - Integrasi peta

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd arcy-buket-TA
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Build untuk production:
```bash
npm run build
```

5. Preview build production:
```bash
npm run preview
```

## 🚀 Deployment ke Vercel

### Metode 1: Via Vercel Dashboard (Recommended)

1. **Push code ke GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Login ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub/GitLab/Bitbucket

3. **Import Project**
   - Klik "New Project"
   - Pilih repository Anda
   - Vercel akan otomatis mendeteksi:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

4. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build selesai
   - Website akan live di URL yang diberikan

### Metode 2: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Untuk production:
```bash
vercel --prod
```

### Konfigurasi Vercel

File `vercel.json` sudah dikonfigurasi dengan:
- **Rewrites**: Semua route diarahkan ke `index.html` untuk SPA routing
- Vercel otomatis mendeteksi Vite sebagai framework
- Build command dan output directory sudah otomatis terdeteksi

### Catatan Penting untuk Deployment

✅ **Sudah dikonfigurasi:**
- ✅ SPA routing (React Router)
- ✅ Build optimization
- ✅ Asset paths
- ✅ Meta tags untuk SEO
- ✅ Mobile responsive
- ✅ Error handling

✅ **Tidak perlu konfigurasi tambahan:**
- Vercel otomatis mendeteksi Vite
- Environment variables tidak diperlukan
- Semua dependencies sudah terdaftar di `package.json`

## 📁 Struktur Project

```
arcy-buket-TA/
├── public/
│   └── images/          # Gambar buket
├── src/
│   ├── components/      # Komponen React
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Halaman
│   │   ├── Home.jsx
│   │   ├── Katalog.jsx
│   │   ├── DetailBuket.jsx
│   │   └── Lokasi.jsx
│   ├── data/           # Data JSON
│   │   └── buket.json
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json         # Konfigurasi Vercel
└── README.md
```

## 📝 Catatan Penting

- **COD Only**: Layanan COD hanya untuk area Tulungagung, Jawa Timur
- **Pemesanan H-4**: Minimal pemesanan 4 hari sebelum acara
- **Custom Request**: Tersedia untuk semua buket sesuai keinginan dan budget

## 📞 Kontak

- **WhatsApp**: [085816516892](https://wa.me/6285816516892)
- **Instagram**: [@arcy_buket29](https://www.instagram.com/arcy_buket29?igsh=MXVzNHY4dHg5Znc4dQ==)
- **Lokasi**: Tulungagung, Jawa Timur

## 📄 Lisensi

© 2025 Arcy Buket. All rights reserved.

