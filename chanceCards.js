class ChanceCard{
    constructor(){
        this.ChanceRoll = 0;
    }

    // List of cards in this game (UK version):
    // https://www.monopolyland.com/list-monopoly-chance-community-chest-cards/

    drawChanceCard(currentPlayer, board){

        this.chanceRoll = floor(random(0,15));
        // this.chanceRoll = 13;

        if(this.chanceRoll == 0){
            print("Advance to Go");
            currentPlayer.positionID = 0;
            board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
        }

        else if(this.chanceRoll == 1){
            print("Advance to Trafalgar Square. If you pass Go, collect 200");

            if(currentPlayer.positionID < 24){
                currentPlayer.currentCredit += 200;
            }

            currentPlayer.positionID = 24;
            board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
        }

        else if(this.chanceRoll == 2){
            print("Advance to Mayfair");
            currentPlayer.positionID = 39;
            board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
        }

        else if(this.chanceRoll == 3){
            print("Advance to Pall Mall. If you pass Go, collect 200");
            if(currentPlayer.positionID < 11){
                currentPlayer.currentCredit += 200;
            }
            currentPlayer.positionID = 11;
            board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
        }

        else if(this.chanceRoll == 4){
            print("Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled");
            
            // This for loop works by making i the same value as currentPlayer position, and then go throught each space one by one
            // - to find a space which has RailroadSpace as it's constructor, and then have the currentPlayer move their.
            for (let i = currentPlayer.positionID; i < 40; i++) {

                if(i == 39){
                    i = 0;
                }

                if(board.spaceList[i].constructor == RailroadSpace){
                    currentPlayer.positionID = i;
                    // Whenever a currentPlayer moves to a new space, they need to activate the space function
                    board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
                    break;
                }
                
            }

            // Missing paying double (Need owner module)
        }

        else if(this.chanceRoll == 5){
            print("Advance token to nearest Tax Space. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown");
            
            for (let i = currentPlayer.positionID; i < 40; i++) {

                if(i == 39){ 
                    i = 0;
                }

                if(board.spaceList[i].constructor == TaxSpace){
                    currentPlayer.positionID = i;
                    board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
                    break;
                }
                
            }

            // This should be a utility space, if possiple
        }

        else if(this.chanceRoll == 6){
            print("Bank pays you dividend of 50");
            
            currentPlayer.currentCredit += 50;
        }

        else if(this.chanceRoll == 7){
            print("Get Out of Jail Free");

            // Implement get out of jail card function
        }
        
        else if(this.chanceRoll == 8){
            print("Go Back 3 Spaces");

            currentPlayer.positionID -= 3;
            board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
        }

        else if(this.chanceRoll == 9){
            print("Go to Jail. Go directly to Jail, do not pass Go, do not collect 200");

            currentPlayer.goToJail();
        }
        else if(this.chanceRoll == 10){
            print("Make general repairs on all your property. For each house pay 25. For each hotel pay 100");

            // do the money thing. Yasssss (Needs housing)
        }

        else if(this.chanceRoll == 11){
            print("Speeding fine 15");
            
            currentPlayer.currentCredit -= 15;
        }

        else if(this.chanceRoll == 12){
            print("Take a trip to Kings Cross Station. If you pass Go, collect 200");
            
            if(currentPlayer.positionID < 5){
                currentPlayer.currentCredit += 200;
            }
            currentPlayer.positionID = 5;
            board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
        }

        else if(this.chanceRoll == 13){
            print("You have been elected Chairman of the Board. Pay each Player 50");

            for (let i = 0; i < playerQTY; i++) {
                player[i].currentCredit += 50;
            }

            currentPlayer.currentCredit -= 50*playerQTY;
        }

        else if(this.chanceRoll == 14){
            print("Your building loan matures. Collect £150");
            
            currentPlayer.currentCredit += 150;
        }

        print(this.chanceRoll);
    }

    drawCommunityCard(currentPlayer, board){
        this.chanceRoll = floor(random(0,15));
        // this.chanceRoll = 8;

        if(this.chanceRoll == 0){
            print("Advancce to Go");
            currentPlayer.positionID = 0;
            board.spaceList[currentPlayer.positionID].landedOn(currentPlayer);
        }

        else if(this.chanceRoll == 1){
            print("Bank error in your favour. Collect 200");

            currentPlayer.currentCredit += 200;
        }

        else if(this.chanceRoll == 2){
            print("Doctor’s fee. Pay 50");

            currentPlayer.currentCredit -= 50;
        }

        else if(this.chanceRoll == 3){
            print("From sale of stock you get 50");

            currentPlayer.currentCredit += 50;
        }

        else if(this.chanceRoll == 4){
            print("Get Out of Jail Free");

            // Implement get out of jail card function
        }

        else if(this.chanceRoll == 5){
            print("Go to Jail. Go directly to Jail, do not pass Go, do not collect 200");

            currentPlayer.goToJail();
        }

        else if(this.chanceRoll == 6){
            print("Holiday fund matures. Receive 100");

            currentPlayer.currentCredit += 100;
        }

        else if(this.chanceRoll == 7){
            print("Income tax refund. Collect 20");

            currentPlayer.currentCredit += 20;
        }
        
        else if(this.chanceRoll == 8){
            print("It is your birthday. Collect 10 from every Player");
            for (let i = 0; i < playerQTY; i++) {
                player[i].currentCredit -= 10;
            }

            currentPlayer.currentCredit += 10 * playerQTY;

            

            // Give me your money!
        }

        else if(this.chanceRoll == 9){
            print("Life insurance matures. Collect 100");

            currentPlayer.currentCredit += 100;
        }

        else if(this.chanceRoll == 10){
            print("Pay hospital fees of 100");

            currentPlayer.currentCredit -= 100;
        }

        else if(this.chanceRoll == 11){
            print("Pay school fees of 50");

            currentPlayer.currentCredit -= 50;
        }

        else if(this.chanceRoll == 12){
            print("Receive 25 consultancy fee");

            currentPlayer.currentCredit += 25;
        }

        else if(this.chanceRoll == 13){
            print("You are assessed for street repairs. 40 per house. 115 per hotel");

            // PAY YOU FOOL! (need housing)
        }

        else if(this.chanceRoll == 14){
            print("You have won second prize in a beauty contest. Collect 10");

            currentPlayer.currentCredit += 10;
        }

        else if(this.chanceRoll == 15){
            print("You inherit 100");

            currentPlayer.currentCredit += 100;
        }
        
    }
}

