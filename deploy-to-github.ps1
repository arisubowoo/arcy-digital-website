# Script untuk Upload Project ke GitHub
# Jalankan dengan: .\deploy-to-github.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOY ARCY BUKET KE GITHUB" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Cek apakah git sudah terinstall
try {
    $gitVersion = git --version
    Write-Host "✓ Git terdeteksi: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git tidak terdeteksi. Silakan install Git terlebih dahulu." -ForegroundColor Red
    Write-Host "  Download: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Cek apakah sudah ada git repository
if (Test-Path ".git") {
    Write-Host "✓ Git repository sudah ada" -ForegroundColor Green
} else {
    Write-Host "→ Inisialisasi Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Git repository berhasil diinisialisasi" -ForegroundColor Green
}

# Tanya URL repository GitHub
Write-Host ""
Write-Host "Masukkan URL repository GitHub Anda:" -ForegroundColor Yellow
Write-Host "Contoh: https://github.com/username/arcy-buket.git" -ForegroundColor Gray
$repoUrl = Read-Host "URL Repository"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "✗ URL repository tidak boleh kosong!" -ForegroundColor Red
    exit 1
}

# Cek apakah remote sudah ada
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "→ Remote 'origin' sudah ada: $remoteExists" -ForegroundColor Yellow
    $update = Read-Host "Update remote? (y/n)"
    if ($update -eq "y" -or $update -eq "Y") {
        git remote set-url origin $repoUrl
        Write-Host "✓ Remote berhasil diupdate" -ForegroundColor Green
    }
} else {
    git remote add origin $repoUrl
    Write-Host "✓ Remote 'origin' berhasil ditambahkan" -ForegroundColor Green
}

# Add semua file
Write-Host ""
Write-Host "→ Menambahkan file ke staging..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "→ Membuat commit..." -ForegroundColor Yellow
$commitMessage = Read-Host "Masukkan commit message (atau tekan Enter untuk default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Initial commit - Arcy Buket website"
}
git commit -m $commitMessage
Write-Host "✓ Commit berhasil dibuat" -ForegroundColor Green

# Set branch ke main
Write-Host "→ Mengatur branch ke 'main'..." -ForegroundColor Yellow
git branch -M main
Write-Host "✓ Branch berhasil diatur ke 'main'" -ForegroundColor Green

# Push ke GitHub
Write-Host ""
Write-Host "→ Mengupload ke GitHub..." -ForegroundColor Yellow
Write-Host "  (Anda mungkin perlu login GitHub)" -ForegroundColor Gray
try {
    git push -u origin main
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ BERHASIL UPLOAD KE GITHUB!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Langkah selanjutnya:" -ForegroundColor Cyan
    Write-Host "1. Buka https://vercel.com" -ForegroundColor Yellow
    Write-Host "2. Login dengan GitHub" -ForegroundColor Yellow
    Write-Host "3. Import project dari GitHub" -ForegroundColor Yellow
    Write-Host "4. Deploy otomatis akan berjalan!" -ForegroundColor Yellow
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "✗ Error saat push ke GitHub" -ForegroundColor Red
    Write-Host "  Pastikan:" -ForegroundColor Yellow
    Write-Host "  - Repository sudah dibuat di GitHub" -ForegroundColor Yellow
    Write-Host "  - URL repository benar" -ForegroundColor Yellow
    Write-Host "  - Anda sudah login GitHub (git credential)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternatif: Upload manual via browser GitHub" -ForegroundColor Cyan
    Write-Host "  Buka repository di GitHub → Upload files" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Tekan Enter untuk keluar..."
Read-Host

