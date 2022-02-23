class ColoredStreet {

    constructor(name, colorGroup, numbersList) {

        this.nameOfStreet = name;
        this.colorGroup = colorGroup;

        this.price = numbersList[0];
        this.pricePerHouse = numbersList[1];
        this.Rent = numbersList[2];
        this.Rent1House = numbersList[3];
        this.Rent2House = numbersList[4];
        this.Rent3House = numbersList[5];
        this.Rent4House = numbersList[6];
        this.RentHotel = numbersList[7];
        this.mortagage = numbersList[0] / 2;

        this.owner = "bank";
        this.buildings = "none";

    }

    getData(data) {

        switch (data) {
            case "nameOfStreet":
                
                return this.nameOfStreet;

            case "colorGroup":
                
                return this.colorGroup;

            case "price":
            
                return this.price;
                
            case "pricePerHouse":
                
                return this.pricePerHouse;


        
            default:
                print(data + " is not a case");
                break;
        }

    }

    switchOwner(/*player*/) {

        // Set new player to owner

    }




}

