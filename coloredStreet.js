class ColoredStreet {

    constructor(name, colorGroup, numbersList) {

        this.nameOfStreet = name;
        this.colorGroup = colorGroup;

        this.price = numbersList[0];
        this.pricePerHouse = numbersList[1];
        this.rent = numbersList[2];
        this.rent1House = numbersList[3];
        this.rent2House = numbersList[4];
        this.rent3House = numbersList[5];
        this.rent4House = numbersList[6];
        this.rentHotel = numbersList[7];
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

                //fffffffffffffffffffffffffffffff

            case "rent":
            
                return this.rent;

            case "rent1House":
                
                return this.rent1House;

            case "rent2House":
            
                return this.rent2House;
                
            case "rent3House":
                
                return this.rent3House;

            case "rent4House":
            
                return this.rent4House;

            case "rentHotel":
            
                return this.rentHotel;
                
            case "mortagage":
                
                return this.mortagage;


        
            default:
                print(data + " is not a case");
                break;
        }

    }

    switchOwner(/*player*/) {

        // Set new player to owner

    }

    setBuildings() {

        

    }




}

