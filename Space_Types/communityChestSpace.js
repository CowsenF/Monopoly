class CommunityChestSpace extends Space {

    //position, visualPositionX, visualPositionY, type
    constructor(position, visualPositionX, visualPositionY, type) {

        super(position, visualPositionX, visualPositionY, type);

    }

    landedOn(player) {

        //player pick a card
        chanceDeck.drawCommunityCard(player, board);

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