class Board {

    constructor() {

        this.spaceList = [];
        this.railroads = [];
        this.coloredStreets = [];
        this.coloredNumbersList = [];
        
        this.makeRailroad();
        this.makeColoredNumbersList();
        this.makeColoredStreets();
        this.makeSpaces();

    }

    makeRailroad() {

        this.railroads[0] = new Railroad("King Cross Station");
        this.railroads[1] = new Railroad("Marylebone Station");
        this.railroads[2] = new Railroad("Fenchurch St. Station");
        this.railroads[3] = new Railroad("Liverpool St. Station");

    }

    makeColoredNumbersList() {
        // Det her er for at få ALLE TAL OM EN GIVEN kort. Og det er i RÆKKE FØLGE efter det her:
        //Price, Price per house, Rent, Rent (1 House), Rent (2 House), Rent (3 House), Rent (4 House), Rent (Hotel)
        this.coloredNumbersList[0] = [60, 50, 2, 10, 30, 90, 160, 250];
        this.coloredNumbersList[1] = [60, 50, 4, 20, 60, 180, 320, 450];
        this.coloredNumbersList[2] = [100, 50, 6, 30, 90, 270, 400, 550];
        this.coloredNumbersList[3] = [100, 50, 6, 30, 90, 270, 400, 550];
        this.coloredNumbersList[4] = [120, 50, 8, 40, 100, 300, 450, 600];
        this.coloredNumbersList[5] = [140, 100, 10, 50, 150, 450, 625, 750];
        this.coloredNumbersList[6] = [140, 100, 10, 50, 150, 450, 625, 750];
        this.coloredNumbersList[7] = [160, 100, 12, 60, 180, 500, 700, 900];
        this.coloredNumbersList[8] = [180, 100, 14, 70, 200, 550, 750, 950];
        this.coloredNumbersList[9] = [180, 100, 14, 70, 200, 550, 750, 950];
        this.coloredNumbersList[10] = [200, 100, 16, 80, 220, 600, 800, 1000];
        this.coloredNumbersList[11] = [220, 150, 18, 90, 250, 700, 875, 1050];
        this.coloredNumbersList[12] = [220, 150, 18, 90, 250, 700, 875, 1050];
        this.coloredNumbersList[13] = [240, 150, 20, 100, 300, 750, 925, 1100];
        this.coloredNumbersList[14] = [260, 150, 22, 110, 330, 800, 975, 1150];
        this.coloredNumbersList[15] = [260, 150, 22, 110, 330, 800, 975, 1150];
        this.coloredNumbersList[16] = [280, 150, 24, 120, 360, 850, 1025, 1200];
        this.coloredNumbersList[17] = [300, 200, 26, 130, 390, 900, 1100, 1275];
        this.coloredNumbersList[18] = [300, 200, 26, 130, 390, 900, 1100, 1275];
        this.coloredNumbersList[19] = [320, 200, 28, 150, 450, 1000, 1200, 1400];
        this.coloredNumbersList[20] = [350, 200, 35, 175, 500, 1100, 1300, 1500];
        this.coloredNumbersList[21] = [400, 200, 50, 200, 600, 1400, 1700, 2000];

    }

