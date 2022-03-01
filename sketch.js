let board;
let player = [];
//gameState 0 er til at finde ud af hvor mange spilere der er
//gameState 1 er til at spille spillet
//gameState 2 er til at vise hvem der har vundet og sprøge om der skal spilles et nyt spil
let gameState = 0;

// antal spillere
let playerQTY = 4;
let playersSet = false;
let playerTurn = 0;

let diceRoll1 = 0;
let diceRoll2 = 0;

function preload(){
  dice1 = loadImage('images/dice-six-faces1.png');
  dice2 = loadImage('images/dice-six-faces2.png');
  dice3 = loadImage('images/dice-six-faces3.png');
  dice4 = loadImage('images/dice-six-faces4.png');
  dice5 = loadImage('images/dice-six-faces5.png');
  dice6 = loadImage('images/dice-six-faces6.png');
}

function setup() {

  createCanvas(800, 800);
  
  setUpBoard();

}

function draw() {  

  background(191, 219, 174);

  // indsæet spillere i player[] udfra playerQTY der bestemmer antallet af spillere.
  // denne funktion køre kun en gang på grund af playersSet
  if(playersSet == false){
    for (let i = 0; i < playerQTY; i++) {
      player.push(new Player(i));
    }
    playersSet = true;
  }
  

  // dice box and roll text
  push()
  fill(191, 219, 174);
  rect(width/2 - 60, height/2 - 30, 120, 60);
  textSize(15);
  fill(0);
  textAlign(CENTER, CENTER);
  text('Click to roll dices', width/2, height/2 - 40);
  pop();

  update();
  // opdatere alle spilleres informationer
  for (let i = 0; i < playerQTY; i++) {
    player[i].update();
  }
  
}

//Kan blive kladt for at lave et nyt spil.

//Skift navn på funktion
function setUpBoard() {

  board = new Board();

  // reset/setup bank

  // reset/setup players

}

function update() {

  board.update();

  

  // update player

  // update UI

}

function mousePressed(){
  // if the mouse is clicked inside the dice box, run the rollDice function from player.js
  if(mouseX > width/2 - 60 && mouseX < width/2 + 60 && mouseY > height/2 -30 && mouseY < height/2 + 30){
    player[playerTurn].rollDice();
    diceRoll1 = player[playerTurn].diceRoll1;
    diceRoll2 = player[playerTurn].diceRoll2;

    // hvis terningerne IKKE er den samme, vil turen gå videre til næste spiller
    if(diceRoll1 != diceRoll2){
      if(playerTurn < playerQTY - 1){
        playerTurn += 1;
      }
      else{
        playerTurn = 0;
      }
    }
  }
}