class Space {

    //position, visualPositionX, visualPositionY, type = corner/vandret/lodret
    constructor(position, visualPositionX, visualPositionY, type) {

        this.position = position;
        this.x = visualPositionX;
        this.y = visualPositionY;
        this.type = type;

    }

    landedOn() {



    }

    passed() {



    }


    update() {

        this.drawShape();
        this.draw();

    }

    drawShape() {

        if(this.type == "corner") {
            
            push();
            rectMode(CENTER);
            fill(191, 219, 174);
            strokeWeight(2);
            rect(this.x, this.y, (width / 13) * 2, (height / 13) * 2);
            pop();

        } else if(this.type == "horizontal") {

            push();
            rectMode(CENTER);
            fill(191, 219, 174);
            strokeWeight(2);
            rect(this.x, this.y, (width / 13) * 2, (height / 13) * 1);
            pop();

        } else if(this.type == "vertical") {

            push();
            rectMode(CENTER);
            fill(191, 219, 174);
            strokeWeight(2);
            rect(this.x, this.y, (width / 13) * 1, (height / 13) * 2);
            pop();

        }



    }

    draw() {

    }


}

class GoSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(/*player*/) {

        //add 200 $ to this player

    }

    draw() {

        push();
        textAlign(CENTER);
        translate(this.x, this.y - 15);
        fill(0);

        textSize(20);
        text("Collect $200", 0, 0);

        textSize(30);
        text("GO", 0, 0 + 40);
        pop();
        
            
    }

}

class RailroadSpace extends Space {

    //position, visualPositionX, visualPositionY, type, Railroad class
    constructor(position, visualPositionX, visualPositionY, type, railroad) {

        super(position, visualPositionX, visualPositionY, type);

        this.railroad = railroad;

        this.name = this.railroad.getData("nameOfRailroad");

    }

    landedOn(/*player*/) {

        //bah bah

    }

    draw() {

        if(this.type == "horizontal") {

            push();
            rectMode(CENTER);
            
            translate(this.x, this.y + 10);

            fill(0);
            textAlign(CENTER);
            textSize(12);
            text(this.name, 0 , -10);
            text("$200", 0 , 10);

            pop();

        } else if(this.type == "vertical") {

            push();
            textAlign(CENTER);
            translate(this.x, this.y);
            fill(0);

            textSize(20);

            let curretTextSize = 16;
            let splitString = split(this.name, ' ');

            for (let i = 0; i < splitString.length; i++) {
                let curretTextSize = 16;
                while(textWidth(splitString[i]) > (width / 13)) {

                    --curretTextSize;
                    textSize(curretTextSize);

                }
                text(splitString[i], 0 , -30 + i * 20);
                
            }
            textSize(14);
            text("$200", 0 , 50);

            pop();

        }
        
            
    }



}

class ColoredStreetsSpace extends Space {

    //position, visualPositionX, visualPositionY, type, ColoredStreet class
    constructor(position, visualPositionX, visualPositionY, type, ColoredStreet) {

        super(position, visualPositionX, visualPositionY, type);

        this.ColoredStreet = ColoredStreet;        

        this.name = this.ColoredStreet.getData("nameOfStreet");
        this.colorGroup = this.ColoredStreet.getData("colorGroup");
        this.price = this.ColoredStreet.getData("price");

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

    landedOn(/*player*/) {

        //bah bah

    }

    draw() {

        if(this.type == "horizontal") {

            push();
            rectMode(CENTER);
            
            translate(this.x, this.y);
            this.color.setAlpha(255);
            fill(this.color);
            strokeWeight(2);
            rect(0, -25, (width / 13) * 2, 10);
            this.color.setAlpha(50);
            fill(this.color);
            rect(0, 0, (width / 13) * 2, (height / 13) * 1);

            fill(0);
            textAlign(CENTER);
            textSize(14);
            text(this.name, 0 , 0);
            text("$" + this.price, 0 , 20);

            pop();

        } else if(this.type == "vertical") {

            push();
            translate(this.x, this.y);
            this.color.setAlpha(255);
            fill(this.color);
            strokeWeight(2);
            rect(0 - (width / 26), 0 - (height / 13), (width / 13) * 1, 10);
            this.color.setAlpha(50);
            fill(this.color);
            rect(0 - (width / 26), 0 - (height / 13), (width / 13) * 1, (height / 13) * 2);

            fill(0);
            textAlign(CENTER);
            textSize(14);

            let curretTextSize = 16;
            let splitString = split(this.name, ' ');

            for (let i = 0; i < splitString.length; i++) {
                let curretTextSize = 16;
                while(textWidth(splitString[i]) > (width / 13)) {

                    --curretTextSize;
                    textSize(curretTextSize);

                }
                text(splitString[i], 0 , -30 + i * 20);
                
            }

            textSize(14);
            //text(this.name, 0 , -30);
            text("$" + this.price, 0 , 50);

            pop();

        }
        
            
    }


}

class UtilitiesSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }


}

class ChanceSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(/*player*/) {

        //player pick a card

    }

    draw() {
        if(this.type == "horizontal") {

            push();
            textAlign(CENTER);
            translate(this.x, this.y);
            fill(0);

            textSize(20);
            text("Chance", 0 , -10);
            fill(255,20,147);
            textSize(40);
            text("?", 0 , 25);

            pop();

        } else if(this.type == "vertical") {

            push();
            textAlign(CENTER);
            translate(this.x, this.y + 5);
            fill(0);

            textSize(16);
            text("Chance", 0 , -10);
            fill(255,20,147);
            textSize(40);
            text("?", 0 , 25);

            pop();

        }
        
        
            
    }


}

class CommunityChestSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(/*player*/) {

        //player pick a card

    }

    draw() {
        if(this.type == "horizontal") {

            push();
            textAlign(CENTER);
            translate(this.x, this.y + 10);
            fill(0);

            textSize(20);
            text("Community", 0 , -10);
            text("Chest", 0 , 10);

            pop();

        } else if(this.type == "vertical") {

            push();
            textAlign(CENTER);
            translate(this.x, this.y + 5);
            fill(0);

            textSize(11);
            text("Community", 0 , -10);
            text("Chest", 0 , 10);

            pop();

        }
        
        
            
    }


}

class TaxSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(/*player*/) {

        //this player pay $200

    }

    draw() {
        if(this.type == "horizontal") {

            push();
            textAlign(CENTER);
            translate(this.x, this.y + 10);
            fill(0);

            textSize(20);
            text("Income TAX", 0 , -10);
            text("Pay $200", 0 , 10);

            pop();

        } else if(this.type == "vertical") {

            push();
            textAlign(CENTER);
            translate(this.x, this.y + 5);
            fill(0);

            textSize(16);
            text("Income", 0 , -30);
            text("TAX", 0 , -10);
            text("Pay", 0 , 10);
            text("$200", 0 , 30);

            pop();

        }
        
        
            
    }


}

class GoToJailSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    draw() {

        push();
        textAlign(CENTER);
        translate(this.x, this.y);
        fill(0);

        textSize(20);
        text("Go To", 0, 0);
        text("JAIL", 0, 20);

        pop();
        
            
    }

    


}

class JailSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

        

    }

    draw() {

        push();
        textAlign(CENTER);
        translate(this.x, this.y);
        fill(0);

        textSize(20);

        textSize(30);
        text("JAIL", 0, 10);
        pop();
        
            
    }

    


}

class FreeParkingSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    draw() {

        push();
        textAlign(CENTER);
        translate(this.x, this.y);
        fill(0);

        textSize(20);
        text("FREE", 0, 0);
        text("Parking", 0, 20);

        pop();
        
            
    }


}




