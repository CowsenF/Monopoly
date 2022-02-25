class Railroad {

    constructor(name) {

        this.nameOfRailroad = name;

        this.Rent1Railroad = 25;
        this.Rent2Railroad = 50;
        this.Rent3Railroad = 100;
        this.Rent4Railroad = 200;
        
        this.owner = "bank";

    }

    getData(data) {

        switch (data) {
            case "nameOfRailroad":
                
                return this.nameOfRailroad;

            case "rent1Railroad":
                
                return this.Rent1Railroad;

            case "rent2Railroad":
            
                return this.Rent2Railroad;
                
            case "rent3Railroad":
                
                return this.Rent3Railroad;

            case "rent4Railroad":
            
                return this.Rent4Railroad;


        
            default:
                print(data + " is not a case");
                break;
        }

    }

    switchOwner(/*player*/) {

        // Set new player to owner

    }




}



