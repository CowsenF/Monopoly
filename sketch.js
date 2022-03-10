let board;
let player = [];
//gameState 0 er til at finde ud af hvor mange spilere der er
//gameState 1 er til at spille spillet
//gameState 2 er til at vise hvem der har vundet og sprøge om der skal spilles et nyt spil
let gameState = 0;
//boardState 0 betyder at der er ikke nogle menuer open.
//boardState 1 betyder at der er en bestem menu open.
let boardState = 0;

let buttonList = [];

let boardSizeX = 800;
let boardSizeY = 800;

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

  createCanvas(1600, 800);
  
  setUpBoard();

  // indsæet spillere i player[] udfra playerQTY der bestemmer antallet af spillere.
  // denne funktion køre kun en gang på grund af playersSet
  if(playersSet == false){
    for (let i = 0; i < playerQTY; i++) {
      player.push(new Player(i));
    }
    playersSet = true;
  }

  buttonList.push(new Button(boardSizeX/2, boardSizeY/2, 60, 30, player, "rollDice"));

}

function draw() {  

  background(191, 219, 174);

  
  

  // dice box and roll text
  push();
  fill(191, 219, 174);
  rect(boardSizeX/2 - 60, boardSizeY/2 - 30, 120, 60);
  textSize(15);
  fill(0);
  textAlign(CENTER, CENTER);
  text('Click to roll dices', boardSizeX/2, boardSizeY/2 - 40);
  pop();



  for (let i = 0; i < playerQTY; i++) {

    push();
    fill(191, 219, 174);
    strokeWeight(2);
    
    if(i == 0) {
      
      translate(boardSizeX, 0);
      

    } else if (i == 1) {

      translate(boardSizeX + boardSizeX - boardSizeX / 3, 0);
      
    } else if (i == 2)  {

      translate(boardSizeX + boardSizeX - boardSizeX / 3, boardSizeY / 13 * 9);
      
    } else if (i == 3)  {

      translate(boardSizeX, boardSizeY / 13 * 9);
      
    }
    rect(0, 0, boardSizeX / 3, boardSizeY / 13 * 4);
    
    
    textSize(15);
    fill(0);
    textAlign(CENTER, CENTER);
    text('Player ' + (player[i].playerNR + 1), boardSizeX / 6, 40);
    text('Money: ' + (player[i].currentCredit), boardSizeX / 6, 60);
    pop();

    

  }

  


  update();

  
  
}

//Kan blive kladt for at lave et nyt spil.

//Skift navn på funktion
function setUpBoard() {

  board = new Board();

  gameState = 1

  // reset/setup bank

  // reset/setup players

}

function update() {

  board.update();

  // opdatere alle spilleres informationer
  for (let i = 0; i < playerQTY; i++) {
    player[i].update();
  }

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

      if(buttonList[i].name == "rollDice") {

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
  //VI SKAL LIGE FINDE UD AF HVOR DET HER SKAL STÅ:
  
  diceRoll1 = player[playerTurn].diceRoll1;
  diceRoll2 = player[playerTurn].diceRoll2;
  if(diceRoll1 != diceRoll2){
      if(playerTurn < playerQTY - 1){
        playerTurn += 1;
      }
      else{
        playerTurn = 0;
      }
    }
}
