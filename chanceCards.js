class ChanceCard{
    constructor(){
        this.ChanceRoll = 0;
    }

    // List of cards in this game (UK version):
    // https://www.monopolyland.com/list-monopoly-chance-community-chest-cards/

    drawChanceCard(player, board){

        // this.chanceRoll = floor(random(0,15));
        this.chanceRoll = 4;

        if(this.chanceRoll == 0){
            print("Advance to Go");
            player.positionID = 0;
        }

        else if(this.chanceRoll == 1){
            print("Advance to Trafalgar Square. If you pass Go, collect 200");

            if(player.positionID < 24){
                player.currentCredit += 200;
            }

            player.positionID = 24;
        }

        else if(this.chanceRoll == 2){
            print("Advance to Mayfair");
            player.positionID = 39;
        }

        else if(this.chanceRoll == 3){
            print("Advance to Pall Mall. If you pass Go, collect 200");
            if(player.positionID < 11){
                player.currentCredit += 200;
            }
            player.positionID = 11;
        }

        else if(this.chanceRoll == 4){
            print("Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled");
            
            for (let i = player.positionID; i < 40;) {

                if(i == 39){
                    i = 0;
                }

                if(board.spaceList[i].Rent1RailRoad == 25){
                    player.positionID = i;
                }
                else{
                    i++;
                }
                
            }


            // Ikke færdig
        }

        else if(this.chanceRoll == 5){
            print("Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown");
            
            // Ikke færdig
        }

        else if(this.chanceRoll == 6){
            print("Bank pays you dividend of 50");
            
            player.currentCredit += 50;
        }

        else if(this.chanceRoll == 7){
            print("Get Out of Jail Free");

            // Implement get out of jail card function
        }
        
        else if(this.chanceRoll == 8){
            print("Go Back 3 Spaces");

            player.positionID -= 3;
        }

        else if(this.chanceRoll == 9){
            print("Go to Jail. Go directly to Jail, do not pass Go, do not collect 200");

            player.goToJail();
        }
        else if(this.chanceRoll == 10){
            print("Make general repairs on all your property. For each house pay 25. For each hotel pay 100");

            // do the money thing. Yasssss
        }

        else if(this.chanceRoll == 11){
            print("Speeding fine 15");
            
            player.currentCredit -= 15;
        }

        else if(this.chanceRoll == 12){
            print("Take a trip to Kings Cross Station. If you pass Go, collect 200");
            
            if(player.positionID < 5){
                player.currentCredit += 200;
            }
            player.positionID = 5;
        }

        else if(this.chanceRoll == 13){
            print("You have been elected Chairman of the Board. Pay each player £50");
            
            // Give players money, okay!??!?!?!?!
        }

        else if(this.chanceRoll == 14){
            print("Your building loan matures. Collect £150");
            
            player.currentCredit += 150;
        }

        print(this.chanceRoll);
    }

    drawCommunityCard(player){
        this.chanceRoll = floor(random(0,15));

        if(this.chanceRoll == 0){
            print("Advancce to Go");
            player.positionID = 0;
        }

        else if(this.ChanceRoll == 1){
            print("Bank error in your favour. Collect 200");

            player.currentCredit += 200;
        }

        else if(this.ChanceRoll == 2){
            print("Doctor’s fee. Pay 50");

            player.currentCredit -= 50;
        }

        else if(this.ChanceRoll == 3){
            print("From sale of stock you get 50");

            player.currentCredit += 50;
        }

        else if(this.chanceRoll == 4){
            print("Get Out of Jail Free");

            // Implement get out of jail card function
        }

        else if(this.chanceRoll == 5){
            print("Go to Jail. Go directly to Jail, do not pass Go, do not collect 200");

            player.goToJail();
        }

        else if(this.ChanceRoll == 6){
            print("Holiday fund matures. Receive 100");

            player.currentCredit += 100;
        }

        else if(this.ChanceRoll == 7){
            print("Income tax refund. Collect 20");

            player.currentCredit += 20;
        }
        
        else if(this.ChanceRoll == 8){
            print("It is your birthday. Collect 10 from every player");

            // Give me your money!
        }

        else if(this.ChanceRoll == 9){
            print("Life insurance matures. Collect 100");

            player.currentCredit += 100;
        }

        else if(this.ChanceRoll == 10){
            print("Pay hospital fees of 100");

            player.currentCredit -= 100;
        }

        else if(this.ChanceRoll == 11){
            print("Pay school fees of 50");

            player.currentCredit -= 50;
        }

        else if(this.ChanceRoll == 12){
            print("Receive 25 consultancy fee");

            player.currentCredit += 25;
        }

        else if(this.ChanceRoll == 13){
            print("You are assessed for street repairs. 40 per house. 115 per hotel");

            // PAY YOU FOOL!
        }

        else if(this.ChanceRoll == 14){
            print("You have won second prize in a beauty contest. Collect 10");

            player.currentCredit += 10;
        }

        else if(this.ChanceRoll == 15){
            print("You inherit 100");

            player.currentCredit += 100;
        }
        
    }
}

