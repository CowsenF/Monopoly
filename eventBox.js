class EventBox {

    constructor() {

        this.title = "";
        this.textBoxOne = "";
        this.textBoxTwo = "";
        this.textButtonOne = "";
        this.textButtonTwo = "";
        // 0 = none, 1 = buyingColoredStreet
        this.eventType = 0;

        this.saveInfo1;
        this.saveInfo2;

    }

    update() {

        this.draw();

    }

    draw() {

        push();
        
        translate(boardSizeX + boardSizeX / 3, 0);
        fill(191, 219, 174);
        strokeWeight(2);
        rect(0, 0, (boardSizeX / 3) * 2, boardSizeY);

        textAlign(CENTER, CENTER);
        fill(0);
        textSize(30);
        text(this.title, boardSizeX / 3, 40);
        textSize(20);
        text(this.textBoxOne, boardSizeX / 3, 80);

        rectMode(CENTER);
        fill(255);
        rect(boardSizeX / 3 - 60 - boardSizeX / 12, boardSizeY / 2, 120, 60);
        fill(0);
        text(this.textButtonOne, boardSizeX / 6, boardSizeY / 2);

        fill(255);
        rect(boardSizeX / 3 * 2 - 60 - boardSizeX / 12, boardSizeY / 2, 120, 60);
        fill(0);
        text(this.textButtonTwo, boardSizeX / 6 + boardSizeX / 3, boardSizeY / 2);


        pop();

    }

    buyingColoredStreet(coloredStreet, player, price) {

        this.title = `${"Will you buy " }${coloredStreet.nameOfStreet}${"?"}`;
        this.textBoxOne = `${"You can buy this street for "}${price}${"$"}`;
        this.textButtonOne = "Yes";
        this.textButtonTwo = "No";
        boardState = 1;
        this.eventType = 1;

        this.saveInfo1 = coloredStreet;
        this.saveInfo2 = player;

    }

    inJail(player) {



    }

    youNeedTosell(player) {



    }


    clear() {

        this.title = "";
        this.textBoxOne = "";
        this.textBoxTwo = "";
        this.textButtonOne = "";
        this.textButtonTwo = "";

        boardState = 0;
        this.eventType = 0;

    }

    // End turn
    endTurnPressed(){
        if(mouseX > boardSizeX + boardSizeX/3 + boardSizeX / 2 - 55 - boardSizeX / 6 && mouseX < boardSizeX + boardSizeX / 3 + boardSizeX / 2 - 55 - boardSizeX / 6 + 120 && mouseY > boardSizeY/2 + 85 && mouseY < boardSizeY/2 + 85 + 60){
            print("Du ramte!");
            player.endTurn();
        }
    }

    buttonPressed() {
        
        //button 1
        if(mouseX > boardSizeX + boardSizeX / 3 + boardSizeX / 3 - 60 - boardSizeX / 6 && mouseX < boardSizeX + boardSizeX / 3 + boardSizeX / 3 + 60 - boardSizeX / 6 && mouseY > boardSizeY / 2 - 30 && mouseY < boardSizeY / 2 + 30) {

            if(this.eventType = 1 && this.saveInfo2.currentCredit >= this.saveInfo1.getData("price")) {

                this.saveInfo1.buyStreet(this.saveInfo2);
                this.saveInfo2.checkHoldings(this.saveInfo1.colorGroup);

            }
            this.clear()

        }
        //button 2
        if(mouseX > boardSizeX + boardSizeX / 3 + boardSizeX / 3 * 2 - 60 - boardSizeX / 6 && mouseX < boardSizeX + boardSizeX / 3 + boardSizeX / 3 * 2 + 60 - boardSizeX / 6 && mouseY > boardSizeY / 2 - 30 && mouseY < boardSizeY / 2 + 30) {

            
            this.clear()
        }
    }
}