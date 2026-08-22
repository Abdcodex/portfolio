$ErrorActionPreference = "Stop"

$patchFile = Join-Path $PSScriptRoot "portfolio_company_contrast.patch"
$stylesFile = Join-Path (Get-Location) "src\styles.scss"

if (-not (Test-Path $stylesFile)) {
    throw "Run this script from the portfolio repository root. Expected: src\styles.scss"
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git is required to apply this patch."
}

# Exit cleanly when the patch is already present.
git apply --reverse --check $patchFile 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Company contrast patch is already applied." -ForegroundColor Yellow
    exit 0
}

# Validate before changing any file.
git apply --check $patchFile
if ($LASTEXITCODE -ne 0) {
    throw "The patch does not match the current src\styles.scss. No files were changed."
}

git apply $patchFile
if ($LASTEXITCODE -ne 0) {
    throw "Git could not apply the patch."
}

Write-Host "Company-name and section-heading contrast updated successfully." -ForegroundColor Green
Write-Host "Next: npm ci; npx ng build --configuration production --base-href /portfolio/"
