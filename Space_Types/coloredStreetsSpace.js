class ColoredStreetsSpace extends Space {

    //position, visualPositionX, visualPositionY, type, ColoredStreet class
    constructor(position, visualPositionX, visualPositionY, type, ColoredStreet) {

        super(position, visualPositionX, visualPositionY, type);

        this.ColoredStreet = ColoredStreet;        

        this.name = this.ColoredStreet.getData("nameOfStreet");
        this.colorGroup = this.ColoredStreet.getData("colorGroup");
        this.price = this.ColoredStreet.getData("price");

        this.buildings = 0;

        this.color;
        this.setColor();

    }

    setColor() {

        switch (this.colorGroup) {
            case "brown":
                this.color = color(55, 27, 7);
                break;
            case "skyBlue":
                this.color = color(53, 81, 92);
                break;
            case "darkOrchid":
                this.color = color(60, 20, 80);
                break;
            case "orange":
                this.color = color(255, 165, 0);
                break;
            case "red":
                this.color = color(255, 0, 0);
                break;
            case "yellow":
                this.color = color(255, 255, 0);
                break;
            case "green":
                this.color = color(0, 255, 0);
                break;
            case "blue":
                this.color = color(0, 0, 255);
                break;
            default:
                print(data + " is not a case");
                break;
        }

    }

    landedOn(player) {

        if(this.ColoredStreet.owner.name == bank.name) {
            eventBox.buyingColoredStreet(this.ColoredStreet, player, this.price);

        } else if(this.ColoredStreet.owner.name != bank.name) {

            for (let i = 0; i < 8; i++) {

                if(i != this.ColoredStreet.colorGroupNumber) {
                    continue;
                }
                
                if(this.ColoredStreet.owner.streetGroupOwn[i] == true) {
                    if(this.buildings > 0) {

                        
                        console.log("you paid : " + this.ColoredStreet.numbersList[3 + this.buildings]);
                        this.ColoredStreet.owner.currentCredit += this.ColoredStreet.numbersList[3 + this.buildings];
                        player.currentCredit -= this.ColoredStreet.numbersList[3 + this.buildings];
                        break

                    }
                    console.log("you paid : " + this.ColoredStreet.getData("rent") * 2);
                    this.ColoredStreet.owner.currentCredit += this.ColoredStreet.getData("rent") * 2;
                    player.currentCredit -= this.ColoredStreet.getData("rent") * 2;
                    break

                } else {

                    console.log("rent is: " + this.ColoredStreet.getData("rent"));
                    this.ColoredStreet.owner.currentCredit += this.ColoredStreet.getData("rent");
                    player.currentCredit -= this.ColoredStreet.getData("rent");

                }
                
            }

        }

    }

    draw() {

        if(this.type == "horizontal") {

            push();
            rectMode(CENTER);
            
            translate(this.x, this.y);
            this.color.setAlpha(255);
            fill(this.color);
            strokeWeight(2);
            rect(0, -25, (boardSizeX / 13) * 2, 10);
            this.color.setAlpha(50);
            fill(this.color);
            rect(0, 0, (boardSizeX / 13) * 2, (boardSizeY / 13) * 1);

            fill(0);
            textAlign(CENTER);
            textSize(14);
            text(this.name, 0 , 0);
            

            if(this.ColoredStreet.owner.name != bank.name) {
                for (let i = 0; i < 8; i++) {

                    if(i != this.ColoredStreet.colorGroupNumber) {
                        continue;
                    }
                    
                    if(this.ColoredStreet.owner.streetGroupOwn[i] == true) {

                        this.ColoredStreet.ownerColor.setAlpha(50);
                        fill(this.ColoredStreet.ownerColor);
                        rect(0, 0, (boardSizeX / 13) * 2, (boardSizeY / 13) * 1);

                        rectMode(CENTER);
                        fill(255);
                        rect((boardSizeX / 13) - 10, (boardSizeY / 13) / 2 - 10, 20, 20);
                        fill(0,255,0);
                        textSize(20);
                        text("+", (boardSizeX / 13) - 10, (boardSizeY / 13) / 2 - 10 + 8);

                        fill(255);
                        rect((boardSizeX / 13) - 30, (boardSizeY / 13) / 2 - 10, 20, 20);
                        fill(255,0,0);
                        textSize(20);
                        text("-", (boardSizeX / 13) - 30, (boardSizeY / 13) / 2 - 10 + 8);

                        if(this.buildings == 0) {

                            fill(0);
                            textSize(14);
                            text("$" + (this.ColoredStreet.getData("rent") * 2), 0 , 20);

                        } else {

                            fill(0);
                            textSize(14);
                            text("$" + this.ColoredStreet.numbersList[3 + this.buildings], 0 , 20);

                        }

                        

                    } else {

                        fill(0);
                        textSize(14);
                        text("$" + this.ColoredStreet.getData("rent"), 0 , 20);

                    }
                    
                } 
                fill(0);
                rect(0, -25, (boardSizeX / 13) * 2, 10);
                this.ColoredStreet.ownerColor.setAlpha(255);
                fill(this.ColoredStreet.ownerColor);
                textSize(12);
                text(this.ColoredStreet.owner.name, 0 , -21);
                
                
            } else {
                fill(0);
                textSize(14);
                text("$" + this.price, 0 , 20);
                    
            }

            pop();

        } else if(this.type == "vertical") {

            push();
            translate(this.x, this.y);
            this.color.setAlpha(255);
            fill(this.color);
            strokeWeight(2);
            rect(0 - (boardSizeX / 26), 0 - (boardSizeY / 13), (boardSizeX / 13) * 1, 10);
            this.color.setAlpha(50);
            fill(this.color);
            rect(0 - (boardSizeX / 26), 0 - (boardSizeY / 13), (boardSizeX / 13) * 1, (boardSizeY / 13) * 2);

            fill(0);
            textAlign(CENTER);
            textSize(14);

            let curretTextSize = 16;
            let splitString = split(this.name, ' ');

            for (let i = 0; i < splitString.length; i++) {
                let curretTextSize = 16;
                while(textWidth(splitString[i]) > (boardSizeX / 13)) {

                    --curretTextSize;
                    textSize(curretTextSize);

                }
                text(splitString[i], 0 , -30 + i * 20);
                
            }

            

            if(this.ColoredStreet.owner.name != bank.name) {
                
                for (let i = 0; i < 8; i++) {

                    if(i != this.ColoredStreet.colorGroupNumber) {
                        continue;
                    }
                    
                    if(this.ColoredStreet.owner.streetGroupOwn[i] == true) {
                        this.ColoredStreet.ownerColor.setAlpha(50);
                        fill(this.ColoredStreet.ownerColor);
                        rect(0 - (boardSizeX / 26), 0 - (boardSizeY / 13), (boardSizeX / 13) * 1, (boardSizeY / 13) * 2);

                        rectMode(CENTER);
                        fill(255);
                        rect((boardSizeX / 13) / 2 - 10, (boardSizeY / 13) - 10, 20, 20);
                        fill(0,255,0);
                        textSize(20);
                        text("+", (boardSizeX / 13) / 2 - 10, (boardSizeY / 13) - 10 + 8);

                        fill(255);
                        rect((boardSizeX / 13) / 2 - 30, (boardSizeY / 13) - 10, 20, 20);
                        fill(255,0,0);
                        textSize(20);
                        text("-", (boardSizeX / 13) / 2 - 30, (boardSizeY / 13) - 10 + 8);

                        if(this.buildings == 0) {

                            fill(0);
                            textSize(14);
                            text("$" + (this.ColoredStreet.getData("rent") * 2), 0 , 39);

                        } else {

                            fill(0);
                            textSize(14);
                            text("$" + this.ColoredStreet.numbersList[3 + this.buildings], 0 , 39);

                        }

                    } else {

                        fill(0);
                        textSize(14);
                        text("$" + this.ColoredStreet.getData("rent"), 0 , 39);
    
                    }
                    
                }
                rectMode(CORNER);
                fill(0);
                rect(0 - (boardSizeX / 26), 0 - (boardSizeY / 13), (boardSizeX / 13) * 1, 10);
                this.ColoredStreet.ownerColor.setAlpha(255);
                fill(this.ColoredStreet.ownerColor);
                textSize(12);
                text(this.ColoredStreet.owner.name, 0 , -boardSizeY / 13 + 9);
                

            } else {

                fill(0);
                textSize(14);
                text("$" + this.price, 0 , 39);
                    
            }

            pop();

        }
        
            
    }

    buttonPressed() {

        if(this.ColoredStreet.owner != player[playerTurn]) {

            return;

        }

        if(this.type == "horizontal") {

            if(mouseX > this.x + (boardSizeX / 13) - 20 && mouseX < this.x + (boardSizeX / 13) && mouseY > this.y + (boardSizeY / 13) / 2 - 20 && mouseY < this.y + (boardSizeY / 13) / 2) {
                
                this.buyHouse();
    
            }

            if(mouseX > this.x + (boardSizeX / 13) - 40 && mouseX < this.x + (boardSizeX / 13) - 20 && mouseY > this.y + (boardSizeY / 13) / 2 - 20 && mouseY < this.y + (boardSizeY / 13) / 2) {
                
                this.sellHouse();
    
            }

        }

        if(this.type == "vertical") {

            if(mouseX > this.x + (boardSizeX / 13) / 2 - 20 && mouseX < this.x + (boardSizeX / 13) / 2 && mouseY > this.y + (boardSizeY / 13) - 20 && mouseY < this.y + (boardSizeY / 13)) {
                
                this.buyHouse();
    
            }

        }

        

    }

    buyHouse() {

        if(player[playerTurn].currentCredit >= this.ColoredStreet.getData("pricePerHouse") && this.buildings < 4) {

            player[playerTurn].currentCredit -= this.ColoredStreet.getData("pricePerHouse");
            this.buildings++;

        }


    }

    sellHouse() {

        if(this.buildings > 0) {

            player[playerTurn].currentCredit += this.ColoredStreet.getData("pricePerHouse") / 2;
            this.buildings--;

        }

    }


}