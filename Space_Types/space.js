class Space {

    //position, visualPositionX, visualPositionY, type = corner/vandret/lodret
    constructor(position, visualPositionX, visualPositionY, type) {

        this.position = position;
        this.x = visualPositionX;
        this.y = visualPositionY;
        this.type = type;

    }

    landedOn(player) {



    }

    passed(player) {



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
            rect(this.x, this.y, (boardSizeX / 13) * 2, (boardSizeY / 13) * 2);
            pop();

        } else if(this.type == "horizontal") {

            push();
            rectMode(CENTER);
            fill(191, 219, 174);
            strokeWeight(2);
            rect(this.x, this.y, (boardSizeX / 13) * 2, (boardSizeY / 13) * 1);
            pop();

        } else if(this.type == "vertical") {

            push();
            rectMode(CENTER);
            fill(191, 219, 174);
            strokeWeight(2);
            rect(this.x, this.y, (boardSizeX / 13) * 1, (boardSizeY / 13) * 2);
            pop();

        }



    }

    draw() {

    }


}