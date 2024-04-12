const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choice = document.querySelectorAll(".choice");
const gradientText = document.querySelector('.gradient-text');

let player;
let computer;
let result;
let feedback;

//Offline (nem bejelentkezett) állapotban kiírandó statisztikák változójának deklarálása.
let rockCount = 0;
let scissorCount = 0;
let paperCount = 0;
let winCount = 0;
let loseCount = 0;

// Állapotjelző szín.
let linearColor;

//Minden gombra külön lefuttatja a következőket.
choice.forEach(button => button.addEventListener("click", () => {
  player = button.dataset.value; // A button dataset értékének kiolvasása és eltárolása.
  computerTurn();
  playerText.textContent = `${player}`; //Játékos által választott kiírása.
  computerText.textContent = `${computer}`; //Gép által válaszott kiírása.
  checkWinner();
  quoteColor();
  resultText.textContent = feedbackQuote(feedback); //Random szöveg kiírása.
}));

function updateCounters(type) {
  if (player !== undefined) { //Ha az adatbázis elérhető az ott tárolt értékeket írja ki, különben az offlin értékeket.
    switch(type) { //Offline értékek.
      case 1:
        rockCount++;
        document.getElementsByClassName("rockCount")[0].innerText = `${rockCount}`;
        break;
      case 2:
        paperCount++;
        document.getElementsByClassName("paperCount")[0].innerText = `${paperCount}`;
        break;
      case 3:
        scissorCount++;
        document.getElementsByClassName("scissorCount")[0].innerText = `${scissorCount}`;
        break;
    }

    if (feedback == 0){
      loseCount++;
      document.getElementsByClassName("loseCount")[0].innerText = `${loseCount}`;
    }
    else if(feedback == 1){
      winCount++;
      document.getElementsByClassName("winCount")[0].innerText = `${winCount}`;
    }
  }
  else{
    switch(type) { //Adatbázisban tárolt értékek.
      case 1:
        incrementRscore();
        break;
      case 2:
        incrementPscore();
        break;
      case 3:
        incrementSscore();
        break;
    }
      
    if (feedback == 0){
      incrementBotscore();    
    }
    else if(feedback == 1){
      incrementPlayerscore();
    }
  }
}

function computerTurn(){ //Gép random kiválaszt egyet.

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        moveBox(4);
        break;
      case 2:
        computer = "PAPER";
        moveBox(5);
        break;
      case 3:
        computer = "SCISSORS";
        moveBox(6);
        break;
    }
}

function feedbackQuote(feedback){ //Random mondat választás, állás alapján.
  const randNum = Math.floor(Math.random() * 15 );

  if (feedback == 0) {   
    const messages = [
      "Tough luck, try again!", 
      "You gave it your best!", 
      "Don't give up, keep trying!", 
      "A valiant effort, but lost.", 
      "It's not over yet, try harder!", 
      "Keep your head up, try again.", 
      "You'll get 'em next time, champ!", 
      "Better luck next time, fighter!", 
      "You'll come back stronger, warrior!", 
      "A tough loss, but not the end.", 
      "No worries, you'll win next time.", 
      "You're a fighter, keep pushing!", 
      "It's not about winning, keep playing!", 
      "You lost the battle, not the war.", 
      "Take a deep breath, try again!"
    ];
    return messages[randNum];
  }
  if (feedback == 1) {

    const messages = [
      "You're crushing it, dude!", 
      "Way to go, champ!", 
      "You're on fire, my friend!", 
      "Booyah, you nailed it!", 
      "You're a total rockstar!", 
      "Killing it, keep it up!", 
      "That's what I'm talking about!", 
      "You're a natural-born winner!", 
      "You're a true champ, man!", 
      "Nothing can stop you, bro!", 
      "You're unbeatable, keep going!", 
      "You're a force to be reckoned with!", 
      "Awesome job, you crushed it!", 
      "Victory is yours, well done!", 
      "You're simply amazing, congrats!"
    ];
    return messages[randNum];
  }
  if (feedback == 2) {
    const messages = [
      "It's a tie, let's go again!", 
      "The battle ends in a draw.", 
      "Neither won this round, huh.", 
      "Looks like it's a stalemate.", 
      "Nobody's a winner this time.", 
      "Both sides gave it their all.", 
      "Equal match, no winner yet.", 
      "It's a close call, but tie.", 
      "The match ends in a draw.", 
      "Nobody's got the upper hand.", 
      "You're evenly matched, both strong.", 
      "A tie, how anticlimactic...", 
      "It's a standoff, still no winner.", 
      "You're equally skilled, impressive!", 
      "No clear winner, keep trying!"
    ];
    return messages[randNum];
  }
}

