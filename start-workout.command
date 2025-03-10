#!/bin/bash

# Aller dans le dossier où se trouve ce script
cd "$(dirname "$0")"

# Vérifier si Node.js est installé
if ! command -v node >/dev/null 2>&1; then
    echo "Node.js n'est pas installé ! Télécharge-le sur nodejs.org."
    sleep 5 # Attendre 5 secondes pour que l'utilisateur voit le message
    exit 1
fi

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "Installation des dépendances..."
    npm install
fi

# Lancer l'application
echo "Démarrage de Windsurf Workout App..."
node app.js

# Fermer le terminal une fois terminé
osascript -e 'tell application "Terminal" to quit'