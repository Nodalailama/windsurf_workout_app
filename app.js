import say from 'say'; // Importer le module pour la synthèse vocale

const exercises = [
  { name: "Échauffement - Rotations des bras", duration: 120 }, // 2 min
  { name: "Échauffement - Jumping jacks", duration: 180 },     // 3 min
  { name: "Pompes", duration: 60, rest: 30 },                 // 1 min + 30s repos
  { name: "Planche dynamique", duration: 60, rest: 30 },
  { name: "Flexions des poignets", duration: 60, rest: 30 },
  { name: "Extensions des poignets", duration: 60, rest: 30 },
  { name: "Dips sur chaise", duration: 60, rest: 30 },
  { name: "Serrage balle ou serviette", duration: 60, rest: 30 },
  { name: "Étirements - Triceps et Avant-bras", duration: 300 } // 5 min
];

function startWorkout() {
  console.log("Début de la séance d'entraînement ! Prépare-toi 💪");
  say.speak("Début de la séance d'entraînement ! Prépare-toi !");

  let currentIndex = 0;

  function nextStep() {
    if (currentIndex >= exercises.length) {
      console.log("Séance terminée ! Bien joué, champion 🏄‍♂️");
      say.speak("Séance terminée ! Bien joué, champion !");
      return;
    }

    const exercise = exercises[currentIndex];
    console.log(`\nExercice : ${exercise.name}`);
    console.log(`Durée : ${exercise.duration} secondes`);
    console.log("GO !");
    say.speak(`Exercice : ${exercise.name}. Durée : ${exercise.duration} secondes. Go !`);

    setTimeout(() => {
      if (exercise.rest) {
        console.log(`Repose-toi pendant ${exercise.rest} secondes...`);
        say.speak(`Repose-toi pendant ${exercise.rest} secondes`);
        setTimeout(() => {
          currentIndex++;
          nextStep();
        }, exercise.rest * 1000);
      } else {
        currentIndex++;
        nextStep();
      }
    }, exercise.duration * 1000);
  }

  nextStep();
}

// Lancer la séance
startWorkout();