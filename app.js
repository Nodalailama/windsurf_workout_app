// workout.js
import say from 'say';

// Liste des exercices
const exercises = [
  { name: "Échauffement - Rotations des bras", duration: 120 },
  { name: "Échauffement - Jumping jacks", duration: 180 },
  { name: "Pompes", duration: 60, rest: 30 },
  { name: "Planche dynamique", duration: 60, rest: 30 },
  { name: "Flexions des poignets", duration: 60, rest: 30 },
  { name: "Extensions des poignets", duration: 60, rest: 30 },
  { name: "Dips sur chaise", duration: 60, rest: 30 },
  { name: "Serrage balle ou serviette", duration: 60, rest: 30 },
  { name: "Étirements - Triceps et Avant-bras", duration: 300 }
];

// Fonction pour parler et attendre la fin
function speakAndWait(text) {
  return new Promise((resolve) => {
    say.speak(text, null, 1.0, (err) => {
      if (err) {
        console.error("Erreur lors de la synthèse vocale :", err);
      }
      resolve();
    });
  });
}

// Fonction pour annoncer le temps écoulé toutes les 10 secondes
function startCountdown(duration, exerciseName) {
  let timeElapsed = 10; // Commence à 10 secondes
  const interval = setInterval(async () => {
    if (timeElapsed <= duration) {
      console.log(`${timeElapsed} secondes écoulées pour ${exerciseName}`);
      await speakAndWait(`${timeElapsed} secondes`);
      timeElapsed += 10;
    }
  }, 10 * 1000);

  return interval; // Retourne l'intervalle pour l'arrêter à la fin
}

async function startWorkout() {
  console.log("Début de la séance d'entraînement ! Prépare-toi 💪");
  await speakAndWait("Début de la séance d'entraînement ! Prépare-toi !");

  let currentIndex = 0;

  async function nextStep() {
    if (currentIndex >= exercises.length) {
      console.log("Séance terminée ! Bien joué, champion 🏄‍♂️");
      await speakAndWait("Séance terminée ! Bien joué, champion !");
      return;
    }

    const exercise = exercises[currentIndex];
    console.log(`\nExercice : ${exercise.name}`);
    console.log(`Durée : ${exercise.duration} secondes`);
    console.log("GO !");
    await speakAndWait(`Exercice : ${exercise.name}. Durée : ${exercise.duration} secondes. Go !`);

    // Lancer le compte à rebours toutes les 10 secondes
    const countdownInterval = startCountdown(exercise.duration, exercise.name);

    setTimeout(async () => {
      clearInterval(countdownInterval); // Arrêter le compte à rebours
      if (exercise.rest) {
        console.log(`Repose-toi pendant ${exercise.rest} secondes...`);
        await speakAndWait(`Repose-toi pendant ${exercise.rest} secondes`);
        setTimeout(async () => {
          currentIndex++;
          await nextStep();
        }, exercise.rest * 1000);
      } else {
        currentIndex++;
        await nextStep();
      }
    }, exercise.duration * 1000);
  }

  await nextStep();
}

// Lancer la séance
startWorkout().catch(err => console.error("Erreur dans la séance :", err));