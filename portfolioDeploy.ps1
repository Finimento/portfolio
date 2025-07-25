param(
    [string]$commit = "Automatischer Commit",
    [switch]$help,
    [switch]$h
)

if ($help -or $h) {
    Write-Host ""
    Write-Host "==================== Anleitung ====================" -ForegroundColor Cyan
    Write-Host "Dieses Skript automatisiert den Deploy-Prozess für dein Flutter-Portfolio." -ForegroundColor White
    Write-Host ""
    Write-Host "Nutzung:" -ForegroundColor White
    Write-Host "  .\deploy.ps1 [-commit 'Deine Commit-Nachricht']" -ForegroundColor White
    Write-Host ""
    Write-Host "Parameter:" -ForegroundColor White
    Write-Host "  -commit   Commit-Message für den Push (optional)" -ForegroundColor White
    Write-Host "  -help/-h  Zeigt diese Hilfe an" -ForegroundColor White
    Write-Host ""
    Write-Host "Ablauf:" -ForegroundColor White
    Write-Host "  - flutter clean, pub get, Übersetzungen generieren, Web-Build" -ForegroundColor White
    Write-Host "  - kopiert Build nach docs/ und pusht alles zu GitHub" -ForegroundColor White
    Write-Host "===================================================" -ForegroundColor Cyan
    exit 0
}

function PortfolioDeployStep($command, $message) {
    Write-Host "`n[STEP] $command" -ForegroundColor Cyan
    Invoke-Expression $command
    if ($LASTEXITCODE -ne 0) {
        Write-Host "`n[ERROR] Fehler bei: $command" -ForegroundColor Red
        exit $LASTEXITCODE
    } else {
        Write-Host "[OK] $message" -ForegroundColor Green
    }
}

# Optional: Verzeichnis prüfen
if (-not (Test-Path ".\pubspec.yaml")) {
    Write-Host "[ERROR] Falsches Verzeichnis! Wechsle ins Projektverzeichnis." -ForegroundColor Red
    exit 1
}

PortfolioDeployStep "flutter clean" "flutter clean erfolgreich"
PortfolioDeployStep "flutter pub get" "flutter pub get erfolgreich"
PortfolioDeployStep "dart run easy_localization:generate -S assets/translations -f keys -O lib/src/localization/generated -o locale_keys.g.dart" "locale_keys.g.dart generiert"
PortfolioDeployStep "dart run easy_localization:generate -S assets/translations -f json -O lib/src/localization/generated -o locale_json.g.dart" "locale_json.g.dart generiert"
PortfolioDeployStep "flutter build web --release --no-tree-shake-icons" "Web-Build erfolgreich"
PortfolioDeployStep "Remove-Item -Path ./docs -Recurse -Force" "docs/ entfernt"
PortfolioDeployStep "mkdir docs" "docs/ erstellt"
PortfolioDeployStep "cp -r build/web/* docs/" "build/web nach docs kopiert"
PortfolioDeployStep "git add ./*" "git add abgeschlossen"
PortfolioDeployStep "git commit -m '$commit'" "git commit abgeschlossen"
PortfolioDeployStep "git pull --rebase origin main" "git pull --rebase abgeschlossen"
PortfolioDeployStep "git push origin main" "git push abgeschlossen"

# Abschlussmeldung unterstrichen
$abschluss = "`n[DONE] Alles erfolgreich erledigt!"
$underline = ("=" * ($abschluss.Length - 2))
Write-Host $abschluss -ForegroundColor Green
Write-Host $underline -ForegroundColor Green