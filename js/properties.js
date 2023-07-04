// properties.js

class Property {
    constructor(name, price, rent, houseCost, hotelCost) {
        this.name = name;
        this.price = price;
        this.rent = rent;
        this.owner = null;
        this.houses = 0;
        this.hasHotel = false;
        this.houseCost = houseCost;
        this.hotelCost = hotelCost;
    }

    calculateRent() {
        let rentAmount = this.rent;

      // Modify rent amount based on property conditions
        if (this.houses > 0) {
        // Increase rent based on the number of houses
        rentAmount *= Math.pow(2, this.houses);
    }

        if (this.hasHotel) {
        // Increase rent if a hotel is present
        rentAmount *= 2;
    }

    return rentAmount;
    }

    addHouse() {
        if (this.houses < 4 && !this.hasHotel) {
        this.houses++;
    }
    }

    addHotel() {
        if (this.houses === 4) {
        this.houses = 0;
        this.hasHotel = true;
    }
    }

    getHouseCount() {
        return this.houses;
    }

    hasHotel() {
        return this.hasHotel;
    }

    setOwner(player) {
        this.owner = player;
    }

    getOwner() {
        return this.owner;
    }

    getHouseCost() {
        return this.houseCost;
    }

    getHotelCost() {
        return this.hotelCost;
    }
}

    // Create property instances
    const mediterraneanAve = new Property('Mediterranean Avenue', 60, [2, 10, 30, 90, 160, 250], 50, 50);
    const balticAve = new Property('Baltic Avenue', 60, [4, 20, 60, 180, 320, 450], 50, 50);
    const orientalAve = new Property('Oriental Avenue', 100, [6, 30, 90, 270, 400, 550], 50, 50);
    const vermontAve = new Property('Vermont Avenue', 100, [6, 30, 90, 270, 400, 550], 50, 50);
    const connecticutAve = new Property('Connecticut Avenue', 120, [8, 40, 100, 300, 450, 600], 50, 50);
    const stCharlesPlace = new Property('St. Charles Place', 140, [10, 50, 150, 450, 625, 750], 100, 100);
    const statesAve = new Property('States Avenue', 140, [10, 50, 150, 450, 625, 750], 100, 100);
    const virginiaAve = new Property('Virginia Avenue', 160, [12, 60, 180, 500, 700, 900], 100, 100);
    const stJamesPlace = new Property('St. James Place', 180, [14, 70, 200, 550, 750, 950], 100, 100);
    const tennesseeAve = new Property('Tennessee Avenue', 180, [14, 70, 200, 550, 750, 950], 100, 100);
    const newYorkAve = new Property('New York Avenue', 200, [16, 80, 220, 600, 800, 1000], 100, 100);
    const kentuckyAve = new Property('Kentucky Avenue', 220, [18, 90, 250, 700, 875, 1050], 150, 150);
    const indianaAve = new Property('Indiana Avenue', 220, [18, 90, 250, 700, 875, 1050], 150, 150);
    const illinoisAve = new Property('Illinois Avenue', 240, [20, 100, 300, 750, 925, 1100], 150, 150);
    const atlanticAve = new Property('Atlantic Avenue', 260, [22, 110, 330, 800, 975, 1150], 150, 150);
    const ventnorAve = new Property('Ventnor Avenue', 260, [22, 110, 330, 800, 975, 1150], 150, 150);
    const marvinGardens = new Property('Marvin Gardens', 280, [24, 120, 360, 850, 1025, 1200], 150, 150);
    const pacificAve = new Property('Pacific Avenue', 300, [26, 130, 390, 900, 1100, 1275], 200, 200);
    const northCarolinaAve = new Property('North Carolina Avenue', 300, [26, 130, 390, 900, 1100, 1275], 200, 200);
    const pennsylvaniaAve = new Property('Pennsylvania Avenue', 320, [28, 150, 450, 1000, 1200, 1400], 200, 200);
    const parkPlace = new Property('Park Place', 350, [35, 175, 500, 1100, 1300, 1500], 200, 200);
    const boardwalk = new Property('Boardwalk', 400, [50, 200, 600, 1400, 1700, 2000], 200, 200);
    const readingRailroad = new Property('Reading Railroad', 200, [25, 50, 100, 200], 0, 0);
    const pennsylvaniaRailroad = new Property('Pennsylvania Railroad', 200, [25, 50, 100, 200], 0, 0);
    const bandoRailroad = new Property('B&O Railroad', 200, [25, 50, 100, 200], 0, 0);
    const shortLineRailroad = new Property('Short Line Railroad', 200, [25, 50, 100, 200], 0, 0);
    const electricCompany = new Property('Electric Company', 150, [4, 10], 0, 0);
    const waterWorks = new Property('Water Works', 150, [4, 10], 0, 0);
    
    // Corner tile cards
    const go = new Property('Go', 0, [], 0, 0);
    const jail = new Property('Jail', 0, [], 0, 0);
    const freeParking = new Property('Free Parking', 0, [], 0, 0);
    const goToJail = new Property('Go To Jail', 0, [], 0, 0);
    
    // tax tile cards
    const luxuryTax = new Property('Luxury Tax', 75, [], 0, 0);
    const incomeTax = new Property('Income Tax', 25, [], 0, 0);



    // Array of property cards
    const propertyCards = [
        mediterraneanAve,
        balticAve,
        orientalAve,
        vermontAve,
        connecticutAve,
        stCharlesPlace,
        statesAve,
        virginiaAve,
        stJamesPlace,
        tennesseeAve,
        newYorkAve,
        kentuckyAve,
        indianaAve,
        illinoisAve,
        atlanticAve,
        ventnorAve,
        marvinGardens,
        pacificAve,
        northCarolinaAve,
        pennsylvaniaAve,
        parkPlace,
        boardwalk,
        readingRailroad,
        pennsylvaniaRailroad,
        bandoRailroad,
        shortLineRailroad,
        electricCompany,
        waterWorks,
        jail,
        freeParking,
        go,
        goToJail,
        luxuryTax,
        incomeTax,
    ];


export default propertyCards;  