// Accès aux éléments de la page web
const cont = document.getElementById('container');
const startBtn = document.getElementById('start_btn');
const head = document.getElementById('appFace');
const verifBtn = document.getElementById('verify_btn');
const userChoice = document.getElementById('userChoice');
const message = document.getElementById('game_msg');
const txtScore = document.querySelector('#curScore');
const txtTries = document.querySelector('#triesLeft');
const txtBestScore = document.querySelector('#bestScore');
const showNumCard = document.getElementById('showNum_card');
// Variables globales
let numToGuess = 0;
let guess;
let score=20;
let tries = 10;
let gameStatus = 0;




// Gestionnaires d'événements
window.addEventListener('load', initDocument);
startBtn.addEventListener('click', startGame);
verifBtn.addEventListener('click', verifChoices);




// Initialisation de la page à afficher
function initDocument() {
    startBtn.disabled = false;
}

// Remise à zéro des variables et de l'affichage
function startGame() {
    console.log('start');
    numToGuess = Math.floor((Math.random()*100)+1);
    head.src = "bald-head-with-question-mark.png";
    userChoice.disabled = false;
    verifBtn.disabled = false;
    score = 20;
    tries = 10;
     
    userChoice.value = "";
    userChoice.focus();
    gameStatus = 1;
}

// Vérification du choix de l'utilisateur
function verifChoices() {

    // message.innerText = "Bravo! vous êtes devin...";
    guess = Number(userChoice.value);
    tries--;
    if(numToGuess == guess) {
          message.innerText = "Bravo! vous êtes devin...";
          cont.style.backgroundColor ="green";
          endGame(true);
    } else {
        if (guess > numToGuess) {
            message.innerText = "Votre proposition est trop élevée";
        } else {
            message.innerText = "Votre proposition est trop basse";
        }
        cont.style.backgroundColor ="red";
        if (tries == 0) {
            endGame(false);
        }
    }
    score = tries * 2;
    txtTries.textContent = "Essais: " + tries;
    if (gameStatus) {
        userChoice.value = "";
        userChoice.focus();
    } else {
        console.log(tries);
    }
    txtScore.textContent = "Score: " + score;
}

// Finalisation de la partie et gestion de l'affichage de fin de partie
function endGame(win) {
    if (win) {
        score = score + 1;
        head.src = "pngegg(1).png"
        txtBestScore.textContent = "Meilleur score: " + score;
    } else {
        message.innerText = "Malheureusement c'est perdu, mais rejouez c'est gratuit..."
        showNumCard.innerHTML = "<p id='secretNumber'>" + numToGuess + "</p>"

    }
    gameStatus = 0;
}