function checkWinner(){ //Kiválasztja, hogy ki nyer, veszít, illetve ha döntetlen az állás.
  let tempResult;
  switch(player.toUpperCase()) {
    case "ROCK":
      switch(computer.toUpperCase()) {
        case "SCISSORS":
          feedback = 1;
          tempResult = 1;
          break;
        case "PAPER":
          feedback = 0;
          tempResult = 1;
          break;
        case "ROCK":
          feedback = 2;
          tempResult = 1;
          break;
      }
      break;
    case "PAPER":
      switch(computer.toUpperCase()) {
        case "ROCK":
          feedback = 1;
          tempResult = 2;
          break;
        case "SCISSORS":
          feedback = 0;
          tempResult = 2;
          break;
        case "PAPER":
          feedback = 2;
          tempResult = 2;
          break;
      }
      break;
    case "SCISSORS":
      switch(computer.toUpperCase()) {
        case "ROCK":
          feedback = 0;
          tempResult = 3;
          break;
        case "PAPER":
          feedback = 1;
          tempResult = 3;
          break;
        case "SCISSORS":
          feedback = 2;
          tempResult = 3;
          break;
      }
      break;
  }
  updateCounters(tempResult);
  return feedback;
}

function quoteColor(){

  const linearColors = [  
  ["#2a2a2a", "#2a2a2a", "#b92b27", "#2a2a2a", "#2a2a2a"], // Fehér alapon Piros.
  ["#f4f7ff", "#f4f7ff", "#b92b27", "#f4f7ff", "#f4f7ff"], // Fekete alapon Piros.
  ["#2a2a2a", "#2a2a2a", "#11998e", "#2a2a2a", "#2a2a2a"], // Fehér alapon Zöld.
  ["#f4f7ff", "#f4f7ff", "#11998e", "#f4f7ff", "#f4f7ff"], // Fekete alapon Zöld.
  ["#2a2a2a", "#2a2a2a", "#dfdfdf", "#2a2a2a", "#2a2a2a"], // Fehér alapon Szürke.
  ["#f4f7ff", "#f4f7ff", "#2c3e50", "#f4f7ff", "#f4f7ff"]  // Fekete alapon Szürke.
  ];

  // A feedback értékétől függően eldönteni milyen színt adjon tovább, azon belül pedig, hogy milyen színű alapon jelenjen meg.
  if (feedback == 0) {
    colors = (color == "white" ? linearColors[0] : linearColors[1]);
    linearColor = `linear-gradient(to right, ${colors.join(", ")})`;
  }
  else if(feedback == 1){
    colors = (color == "white" ? linearColors[2] : linearColors[3]);
    linearColor = `linear-gradient(to right, ${colors.join(", ")})`;
  }
  else if(feedback == 2){
    colors = (color == "white" ? linearColors[4] : linearColors[5]);
    linearColor = `linear-gradient(to right, ${colors.join(", ")})`;
  }
  
  // Leszedi a színátmenetet, majd késleltetéssel újra megjeleníti.
  resultText.classList.remove('gradient-text');
  resultText.style.opacity = 0;
  setTimeout(() => {
    resultText.classList.add('gradient-text');
    resultText.style.opacity = 1;
    gradientText.style.background = linearColor;
    gradientText.style.backgroundSize = '400%';
    gradientText.style.webkitBackgroundClip = 'text';
    gradientText.style.BackgroundClip = 'text';
  }, 50); // 50ms várakozás, mielőtt a transition és a színek megjelennének.
}
