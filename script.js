// Séléctionner les aiguilles de montre

const aiguille_heure = document.querySelector("#hour");

const aiguille_minute = document.querySelector("#minute");

const aiguille_seconde = document.querySelector("#second");


let secondsTour = 0;

let minutesTour = 0;

let hoursTour = 0;



function go() {

  // Extraction de la date actuel à l'aide de la classe Date :



  let daba = new Date();



  // Ajout de l'heure , le minute et la seconde dans des varaiables :



  let seconds = daba.getSeconds() / 60;

  let minutes = (daba.getMinutes() + seconds) / 60;

  let hours = (daba.getHours() + minutes) / 12;




  // Calcul des degrées de mouvement de l'aiguille d'heure, de l'aiguille de minute et de l'aiguille de seconde



  let secondsRotation = seconds * 360;

  let minutesRotation = minutes * 360;

  let hoursRotation = hours * 360;









  // Si quelque degrée retourne à 0, augmenter sa tourne par 1



  if (secondsRotation == 0) secondsTour += 1;

  if (minutesRotation == 0) minutesTour += 1;

  if (hoursRotation == 0) hoursTour += 1;






  // Rotation des aiguilles à partir les degrées calculées :



  aiguille_heure.style.transform = `rotate(${hoursRotation + 360 * hoursTour}deg)`;

  aiguille_minute.style.transform = `rotate(${minutesRotation + 360 * minutesTour}deg)`;

  aiguille_seconde.style.transform = `rotate(${secondsRotation + 360 * secondsTour}deg)`;

}



// Execution de la fonction chaque une seconde


setInterval(go, 1000);