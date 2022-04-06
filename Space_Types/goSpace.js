class GoSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(player) {

        player.currentCredit += 200;

    }

    passed(player) {

        player.currentCredit += 200;

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