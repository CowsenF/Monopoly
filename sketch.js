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
  
  

  // indsæet spillere i player[] udfra playerQTY der bestemmer antallet af spillere.
  // denne funktion køre kun en gang på grund af playersSet
  if(playersSet == false){
    for (let i = 0; i < playerQTY; i++) {
      player.push(new Player(i));
    }
    playersSet = true;
  }

  buttonList.push(new Button(boardSizeX/2, boardSizeY/2, 60, 30, player, "rollDice"));

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
  fill(191, 219, 174);
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
  // when mouse is clicked, check if any button from the button class fufill the condition to activate
  for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].checkForPress();
   }
  //VI SKAL LIGE FINDE UD AF HVOR DET HER SKAL STÅ:
  // jeg smed det ind i rollDice() i player.js :)
  
  if(gameState == 0){
    if(mouseX > width/2 - 100 && mouseX < width/2 + 100 && mouseY > 250 && mouseY < 290){
        playerQTY = 2;
        setUpBoard();
        print('2 spillere');
    }
    else if(mouseX > width/2 - 100 && mouseX < width/2 + 100 && mouseY > 305 && mouseY < 345){
      playerQTY = 3;
      setUpBoard();
      print('2 spillere');
    }
    else if(mouseX > width/2 - 100 && mouseX < width/2 + 100 && mouseY > 360 && mouseY < 400){
    playerQTY = 4;
    setUpBoard();
    print('2 spillere');
    }
  }
}