    makeColoredStreets() {

        this.coloredStreets[0] = new ColoredStreet("Old Kent Rd", "brown", this.coloredNumbersList[0]);
        this.coloredStreets[1] = new ColoredStreet("Whitechapel Road", "brown", this.coloredNumbersList[1]);
        this.coloredStreets[2] = new ColoredStreet("The Angel Islington", "skyBlue", this.coloredNumbersList[2]);
        this.coloredStreets[3] = new ColoredStreet("Euston Road", "skyBlue", this.coloredNumbersList[3]);
        this.coloredStreets[4] = new ColoredStreet("Pentonville Road", "skyBlue", this.coloredNumbersList[4]);
        this.coloredStreets[5] = new ColoredStreet("Pall Mall", "darkOrchid", this.coloredNumbersList[5]);
        this.coloredStreets[6] = new ColoredStreet("Whitehall", "darkOrchid", this.coloredNumbersList[6]);
        this.coloredStreets[7] = new ColoredStreet("Northumberland Avenue", "darkOrchid", this.coloredNumbersList[7]);
        this.coloredStreets[8] = new ColoredStreet("Bow Street", "orange", this.coloredNumbersList[8]);
        this.coloredStreets[9] = new ColoredStreet("Marlborough Street", "orange", this.coloredNumbersList[9]);
        this.coloredStreets[10] = new ColoredStreet("Vine Street", "orange", this.coloredNumbersList[10]);
        this.coloredStreets[11] = new ColoredStreet("The Strand", "red", this.coloredNumbersList[11]);
        this.coloredStreets[12] = new ColoredStreet("Fleet Street", "red", this.coloredNumbersList[12]);
        this.coloredStreets[13] = new ColoredStreet("Trafalgar Square", "red", this.coloredNumbersList[13]);
        this.coloredStreets[14] = new ColoredStreet("Leicester Square", "yellow", this.coloredNumbersList[14]);
        this.coloredStreets[15] = new ColoredStreet("Coventry Street", "yellow", this.coloredNumbersList[15]);
        this.coloredStreets[16] = new ColoredStreet("Piccadilly", "yellow", this.coloredNumbersList[16]);
        this.coloredStreets[17] = new ColoredStreet("Regent Street", "green", this.coloredNumbersList[17]);
        this.coloredStreets[18] = new ColoredStreet("Oxford Street", "green", this.coloredNumbersList[18]);
        this.coloredStreets[19] = new ColoredStreet("Bond Street", "green", this.coloredNumbersList[19]);
        this.coloredStreets[20] = new ColoredStreet("Park Lane", "blue", this.coloredNumbersList[20]);
        this.coloredStreets[21] = new ColoredStreet("Mayfair", "blue", this.coloredNumbersList[21]);


    }

