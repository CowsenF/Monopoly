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