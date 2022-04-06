class ChanceSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(player) {

        chanceDeck.drawChanceCard(player, board);

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