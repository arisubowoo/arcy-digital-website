# Script untuk Push ke GitHub
# GANTI YOUR_GITHUB_USERNAME dengan username GitHub Anda

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Push Arcy Buket ke GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# GANTI INI dengan username GitHub Anda
$GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"
$REPO_NAME = "arcy-buket"

Write-Host "Pastikan Anda sudah:" -ForegroundColor Yellow
Write-Host "1. Buat repository '$REPO_NAME' di GitHub" -ForegroundColor Yellow
Write-Host "2. Ganti YOUR_GITHUB_USERNAME di script ini" -ForegroundColor Yellow
Write-Host ""

if ($GITHUB_USERNAME -eq "YOUR_GITHUB_USERNAME") {
    Write-Host "ERROR: Ganti YOUR_GITHUB_USERNAME dengan username GitHub Anda!" -ForegroundColor Red
    Write-Host "Edit file ini dan ganti baris: `$GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'" -ForegroundColor Red
    exit
}

Write-Host "Username GitHub: $GITHUB_USERNAME" -ForegroundColor Green
Write-Host "Repository: $REPO_NAME" -ForegroundColor Green
Write-Host ""

$confirm = Read-Host "Lanjutkan push ke GitHub? (y/n)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Dibatalkan." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Menambahkan remote GitHub..." -ForegroundColor Cyan
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote sudah ada atau error. Mencoba update..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
}

Write-Host "Mengubah branch ke main..." -ForegroundColor Cyan
git branch -M main

Write-Host "Push ke GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ BERHASIL! File sudah di GitHub" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Langkah berikutnya:" -ForegroundColor Cyan
    Write-Host "1. Buka https://vercel.com" -ForegroundColor White
    Write-Host "2. Login dengan GitHub" -ForegroundColor White
    Write-Host "3. Import project '$REPO_NAME'" -ForegroundColor White
    Write-Host "4. Klik Deploy!" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  ❌ ERROR saat push" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Cek:" -ForegroundColor Yellow
    Write-Host "1. Apakah repository sudah dibuat di GitHub?" -ForegroundColor Yellow
    Write-Host "2. Apakah username benar?" -ForegroundColor Yellow
    Write-Host "3. Apakah sudah login di GitHub?" -ForegroundColor Yellow
    Write-Host ""
}

