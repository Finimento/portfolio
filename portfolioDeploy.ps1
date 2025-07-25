param(
    [string]$commit = "Automatischer Commit",
    [switch]$help,
    [switch]$h
)

# Hilfe-Text
if ($help -or $h) {
    Write-Host @"
Portfolio Deploy Skript
-----------------------
Automatisiert den gesamten Build- und Deploy-Prozess der Flutter-Portfolio-Webseite mit einem Befehl.

Parameter:
  -commit "Nachricht"    Setzt die Commit-Nachricht (Standard: 'Automatischer Commit')
  -help, -h              Zeigt diese Hilfe an

Nutzung:
  .\deploy.ps1 -commit "Mein Commit"
  .\deploy.ps1 -h

Ablauf:
- flutter clean
- flutter pub get
- Lokalisierung generieren
- Web-Build erstellen
- build/web nach docs/ kopieren
- git add, commit, pull --rebase, push

Hinweis:
Im Projektverzeichnis ausführen (dort, wo pubspec.yaml liegt)!

"@
    exit 0
}

function PortfolioDeployStep($command, $message) {
    Write-Host "`n🔄 $command" -ForegroundColor Cyan
    Invoke-Expression $command
    if ($LASTEXITCODE -ne 0) {
        Write-Host "`n❌ Fehler bei: $command" -ForegroundColor Red
        exit $LASTEXITCODE
    } else {
        Write-Host "✅ $message" -ForegroundColor Green
    }
}

# Optional: Verzeichnis prüfen
if (-not (Test-Path ".\pubspec.yaml")) {
    Write-Host "Falsches Verzeichnis! Wechsle ins Projektverzeichnis." -ForegroundColor Red
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

# Unterstrichene Abschlussmeldung (Workaround)
$underline = " " * 31 # Länge ggf. anpassen
Write-Host "`n🎉 Alles erfolgreich erledigt!" -ForegroundColor Green
Write-Host "$underline" -ForegroundColor Green