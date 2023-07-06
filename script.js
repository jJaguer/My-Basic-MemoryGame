let timerActive = false;
let timer;
let timeScore = 0;
document.addEventListener("contextmenu", (event) => event.preventDefault());

const backgroundGameStart = document.createElement("div");
backgroundGameStart.style.position = "fixed";
backgroundGameStart.style.top = "0";
backgroundGameStart.style.left = "0";
backgroundGameStart.style.width = "100%";
backgroundGameStart.style.height = "100%";
backgroundGameStart.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
document.body.appendChild(backgroundGameStart);

const gameStart = document.createElement("div");
gameStart.style.position = "fixed";
gameStart.style.top = "50%";
gameStart.style.left = "50%";
gameStart.style.transform = "translate(-50%, -50%)";
gameStart.style.width = "400px";
gameStart.style.height = "320px";
gameStart.style.backgroundColor = "#3b83bd";
gameStart.style.border = "2px solid #ffb846";
gameStart.style.borderRadius = "2px";
gameStart.style.padding = "20px";
backgroundGameStart.appendChild(gameStart);

const messageGameStart = document.createElement("h1");
messageGameStart.textContent = "Welcome!";
messageGameStart.style.margin = "20px auto";
messageGameStart.style.textAlign = "center";
messageGameStart.style.color = "#ffb846";
gameStart.appendChild(messageGameStart);

const messageGameStart2 = document.createElement("p");
messageGameStart2.textContent =
  "This project is intended to be part of my portfolio.";
messageGameStart2.style.margin = "15px auto";
messageGameStart2.style.textAlign = "center";
messageGameStart2.style.color = "#ffb846";
gameStart.appendChild(messageGameStart2);

const messageGameStart3 = document.createElement("p");
messageGameStart3.textContent =
  "Although it is simple, I really enjoyed the personal experience and the time invested in it.";
messageGameStart3.style.margin = "15px auto";
messageGameStart3.style.textAlign = "center";
messageGameStart3.style.color = "#ffb846";
gameStart.appendChild(messageGameStart3);

const messageGameStart4 = document.createElement("h3");
messageGameStart4.textContent = "Jones López";
messageGameStart4.style.margin = "15px auto";
messageGameStart4.style.textAlign = "center";
messageGameStart4.style.color = "#ffb846";
gameStart.appendChild(messageGameStart4);

const buttonGameStart = document.createElement("button");
buttonGameStart.textContent = "Start Game";
buttonGameStart.style.display = "block";
buttonGameStart.style.margin = "20px auto";
buttonGameStart.style.cursor = "pointer";
buttonGameStart.addEventListener("click", () => {
  if (!timerActive) {
    timer = setInterval(() => {
      time++;
      gameTime();
    }, 1000);
    timerActive = true;

    function removePresentation() {
      const messagePresentation = backgroundGameStart.parentNode;
      messagePresentation.removeChild(backgroundGameStart);
    }
    removePresentation();
    playMusicGame();
    changeVolume();
  }
});
gameStart.appendChild(buttonGameStart);

