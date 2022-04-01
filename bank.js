class Bank {

    constructor() {

        this.name = "bank";
        this.availableHouses = 32;
        this.availableHotels = 12;

    }

    setBuildings(takeOrAdd, houseOrHotel, quantity) {

        if(houseOrHotel = "house") {

            if(takeOrAdd = "take") {

                this.availableHouses -= quantity;
    
            } else if(takeOrAdd = "add") {

                this.availableHouses += quantity;

            }

        }

        if(houseOrHotel = "hotel") {

            if(takeOrAdd = "take") {

                this.availableHouses -= quantity;
    
            } else if(takeOrAdd = "add") {

                this.availableHouses += quantity;

            }

        }

    }

}