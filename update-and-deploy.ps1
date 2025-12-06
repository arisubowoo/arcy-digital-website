# Script untuk Update dan Deploy Website
# Jalankan dengan: .\update-and-deploy.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  UPDATE & DEPLOY ARCY BUKET" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Cek apakah git sudah terinstall
try {
    git --version | Out-Null
} catch {
    Write-Host "✗ Git tidak terdeteksi. Silakan install Git terlebih dahulu." -ForegroundColor Red
    exit 1
}

# Cek apakah ada perubahan
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "✓ Tidak ada perubahan yang perlu di-commit" -ForegroundColor Green
} else {
    Write-Host "→ Perubahan yang terdeteksi:" -ForegroundColor Yellow
    git status --short
    
    Write-Host ""
    $add = Read-Host "Tambahkan semua perubahan? (y/n)"
    if ($add -eq "y" -or $add -eq "Y") {
        git add .
        Write-Host "✓ File berhasil ditambahkan" -ForegroundColor Green
    }
}

# Commit
Write-Host ""
$commitMessage = Read-Host "Masukkan commit message (atau tekan Enter untuk default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update website - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

try {
    git commit -m $commitMessage
    Write-Host "✓ Commit berhasil dibuat" -ForegroundColor Green
} catch {
    Write-Host "→ Tidak ada perubahan untuk di-commit" -ForegroundColor Yellow
}

# Push ke GitHub
Write-Host ""
Write-Host "→ Mengupload ke GitHub..." -ForegroundColor Yellow
try {
    git push
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ BERHASIL UPDATE KE GITHUB!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Vercel akan otomatis deploy dalam 2-5 menit..." -ForegroundColor Cyan
    Write-Host "Cek status di: https://vercel.com/dashboard" -ForegroundColor Yellow
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "✗ Error saat push ke GitHub" -ForegroundColor Red
    Write-Host "  Pastikan Anda sudah setup remote repository" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Tekan Enter untuk keluar..."
Read-Host