    makeSpaces() {
        // ud fra hvad jeg ved er der ikke nogen form for en nem måde at lave spacene på.
        // Vi ved at de 4 hjørner er go, jail, free parking, go to jail
        // der er 40 "squares"

        this.spaceList[0] = new GoSpace(0, (0 + boardSizeX / 13), ((boardSizeY * 13) / 13 - boardSizeY / 13), "corner");
        this.spaceList[1] = new ColoredStreetsSpace(1, (0 + boardSizeX / 13), ((boardSizeY * 11) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[0]);
        this.spaceList[2] = new CommunityChestSpace(2, (0 + boardSizeX / 13), ((boardSizeY * 10) / 13 - boardSizeY / 26), "horizontal");
        this.spaceList[3] = new ColoredStreetsSpace(3, (0 + boardSizeX / 13), ((boardSizeY * 9) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[1]);
        this.spaceList[4] = new TaxSpace(4, (0 + boardSizeX / 13), ((boardSizeY * 8) / 13 - boardSizeY / 26), "horizontal");
        this.spaceList[5] = new RailroadSpace(5, (0 + boardSizeX / 13), ((boardSizeY * 7) / 13 - boardSizeY / 26), "horizontal", this.railroads[0]);
        this.spaceList[6] = new ColoredStreetsSpace(6, (0 + boardSizeX / 13), ((boardSizeY * 6) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[2]);
        this.spaceList[7] = new ChanceSpace(7, (0 + boardSizeX / 13), ((boardSizeY * 5) / 13 - boardSizeY / 26), "horizontal");
        this.spaceList[8] = new ColoredStreetsSpace(8, (0 + boardSizeX / 13), ((boardSizeY * 4) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[3]);
        this.spaceList[9] = new ColoredStreetsSpace(9, (0 + boardSizeX / 13), ((boardSizeY * 3) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[4]);
        this.spaceList[10] = new JailSpace(10, (0 + boardSizeX / 13), ((boardSizeY * 2) / 13 - boardSizeY / 13), "corner");
        this.spaceList[11] = new ColoredStreetsSpace(11, ((boardSizeX * 2) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical", this.coloredStreets[5]);
        this.spaceList[12] = new TaxSpace(12, ((boardSizeX * 3) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical");
        this.spaceList[13] = new ColoredStreetsSpace(13, ((boardSizeX * 4) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical", this.coloredStreets[6]);
        this.spaceList[14] = new ColoredStreetsSpace(14, ((boardSizeX * 5) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical", this.coloredStreets[7]);
        this.spaceList[15] = new RailroadSpace(15, ((boardSizeX * 6) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical", this.railroads[1]);
        this.spaceList[16] = new ColoredStreetsSpace(16, ((boardSizeX * 7) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical", this.coloredStreets[8]);
        this.spaceList[17] = new CommunityChestSpace(17, ((boardSizeX * 8) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical");
        this.spaceList[18] = new ColoredStreetsSpace(18, ((boardSizeX * 9) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical", this.coloredStreets[9]);
        this.spaceList[19] = new ColoredStreetsSpace(19, ((boardSizeX * 10) / 13 + boardSizeX / 26), ((boardSizeY * 1) / 13), "vertical", this.coloredStreets[10]);
        this.spaceList[20] = new FreeParkingSpace(20, ((boardSizeX * 12) / 13), ((boardSizeY * 1) / 13), "corner");
        this.spaceList[21] = new ColoredStreetsSpace(21, ((boardSizeX * 12) / 13), ((boardSizeY * 3) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[11]);
        this.spaceList[22] = new ChanceSpace(22, ((boardSizeX * 12) / 13), ((boardSizeY * 4) / 13 - boardSizeY / 26), "horizontal");
        this.spaceList[23] = new ColoredStreetsSpace(23, ((boardSizeX * 12) / 13), ((boardSizeY * 5) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[12]);
        this.spaceList[24] = new ColoredStreetsSpace(24, ((boardSizeX * 12) / 13), ((boardSizeY * 6) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[13]);
        this.spaceList[25] = new RailroadSpace(25, ((boardSizeX * 12) / 13), ((boardSizeY * 7) / 13 - boardSizeY / 26), "horizontal", this.railroads[2]);
        this.spaceList[26] = new ColoredStreetsSpace(26, ((boardSizeX * 12) / 13), ((boardSizeY * 8) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[14]);
        this.spaceList[27] = new ColoredStreetsSpace(27, ((boardSizeX * 12) / 13), ((boardSizeY * 9) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[15]);
        this.spaceList[28] = new TaxSpace(28, ((boardSizeX * 12) / 13), ((boardSizeY * 10) / 13 - boardSizeY / 26), "horizontal");
        this.spaceList[29] = new ColoredStreetsSpace(29, ((boardSizeX * 12) / 13), ((boardSizeY * 11) / 13 - boardSizeY / 26), "horizontal", this.coloredStreets[16]);
        this.spaceList[30] = new GoToJailSpace(30, ((boardSizeX * 12) / 13), ((boardSizeY * 12) / 13), "corner");
        this.spaceList[31] = new ColoredStreetsSpace(31, ((boardSizeX * 10) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical", this.coloredStreets[17]);
        this.spaceList[32] = new ColoredStreetsSpace(32, ((boardSizeX * 9) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical", this.coloredStreets[18]);
        this.spaceList[33] = new CommunityChestSpace(33, ((boardSizeX * 8) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical");
        this.spaceList[34] = new ColoredStreetsSpace(34, ((boardSizeX * 7) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical", this.coloredStreets[19]);
        this.spaceList[35] = new RailroadSpace(35, ((boardSizeX * 6) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical", this.railroads[3]);
        this.spaceList[36] = new ChanceSpace(36, ((boardSizeX * 5) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical");
        this.spaceList[37] = new ColoredStreetsSpace(37, ((boardSizeX * 4) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical", this.coloredStreets[20]);
        this.spaceList[38] = new TaxSpace(38, ((boardSizeX * 3) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical");
        this.spaceList[39] = new ColoredStreetsSpace(39, ((boardSizeX * 2) / 13 + boardSizeX / 26), ((boardSizeY * 12) / 13), "vertical", this.coloredStreets[21]);

    
    }

    update() {

        for (let i = 0; i < this.spaceList.length; i++) {
            
            this.spaceList[i].update();
            
        }

    }

}