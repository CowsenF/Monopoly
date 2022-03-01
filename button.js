class Button {

    constructor(x, y, xSize, ySize, callTo, name) {

        this.x = x;
        this.y = y;
        this.xSize = xSize;
        this.ySize = ySize;
        this.callTo = callTo;

        this.name = name;

        this.canBePressed = false;

    }

    checkForPress() {

        if(this.canBePressed == false) {
            return;
        }
        if(mouseX > this.x - this.xSize && mouseX < this.x + this.xSize && mouseY > this.y - this.ySize && mouseY < this.y + this.ySize) {
            
            this.callTo();
        }

    }





}