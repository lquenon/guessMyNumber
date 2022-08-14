// Accès aux éléments de la page web
const startBtn = document.getElementById('start_btn');
const head = document.getElementById('appFace');
const verifBtn = document.getElementById('verify_btn');
const userChoice = document.getElementById('userChoice');
const message = document.getElementById('game_msg');
// Variables globales
let numToGuess = 0;
let guess;
let end = false
let win = 0;



// Gestionnaires d'événements
window.addEventListener('load', initDocument);
startBtn.addEventListener('click', startGame);
verifBtn.addEventListener('click', verifChoices);





function initDocument() {
    startBtn.disabled = false;
}

function startGame() {
    console.log('start');
    numToGuess = Math.floor((Math.random()*100)+1);
    head.src = "bald-head-with-question-mark.png";
    userChoice.disabled = false;
    verifBtn.disabled = false;
    userChoice.value = "";
    userChoice.focus();
}

function verifChoices() {

    // message.innerText = "Bravo! vous êtes devin...";
    guess = Number(userChoice.value);
    if(numToGuess == guess) {
          message.innerText = "Bravo! vous êtes devin...";
    } else {
        if (guess > numToGuess) {
            message.innerText = "Votre proposition est trop élevée";
        } else {
            message.innerText = "Votre proposition est trop basse";
        }
    }
    userChoice.value = "";
    userChoice.focus();
}

