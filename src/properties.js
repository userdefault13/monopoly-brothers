// properties.js
import PropertyTile from "./tiles/PropertyTile";
import CornerTile from "./tiles/CornerTile";


// Create:
// property tile cards
const mediterraneanAve = new PropertyTile(290, 50, 180, 240, 'Mediterranean Avenue', 60, [2, 10, 30, 90, 160, 250], 50, 50);
const balticAve = new PropertyTile(290, 50, 180, 240, 'Baltic Avenue', 60, [4, 20, 60, 180, 320, 450], 50, 50);
const orientalAve = new PropertyTile(290, 50, 180, 240, 'Oriental Avenue', 100, [6, 30, 90, 270, 400, 550], 50, 50);
const vermontAve = new PropertyTile(290, 50, 180, 240, 'Vermont Avenue', 100, [6, 30, 90, 270, 400, 550], 50, 50);
const connecticutAve = new PropertyTile(290, 50, 180, 240, 'Connecticut Avenue', 120, [8, 40, 100, 300, 450, 600], 50, 50);
const stCharlesPlace = new PropertyTile(290, 50, 240, 180, 'St. Charles Place', 140, [10, 50, 150, 450, 625, 750], 100, 100);
const statesAve = new PropertyTile(290, 50, 240, 180, 'States Avenue', 140, [10, 50, 150, 450, 625, 750], 100, 100);
const virginiaAve = new PropertyTile(290, 50, 240, 180 ,'Virginia Avenue', 160, [12, 60, 180, 500, 700, 900], 100, 100);
const stJamesPlace = new PropertyTile(290, 50, 240, 180, 'St. James Place', 180, [14, 70, 200, 550, 750, 950], 100, 100);
const tennesseeAve = new PropertyTile(290, 50, 240, 180, 'Tennessee Avenue', 180, [14, 70, 200, 550, 750, 950], 100, 100);
const newYorkAve = new PropertyTile(290, 50, 240, 180, 'New York Avenue', 200, [16, 80, 220, 600, 800, 1000], 100, 100);
const kentuckyAve = new PropertyTile(290, 50, 240, 180, 'Kentucky Avenue', 220, [18, 90, 250, 700, 875, 1050], 150, 150);
const indianaAve = new PropertyTile(290, 50, 240, 180, 'Indiana Avenue', 220, [18, 90, 250, 700, 875, 1050], 150, 150);
const illinoisAve = new PropertyTile(290, 50, 240, 180,'Illinois Avenue', 240, [20, 100, 300, 750, 925, 1100], 150, 150);
const atlanticAve = new PropertyTile(290, 50, 240, 180, 'Atlantic Avenue', 260, [22, 110, 330, 800, 975, 1150], 150, 150);
const ventnorAve = new PropertyTile(290, 50, 240, 180, 'Ventnor Avenue', 260, [22, 110, 330, 800, 975, 1150], 150, 150);
const marvinGardens = new PropertyTile(290, 50, 240, 180, 'Marvin Gardens', 280, [24, 120, 360, 850, 1025, 1200], 150, 150);
const pacificAve = new PropertyTile(290, 50, 240, 180, 'Pacific Avenue', 300, [26, 130, 390, 900, 1100, 1275], 200, 200);
const northCarolinaAve = new PropertyTile(290, 50, 240, 180, 'North Carolina Avenue', 300, [26, 130, 390, 900, 1100, 1275], 200, 200);
const pennsylvaniaAve = new PropertyTile(290, 50, 240, 180, 'Pennsylvania Avenue', 320, [28, 150, 450, 1000, 1200, 1400], 200, 200);
const parkPlace = new PropertyTile(290, 50, 240, 180, 'Park Place', 350, [35, 175, 500, 1100, 1300, 1500], 200, 200);
const boardwalk = new PropertyTile(290, 50, 240, 180, 'Boardwalk', 400, [50, 200, 600, 1400, 1700, 2000], 200, 200);

// railroad tile cards
const readingRailroad = new PropertyTile('Reading Railroad', 200, [25, 50, 100, 200], 0, 0);
const pennsylvaniaRailroad = new PropertyTile('Pennsylvania Railroad', 200, [25, 50, 100, 200], 0, 0);
const bandoRailroad = new PropertyTile('B&O Railroad', 200, [25, 50, 100, 200], 0, 0);
const shortLineRailroad = new PropertyTile('Short Line Railroad', 200, [25, 50, 100, 200], 0, 0);

// utility tile cards
const electricCompany = new PropertyTile('Electric Company', 150, [4, 10], 0, 0);
const waterWorks = new PropertyTile('Water Works', 150, [4, 10], 0, 0);

// Corner tile cards
const go = new CornerTile(50, 50, 240, 240, 'Go', 0, [], 0, 0);
const jail = new CornerTile('Jail', 0, [], 0, 0);
const freeParking = new CornerTile('Free Parking', 0, [], 0, 0);
const goToJail = new CornerTile('Go To Jail', 0, [], 0, 0);

// tax tile cards
const luxuryTax = new PropertyTile('Luxury Tax', 75, [], 0, 0);
const incomeTax = new PropertyTile('Income Tax', 25, [], 0, 0);




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

const chanceCards = [
    chance1,
    chance2,
    chance3,
    chance4
];


export { propertyCards, chanceCards };