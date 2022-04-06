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
                while(textWidth(splitString[i]) > (boardSizeX / 13)) {

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