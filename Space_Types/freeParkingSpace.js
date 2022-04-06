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