let time = 0;
function gameTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  const timeContainer = document.getElementById("time");
  timeContainer.innerHTML = `Time: ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function playAudioCardFlip() {
  const setAudioCard = new Audio("f4ngy__card-flip.wav");
  setAudioCard.play();
}

function crearGrilla(rows, columns) {
  const pairs = (rows * columns) / 2;
  const numbers = [];

  // Create an arrangement with the numbers needed for the pairs
  for (let i = 0; i < pairs; i++) {
    numbers.push(i + 1);
    numbers.push(i + 1);
  }

  // Shuffle numbers randomly
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // Create the grid and add the elements to the grid
  const grid = document.createElement("div");
  grid.classList.add("grid");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < columns; j++) {
      const index = i * columns + j;
      const cards = document.createElement("div");
      cards.classList.add("cards");
      cards.textContent = "";
      cards.dataset.value = numbers[index];
      cards.dataset.state = "hidden";
      row.appendChild(cards);
    }

    grid.appendChild(row);
  }

  return grid;
}

// Get div element with id "canvasGame".
const canvasGame = document.getElementById("canvasGame");

// Create the grid and add it to the div element
const grid = crearGrilla(6, 5);
canvasGame.appendChild(grid);

const cards = document.querySelectorAll(".cards");
let selectorCards = [];
let attempts = 0;

const setAudioGame = new Audio("relaxingMusic.mp3");
const volumeRangeGame = document.getElementById("volumeRange");
volumeRangeGame.addEventListener("input", changeVolume);

function playMusicGame() {
  setAudioGame.play();
}

function changeVolume() {
  setAudioGame.volume = volumeRangeGame.value;
}

function winMusic() {
  const winMusicGame = new Audio("baltiyar13__win-or-success-game-title.wav");
  winMusicGame.play();
}

function verifyFinal() {
  const allComplete = document.querySelectorAll(".correct");
  if (allComplete.length === cards.length) {
    setAudioGame.pause();

    winMusic();
    clearInterval(timer);

    const formatTime = (time) => {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    };

    // creates the dark background
    const fondo = document.createElement("div");
    fondo.style.position = "fixed";
    fondo.style.top = "0";
    fondo.style.left = "0";
    fondo.style.width = "100%";
    fondo.style.height = "100%";
    fondo.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.body.appendChild(fondo);

    // creates the pop-up window
    const ventana = document.createElement("div");
    ventana.style.position = "fixed";
    ventana.style.top = "50%";
    ventana.style.left = "50%";
    ventana.style.transform = "translate(-50%, -50%)";
    ventana.style.width = "400px";
    ventana.style.height = "250px";
    ventana.style.backgroundColor = "#3b83bd";
    ventana.style.border = "2px solid #ffb846";
    ventana.style.borderRadius = "2px";
    ventana.style.padding = "20px";
    fondo.appendChild(ventana);

    // creates the message and the button
    const mensaje = document.createElement("p");
    mensaje.textContent = "Good Game!";
    mensaje.style.margin = "5px auto";
    mensaje.style.textAlign = "center";
    mensaje.style.color = "#ffb846";
    ventana.appendChild(mensaje);

    const mensaje2 = document.createElement("p");
    mensaje2.textContent = "You have complete in " + attempts + " tries";
    mensaje2.style.margin = "5px auto";
    mensaje2.style.textAlign = "center";
    mensaje2.style.color = "#ffb846";
    ventana.appendChild(mensaje2);

    const mensaje3 = document.createElement("p");
    mensaje3.textContent = `Time: ${formatTime(time)}`;
    mensaje3.style.margin = "5px auto";
    mensaje3.style.textAlign = "center";
    mensaje3.style.color = "#ffb846";
    ventana.appendChild(mensaje3);

    const boton = document.createElement("button");
    boton.textContent = "New Game";
    boton.style.display = "block";
    boton.style.margin = "10px auto";
    boton.style.cursor = "pointer";
    boton.addEventListener("click", () => {
      location.reload(); // Refresh the page.
    });
    ventana.appendChild(boton);

    const mensaje4 = document.createElement("p");
    mensaje4.textContent = `The audios are taken from freesound.org and to || HealingMate - Dog Music || for the music`;
    mensaje4.style.margin = "5px auto";
    mensaje4.style.textAlign = "center";
    mensaje4.style.color = "#ffb846";
    ventana.appendChild(mensaje4);
  }
}

function hideCards() {
  cards.forEach((card) => {
    if (!card.classList.contains("correct")) {
      card.classList.remove("wrong");
      card.textContent = "";
    }
  });
  selectorCards = [];
}

function colorCardSelected() {
  cards.forEach((card) => {
    if (card.classList.contains("cardSelected")) {
      card.classList.remove("cardSelected");
    }
  });
  selectorCards = [];
}

let isChecking = false;

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}

cards.forEach((card) => {
  card.addEventListener(
    "click",
    debounce(() => {
      playAudioCardFlip();
      if (
        card.classList.contains("selected") ||
        card.classList.contains("correct") ||
        isChecking
      ) {
        return;
      }
      if (selectorCards.includes(card)) {
        return;
      }
      selectorCards.push(card);
      card.textContent = card.dataset.value;
      card.classList.add("cardSelected");

      if (selectorCards.length === 2) {
        isChecking = true;
        disableCards();
        setTimeout(() => {
          attempts++;
          const value1 = selectorCards[0] ? selectorCards[0].dataset.value : "";
          const value2 = selectorCards[1] ? selectorCards[1].dataset.value : "";

          if (value1 != value2) {
            card.textContent = card.dataset.value;
            card.classList.add("wrong");
            selectorCards[0].classList.add("wrong");
            setTimeout(hideCards, 300);
          } else {
            selectorCards.forEach((card) => card.classList.add("correct"));
            card.textContent = card.dataset.value;
            selectorCards[0].classList.add("cardCorrect");
            selectorCards[1].classList.add("cardCorrect");
          }
          setTimeout(() => {
            colorCardSelected();
            selectorCards = [];
            verifyFinal();
            enableCards();
            isChecking = false;
          }, 200);
        }, 300);
      }
      const attemptsTotally = document.getElementById("attempts");
      attemptsTotally.textContent = "Attempts: " + attempts;
    }, 100)
  );
  gameTime();
});

function disableCards() {
  cards.forEach((card) => {
    card.classList.add("disabled");
  });
}

function enableCards() {
  cards.forEach((card) => {
    card.classList.remove("disabled");
  });
}
