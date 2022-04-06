let board;
let player = [];
//gameState 0 er til at finde ud af hvor mange spilere der er
//gameState 1 er til at spille spillet
//gameState 2 er til at vise hvem der har vundet og sprøge om der skal spilles et nyt spil
let gameState = 0;
//boardState 0 betyder at der er ikke nogle menuer open.
//boardState 1 betyder at der er en bestem menu open.
let boardState = 0;

let eventBox;
let bank;
let buttonList = [];
let chanceDeck;
let communityDeck;


let boardSizeX = 800;
let boardSizeY = 800;

// antal spillere
let playerQTY = 4;
let playersSet = false;
let playerTurn = 0;

let diceRoll1 = 0;
let diceRoll2 = 0;
let diceHasBeenRolled = false;

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
  
  bank = new Bank();

  // indsæet spillere i player[] udfra playerQTY der bestemmer antallet af spillere.
  // denne funktion køre kun en gang på grund af playersSet
  if(playersSet == false){
    for (let i = 0; i < playerQTY; i++) {
      player.push(new Player(i));
    }
    playersSet = true;
  }
  
  eventBox = new EventBox();


  chanceDeck = new ChanceCard();

}

function draw() {

  background(191, 219, 174);  

  if(gameState == 0){
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(30);
    text("Choose number of players", width/2, 200);
    fill(255);
    textSize(20);
    rect(width/2 -100, 250, 200, 40);
    rect(width/2 -100, 305, 200, 40);
    rect(width/2 -100, 360, 200, 40);

    fill(0);
    text("2 players", width/2, 270);
    text("3 players", width/2, 325);
    text("4 players", width/2, 380);
    pop();
  }
  

  // dice box and roll text
  if(gameState == 1){
  push();
  if(diceHasBeenRolled == false){
    fill(191, 219, 174);
  }
  else if(boardState == 1 || diceHasBeenRolled == true){
    fill(120);
  }
  
  rect(boardSizeX/2 - 60, boardSizeY/2 - 30, 120, 60);
  textSize(15);
  fill(0);
  textAlign(CENTER, CENTER);

  text('Click to roll dices', boardSizeX/2, boardSizeY/2 - 40);


  // Show whose turn it is
  if(playerTurn == 0){
    fill(255,0,0);
    stroke(255);
  }
  else if(playerTurn ==1 ){
    fill(0, 255, 0);
    stroke(0);
  }

  else if(playerTurn == 2){
    fill(0, 0, 255);
    stroke(255);
  }

  else if(playerTurn == 3){
    fill(255, 255, 0);
    stroke(0);
  }
  strokeWeight(3);

  textSize(25);
  text('player ' + (playerTurn+1) + ' turn', boardSizeX/2, boardSizeY/2 + 75);
  pop();

    for (let i = 0; i < playerQTY; i++) {

      push();
      fill(191, 219, 174);
      strokeWeight(2);
      
            
      translate(boardSizeX, 0 + i * boardSizeY / 4);

      rect(0, 0, boardSizeX / 3, boardSizeY / 4)
      
      textSize(15);
      fill(0);
      textAlign(CENTER, CENTER);
      text('Player ' + (player[i].playerNR + 1), boardSizeX / 6, 40);
      text('Money: ' + (player[i].currentCredit), boardSizeX / 6, 60);
      pop();

      
      // the drawn images depends of the rolls of each dice, and is shown on the board to view player roll
      imageMode(CENTER);
      // First dice
      
      if(diceRoll1 == 1){
          image(dice1, boardSizeX/2 - 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll1 == 2){
          image(dice2, boardSizeX/2 - 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll1 == 3){
          image(dice3, boardSizeX/2 - 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll1 == 4){
          image(dice4, boardSizeX/2 - 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll1 == 5){
          image(dice5, boardSizeX/2 - 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll1 == 6){
          image(dice6, boardSizeX/2 - 30, boardSizeY/2, 50, 50);
      }
      // Second dice
      if(diceRoll2 == 1){
          image(dice1, boardSizeX/2 + 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll2 == 2){
          image(dice2, boardSizeX/2 + 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll2 == 3){
          image(dice3, boardSizeX/2 + 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll2 == 4){
          image(dice4, boardSizeX/2 + 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll2 == 5){
          image(dice5, boardSizeX/2 + 30, boardSizeY/2, 50, 50);
      }
      else if(diceRoll2 == 6){
          image(dice6, boardSizeX/2 + 30, boardSizeY/2, 50, 50);
      }

      eventBox.update();


      

    }

  update();
  // console.log(board.spaceList[5]);
  
  }
}

//Kan blive kladt for at lave et nyt spil.

//Skift navn på funktion
function setUpBoard() {

  board = new Board();

  gameState = 1;

  // reset/setup bank

  // reset/setup players

}

function update() {

  board.update();

  // opdatere alle spilleres informationer
  for (let i = 0; i < playerQTY; i++) {
    player[i].update();
  }
  

  // update player

  // update UI

}

function mousePressed(){
  // when mouse is clicked, check if any button from the button class fufill the condition to activate
  
  if(gameState == 0){
    if(mouseX > width/2 - 100 && mouseX < width/2 + 100 && mouseY > 250 && mouseY < 290){
      playerQTY = 2;
      setUpBoard();
    }
    else if(mouseX > width/2 - 100 && mouseX < width/2 + 100 && mouseY > 305 && mouseY < 345){
      playerQTY = 3;
      setUpBoard();
    }
    else if(mouseX > width/2 - 100 && mouseX < width/2 + 100 && mouseY > 360 && mouseY < 400){
      playerQTY = 4;
      setUpBoard();
    }
  } else if(gameState == 1 && boardState == 0) {

    if(mouseX > boardSizeX/2 - 60 && mouseX < boardSizeX + 60 && mouseY > boardSizeY/2 - 30 && mouseY < boardSizeY/2 + 30 && mouseX < boardSizeX /2 + 60) {

      if(diceHasBeenRolled == false){
        for (let i = 0; i < player.length; i++) {
          if(playerTurn == i) {
  
            player[i].rollDice();
            break;
  
          }
          
        }
      }

    }
    if(mouseX > boardSizeX/2 - 60 && mouseX < boardSizeX/2 + 60 && mouseY > boardSizeY / 2 + 200 - 30 && mouseY < boardSizeY / 2 + 200 + 30){
      if(diceHasBeenRolled == true){
        player[playerTurn].endTurn();
      }
    }
    
    
  } 
  if(gameState == 1 && boardState == 1) {

    
    eventBox.buttonPressed();
  } 
  if(gameState == 1 && boardState == 0) {

    //Køb / sælg huse
    for (let i = 0; i < board.spaceList.length; i++) {
      
      if(board.spaceList[i].constructor == ColoredStreetsSpace) {

        
        

        board.spaceList[i].buttonPressed();


      }   
    }

  }

}
