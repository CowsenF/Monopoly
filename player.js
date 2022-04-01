class Player{
    constructor(playerNR){
        // positionID beskriver hvilket felt spilleren er/lander på. Ved at
        // hente feltets information kan spilleren placeres på feltets placering.
        // spillerens første placering er altid GO
        this.positionID = 0;
        // currentCredit beskriver hvor mange penge spilleren har
        this.currentCredit = 2000;
        // playerStage beskriver spillerens stadie (fri, fængsel, død)
        this.playerState = 0;
        this.diceRoll1 = 0;
        this.diceRoll2 = 0;
        this.playerRoll = 0;
        this.playerNR = playerNR;
        // How many turns the player has spent in jail
        this.jailTurn = 0;
        // The amount of turns in a row the player has made double rolls.
        // THep layer goes to jail if hitting 3 rolls in a row.
        this.doubleRoll = 0;

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
        // this.playerRoll = 2;
        // position id changes according to total roll

        // If playerState is zero (meaning free) the player may move
    if(this.playerState == 0){
        
        this.positionID += this.playerRoll;
        // let oldPositionID = this.positionID - this.playerRoll;

        // if player roll results in player moving beyond last space, reset position to space 1 (id 0)
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
            
        }
         // If playerState is 1, player is in jail
        if(this.playerState == 1){
            this.jailTurn += 1;
            
            // If dices are the same, the player is let go earlier
            if(this.diceRoll1 == this.diceRoll2){
                this.jailTurn = 3;
            }

            if(this.jailTurn == 3){
                this.playerState = 0;
            }
        }

        // diceRoll 1 og 2 bruges til at tegne den rigtige terning ud fra spillerens diceRoll
        diceRoll1 = player[playerTurn].diceRoll1;
        diceRoll2 = player[playerTurn].diceRoll2;

        if(diceRoll1 != diceRoll2){
            this.endTurn();
        }
        else{
            if(this.doubleRoll == 3){
                this.goToJail();
                this.doubleRoll = 0;
            }
            this.doubleRoll += 1;
        }
        

        board.spaceList[this.positionID].landedOn(this);
        //this.movePlayer(this.playerRoll, this.positionID, true, true)
    }

    // movePlayer(newToOldPositionDifference, newPositionID, shallPass, shallLand){
        
    //     if(newPositionID > 39){

    //         for(let i = newPositionID - newToOldPositionDifference + 1; i < 39; i++) {

    //             board.spaceList[i].passed(this);

    //         }
    //         this.positionID -= 40;
    //         for(let i = 0; i < newPositionID; i++) {

    //             board.spaceList[i].passed(this);

    //         }

            

    //     } else {
    //         // we don't want the place were player stared and ended.
    //         for(let i = newPositionID - newToOldPositionDifference + 1; i < this.positionID; i++) 
    //         {
    //             board.spaceList[i].passed(this);
    //         }

    //     }
    

    //     board.spaceList[newPositionID].landedOn(this);
    // }

    goToJail(){
        this.positionID = 10;
        this.playerState = 1;
        this.jailTurn = 0;
        this.endTurn();
    }

    drawDice(){
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
    }

    endTurn(){
        if(playerTurn < playerQTY - 1){
            playerTurn += 1;
        }  
        else{
        playerTurn = 0;
        }
    }

    draw(){

        // The drawn ellipse represents the player position on the map
        push();
        fill(this.color);
        ellipse(board.spaceList[this.positionID].x, board.spaceList[this.positionID].y, 25);
        pop();
    }

    update(){
        this.draw();
        this.drawDice();
    }
}