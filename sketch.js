let board;
let player;
//gameState 0 er til at finde ud af hvor mange spilere der er
//gameState 1 er til at spille spillet
//gameState 2 er til at vise hvem der har vundet og sprøge om der skal spilles et nyt spil
let gameState = 1;
//boardState 0 betyder at der er ikke nogle menuer open.
//boardState 1 betyder at der er en bestem menu open.
let boardState = 0;

let buttonList = [];

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

  player = new Player();

  buttonList.push(new Button(width/2, height/2, 60, 30, player.rollDice, "roleDice"));
}

function draw() {  

  background(191, 219, 174);


  // dice box and roll text
  push();
  fill(191, 219, 174);
  rect(width/2 - 60, height/2 - 30, 120, 60);
  textSize(15);
  fill(0);
  textAlign(CENTER, CENTER);
  text('Click to roll dices', width/2, height/2 - 40);
  pop();

  update();

  

  
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

  player.update();

  setButtons();
  

  // update player

  // update UI

}

function setButtons() {

  if(gameState == 0) {

    //vælg spillere

  }
  
  if(gameState == 1 && boardState == 0) {

    for (let i = 0; i < buttonList.length; i++) {

      if(buttonList[i].name == "roleDice") {

        buttonList[i].canBePressed = true;
        continue;

      }

      buttonList[i].canBePressed = false;
      
    }

  }
  

}

function mousePressed(){
  // if the mouse is clicked inside the dice box, run the rollDice function from player.js
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].checkForPress();
    
  }

}