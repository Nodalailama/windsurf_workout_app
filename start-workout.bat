@echo off
title Windsurf Workout App

:: Aller dans le dossier où se trouve ce script
cd /d "%~dp0"

:: Vérifier si Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js n'est pas installe ! Telecharge-le sur nodejs.org.
    timeout /t 5 >nul
    exit /b 1
)

:: Installer les dépendances si nécessaire
if not exist "node_modules" (
    echo Installation des dependances...
    npm install
)

:: Lancer l'application
echo Demarrage de Windsurf Workout App...
node app.js

:: Fermer la fenêtre une fois terminé
exit