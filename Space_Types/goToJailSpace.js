class GoToJailSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(player) {

        player.goToJail();

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