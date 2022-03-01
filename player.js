class Player{
    constructor(playerNR){
        // positionID beskriver hvilket felt spilleren er/lander på. Ved at
        // hente feltets information kan spilleren placeres på feltets placering.
        // spillerens første placering er altid GO
        this.positionID = 0;
        // currentCredit beskriver hvor mange penge spilleren har
        this.currentCredit = 15000;
        // playerStage beskriver spillerens stadie (fri, fængsel, død)
        this.playerState = 0;
        this.diceRoll1 = 0;
        this.diceRoll2 = 0;
        this.playerRoll = 0;
        this.playerNR = playerNR;

        if(playerNR == 0){
            this.color = 'rgb(255,0,0)';
        }
        else if(playerNR == 1){
            this.color = 'rgb(0,255,0)';
        }

        else if (playerNR == 2){
            this.color = 'rgb(0,0,255)';
        }

        else if (playerNR == 3){
            this.color ='rgb(255,255,0)';
        }

        this.rollDice = this.rollDice.bind(this);

    }

    
// function for dice roll
    rollDice(){
        // two dices that randomly roles 1, 2, 3, 4, 5 or 6.
        this.diceRoll1 = floor(random(1,7));
        this.diceRoll2 = floor(random(1,7));

        // player total roll made of dice 1 and dice 2
        this.playerRoll = this.diceRoll1 + this.diceRoll2;
        // position id changes according to total roll
        this.positionID += this.playerRoll;

        // if player roll results in player moving beyond last tile, reset position to tile 1 (id 0)
        // and add remaining dice roll
        if(this.positionID > 39){

            for(let i = this.positionID - this.playerRoll + 1; i < 39; i++) {

                board.spaceList[i].passed(this);

            }
            this.positionID -= 40;
            for(let i = 0; i < this.positionID; i++) {

                board.spaceList[i].passed(this);

            }

            

        } else {
            // we don't want the place were player stared and ended.
            for(let i = this.positionID - this.playerRoll + 1; i < this.positionID; i++) 
            {
                board.spaceList[i].passed(this);
            }

        }


        board.spaceList[this.positionID].landedOn(this);

        
    }

    drawDice(){
        // the drawn images depends of the rolls of each dice, and is shown on the board to view player roll
        imageMode(CENTER);
        // First dice
        
            if(diceRoll1 == 1){
                image(dice1, width/2 - 30, height/2, 50, 50);
            }
            else if(diceRoll1 == 2){
                image(dice2, width/2 - 30, height/2, 50, 50);
            }
            else if(diceRoll1 == 3){
                image(dice3, width/2 - 30, height/2, 50, 50);
            }
            else if(diceRoll1 == 4){
                image(dice4, width/2 - 30, height/2, 50, 50);
            }
            else if(diceRoll1 == 5){
                image(dice5, width/2 - 30, height/2, 50, 50);
            }
            else if(diceRoll1 == 6){
                image(dice6, width/2 - 30, height/2, 50, 50);
            }
            // Second dice
            if(diceRoll2 == 1){
                image(dice1, width/2 + 30, height/2, 50, 50);
            }
            else if(diceRoll2 == 2){
                image(dice2, width/2 + 30, height/2, 50, 50);
            }
            else if(diceRoll2 == 3){
                image(dice3, width/2 + 30, height/2, 50, 50);
            }
            else if(diceRoll2 == 4){
                image(dice4, width/2 + 30, height/2, 50, 50);
            }
            else if(diceRoll2 == 5){
                image(dice5, width/2 + 30, height/2, 50, 50);
            }
            else if(diceRoll2 == 6){
                image(dice6, width/2 + 30, height/2, 50, 50);
            }
    }

    draw(){

        // The drawn ellipse represents the player position on the map
        fill(this.color);
        ellipse(board.spaceList[this.positionID].x, board.spaceList[this.positionID].y, 25);

        
    }

    update(){
        this.draw();
        this.drawDice();
    }
}