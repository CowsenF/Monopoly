let board;
let players;
//gameState 0 er til at finde ud af hvor mange spilere der er
//gameState 1 er til at spille spillet
//gameState 2 er til at vise hvem der har vundet og sprøge om der skal spilles et nyt spil
let gameState = 0;

function setup() {

  createCanvas(800, 800);
  
  setUpBoard();

}

function draw() {

  background(191, 219, 174);

  update();

  

}

//Kan blive kladt for at lave et nyt spil.
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