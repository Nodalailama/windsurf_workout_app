Windsurf Workout App
Bienvenue dans Windsurf Workout App ! Cette appli te guide avec une voix pour faire des exercices de renforcement pour le windsurf. Voici comment l’installer et la lancer sur ton ordinateur, que tu sois sur macOS ou Windows. Pas de panique, on va tout expliquer pas à pas, même si tu n’as jamais utilisé un ordinateur avant (MDR :)!
Ce dont tu as besoin
Un ordinateur (Mac ou Windows).

Une connexion Internet.

10-15 minutes pour tout installer.

Étape 1 : Télécharger Cursor (l’outil pour coder et lancer l’app)
Cursor est un programme qui va nous aider à lancer l’app. C’est comme un super bloc-notes pour le code.
Sur macOS
Ouvre ton navigateur (Safari, Chrome, etc.).

Va sur ce site : https://cursor.sh/.

Clique sur le bouton Download (télécharger) pour macOS.

Une fois téléchargé, ouvre le fichier (probablement Cursor.dmg dans ton dossier Téléchargements).

Fais glisser l’icône Cursor dans le dossier Applications.

Ouvre Cursor depuis Applications (double-clique dessus).

Sur Windows
Ouvre ton navigateur (Edge, Chrome, etc.).

Va sur ce site : https://cursor.sh/.

Clique sur le bouton Download pour Windows.

Une fois téléchargé, ouvre le fichier (probablement CursorSetup.exe dans Téléchargements).

Suis les instructions (clique "Suivant", "Installer", puis "Terminer").

Lance Cursor (cherche-le dans le menu Démarrer ou sur ton bureau).

Étape 2 : Installer Node.js (pour faire fonctionner l’app)
Node.js est un outil qui permet à l’app de parler et de marcher. Sans ça, rien ne fonctionne !
Sur macOS
Ouvre Cursor.

En haut, clique sur Terminal > Nouveau terminal. Une fenêtre noire apparaît en bas.

Tape cette commande et appuie sur Entrée :

brew install node

Si ça dit "commande introuvable", installe d’abord Homebrew :

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Puis retape brew install node.

Attends que ça finisse (ça peut prendre 2-3 minutes).

Vérifie que ça marche :

node -v

Si tu vois un numéro (ex. : v18.19.0), c’est bon !

Sur Windows
Ouvre Cursor.

En haut, clique sur Terminal > Nouveau terminal. Une fenêtre noire ou bleue apparaît en bas.

Tape cette commande et appuie sur Entrée :

winget install -e --id OpenJS.NodeJS.LTS

Attends que ça finisse (2-3 minutes).

Ferme Cursor et relance-le (pour que ça marche bien).

Dans le terminal, tape :

node -v

Si tu vois un numéro (ex. : v18.19.0), c’est bon !

Étape 3 : Télécharger l’app depuis GitHub
L’app est stockée sur GitHub, un site où on met du code.
Dans Cursor, ouvre le terminal (Terminal > Nouveau terminal si ce n’est pas déjà ouvert).

Tape ces commandes une par une (appuie sur Entrée après chaque ligne) :

mkdir windsurf-workout
cd windsurf-workout
git clone https://github.com/Nodalailama/windsurf_workout_app.git .

Si ça dit "git pas trouvé" :
macOS : Tape brew install git et attends, puis recommence.

Windows : Tape winget install -e --id Git.Git, attends, ferme/rouvre Cursor, puis recommence.

Étape 4 : Installer les outils de l’app
L’app a besoin d’un petit outil appelé say pour parler.
Dans le terminal (toujours dans le dossier windsurf-workout), tape :

npm install

Ça lit le fichier package.json (s’il existe) et installe tout.

Si ça ne marche pas, tape :

npm install say

Étape 5 : Lancer l’app
Dans le terminal, tape :

node app.js

Appuie sur Entrée. Tu devrais entendre une voix dire "Début de la séance d’entraînement ! Prépare-toi !".

Suis les instructions vocales pour faire tes exercices !

Si ça ne marche pas
Pas de son : Vérifie que ton volume est allumé.

Erreur "node introuvable" : Refais l’étape 2.

Erreur "git introuvable" : Installe Git (voir étape 3).

Autre problème : Demande à un ami ou envoie un message à Nodalailama sur GitHub !

Bonus
L’app te dit toutes les 10 secondes où tu en es (ex. : "10 secondes", "20 secondes").

Fais les exercices pour devenir plus fort en windsurf !

## Pour les utilisateurs macOS (Lancement facile)
1. Double-clique sur le fichier `start-workout.command` dans le dossier `windsurf-workout`.
2. Un terminal s’ouvre, l’app démarre, et elle se ferme toute seule à la fin.
3. Si ça ne marche pas, suis les étapes 2 à 5 ci-dessus pour installer Node.js et les dépendances.

## Pour les utilisateurs Windows (Lancement facile)
1. Double-clique sur le fichier `start-workout.bat` dans le dossier `windsurf-workout`.
2. Une fenêtre noire s’ouvre, l’app démarre, et elle se ferme toute seule à la fin.
3. Si ça ne marche pas, suis les étapes 2 à 5 ci-dessus pour installer Node.js et les dépendances.