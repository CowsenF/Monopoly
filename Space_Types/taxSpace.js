class TaxSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(player) {

        player.currentCredit -= 200;

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