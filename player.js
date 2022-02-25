class Player{
    constructor(){
        // positionID beskriver hvilket felt spilleren er/lander på. Ved at
        // hente feltets information kan spilleren placeres på feltets placering.
        // spillerens første placering er altid GO
        this.positionID = 7;
        // currentCredit beskriver hvor mange penge spilleren har
        this.currentCredit = 15000;
        // playerStage beskriver spillerens stadie (fri, fængsel, død)
        this.playerState = 0;
        this.diceRoll1 = 0;
        this.diceRoll2 = 0;
        this.playerRoll = 0;

    }

    
// function for dice roll
    rollDice(){
        // two dices that randomly roles 1,2,3,4,5 or 6.
        this.diceRoll1 = floor(random(1,7));
        this.diceRoll2 = floor(random(1,7));

        // player total roll made of dice 1 and dice 2
        this.playerRoll = this.diceRoll1 + this.diceRoll2;
        // position id changes according to total roll
        this.positionID += this.playerRoll;

        // if player roll results in player moving beyond last tile, reset position to tile 1 (id 0)
        // and add remaining dice roll
        if(this.positionID > 39){
            this.positionID -= 40;

        }
        
    }

    draw(){

        // The drawn ellipse represents the player position on the map
        fill(255);
        ellipse(board.spaceList[this.positionID].x, board.spaceList[this.positionID].y, 25);

        // the drawn images depends of the rolls of each dice, and is shown on the board to view roll
        imageMode(CENTER);
        // First die

        // ændring
        if(this.diceRoll1 == 1){
            image(dice1, width/2 - 30, height/2, 50, 50);
        }
        else if(this.diceRoll1 == 2){
            image(dice2, width/2 - 30, height/2, 50, 50);
        }
        else if(this.diceRoll1 == 3){
            image(dice3, width/2 - 30, height/2, 50, 50);
        }
        else if(this.diceRoll1 == 4){
            image(dice4, width/2 - 30, height/2, 50, 50);
        }
        else if(this.diceRoll1 == 5){
            image(dice5, width/2 - 30, height/2, 50, 50);
        }
        else if(this.diceRoll1 == 6){
            image(dice6, width/2 - 30, height/2, 50, 50);
        }
        // Second die
        if(this.diceRoll2 == 1){
            image(dice1, width/2 + 30, height/2, 50, 50);
        }
        else if(this.diceRoll2 == 2){
            image(dice2, width/2 + 30, height/2, 50, 50);
        }
        else if(this.diceRoll2 == 3){
            image(dice3, width/2 + 30, height/2, 50, 50);
        }
        else if(this.diceRoll2 == 4){
            image(dice4, width/2 + 30, height/2, 50, 50);
        }
        else if(this.diceRoll2 == 5){
            image(dice5, width/2 + 30, height/2, 50, 50);
        }
        else if(this.diceRoll2 == 6){
            image(dice6, width/2 + 30, height/2, 50, 50);
        }
    }

    update(){
        this.draw();
        
    }
}