// properties.js

import PropertyTile from "./tiles/PropertyTile";
import CornerTile from "./tiles/CornerTile";

// Create:
    // property tile cards
    const mediterraneanAve = new PropertyTile('Mediterranean Avenue', 60, [2, 10, 30, 90, 160, 250], 50, 50);
    const balticAve = new PropertyTile('Baltic Avenue', 60, [4, 20, 60, 180, 320, 450], 50, 50);
    const orientalAve = new PropertyTile('Oriental Avenue', 100, [6, 30, 90, 270, 400, 550], 50, 50);
    const vermontAve = new PropertyTile('Vermont Avenue', 100, [6, 30, 90, 270, 400, 550], 50, 50);
    const connecticutAve = new PropertyTile('Connecticut Avenue', 120, [8, 40, 100, 300, 450, 600], 50, 50);
    const stCharlesPlace = new PropertyTile('St. Charles Place', 140, [10, 50, 150, 450, 625, 750], 100, 100);
    const statesAve = new PropertyTile('States Avenue', 140, [10, 50, 150, 450, 625, 750], 100, 100);
    const virginiaAve = new PropertyTile('Virginia Avenue', 160, [12, 60, 180, 500, 700, 900], 100, 100);
    const stJamesPlace = new PropertyTile('St. James Place', 180, [14, 70, 200, 550, 750, 950], 100, 100);
    const tennesseeAve = new PropertyTile('Tennessee Avenue', 180, [14, 70, 200, 550, 750, 950], 100, 100);
    const newYorkAve = new PropertyTile('New York Avenue', 200, [16, 80, 220, 600, 800, 1000], 100, 100);
    const kentuckyAve = new PropertyTile('Kentucky Avenue', 220, [18, 90, 250, 700, 875, 1050], 150, 150);
    const indianaAve = new PropertyTile('Indiana Avenue', 220, [18, 90, 250, 700, 875, 1050], 150, 150);
    const illinoisAve = new PropertyTile('Illinois Avenue', 240, [20, 100, 300, 750, 925, 1100], 150, 150);
    const atlanticAve = new PropertyTile('Atlantic Avenue', 260, [22, 110, 330, 800, 975, 1150], 150, 150);
    const ventnorAve = new PropertyTile('Ventnor Avenue', 260, [22, 110, 330, 800, 975, 1150], 150, 150);
    const marvinGardens = new PropertyTile('Marvin Gardens', 280, [24, 120, 360, 850, 1025, 1200], 150, 150);
    const pacificAve = new PropertyTile('Pacific Avenue', 300, [26, 130, 390, 900, 1100, 1275], 200, 200);
    const northCarolinaAve = new PropertyTile('North Carolina Avenue', 300, [26, 130, 390, 900, 1100, 1275], 200, 200);
    const pennsylvaniaAve = new PropertyTile('Pennsylvania Avenue', 320, [28, 150, 450, 1000, 1200, 1400], 200, 200);
    const parkPlace = new PropertyTile('Park Place', 350, [35, 175, 500, 1100, 1300, 1500], 200, 200);
    const boardwalk = new PropertyTile('Boardwalk', 400, [50, 200, 600, 1400, 1700, 2000], 200, 200);
    
    // railroad tile cards
    const readingRailroad = new PropertyTile('Reading Railroad', 200, [25, 50, 100, 200], 0, 0);
    const pennsylvaniaRailroad = new PropertyTile('Pennsylvania Railroad', 200, [25, 50, 100, 200], 0, 0);
    const bandoRailroad = new PropertyTile('B&O Railroad', 200, [25, 50, 100, 200], 0, 0);
    const shortLineRailroad = new PropertyTile('Short Line Railroad', 200, [25, 50, 100, 200], 0, 0);
    
    // utility tile cards
    const electricCompany = new PropertyTile('Electric Company', 150, [4, 10], 0, 0);
    const waterWorks = new PropertyTile('Water Works', 150, [4, 10], 0, 0);
    
    // Corner tile cards
    const go = new CornerTile('Go', 0, [], 0, 0);
    const jail = new CornerTile('Jail', 0, [], 0, 0);
    const freeParking = new CornerTile('Free Parking', 0, [], 0, 0);
    const goToJail = new CornerTile('Go To Jail', 0, [], 0, 0);
    
    // tax tile cards
    const luxuryTax = new PropertyTile('Luxury Tax', 75, [], 0, 0);
    const incomeTax = new PropertyTile('Income Tax', 25, [], 0, 0);

    // chance and community chest tile cards
    const chanceCard = [
        new Card('Advance to Go', 'Advance to Go and collect $200.', 'Collect $200.'),
        new Card('Advance to Illinois Avenue', 'Advance to Illinois Avenue.', 'Advance to Illinois Avenue.'),
        new Card('Advance to St. Charles Place', 'Advance to St. Charles Place.', 'Advance to St. Charles Place.'),
        new Card('Advance to nearest Utility', 'Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown.', 'Advance to nearest Utility.'),
        new Card('Advance to nearest Railroad', 'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.', 'Advance to nearest Railroad.'),
        new Card('Bank pays you dividend', 'Bank pays you a dividend of $50.', 'Collect $50 dividend.'),
        new Card('Get out of Jail free', 'Get out of Jail free. This card may be kept until needed or sold.', 'Get out of Jail free.'),
        new Card('Go back 3 spaces', 'Go back 3 spaces.', 'Go back 3 spaces.'),
        new Card('Go directly to Jail', 'Go directly to Jail. Do not pass Go, do not collect $200.', 'Go to Jail.'),
        new Card('Make general repairs on all your property', 'Make general repairs on all your property. For each house pay $25. For each hotel pay $100.', 'Pay for property repairs.'),
        new Card('Pay poor tax', 'Pay poor tax of $15.', 'Pay poor tax.'),
        new Card('Take a trip to Reading Railroad', 'Take a trip to Reading Railroad.', 'Advance to Reading Railroad.'),
        new Card('Take a walk on the Boardwalk', 'Take a walk on the Boardwalk.', 'Advance to Boardwalk.'),
        new Card('You have been elected Chairman of the Board', 'You have been elected Chairman of the Board. Pay each player $50.', 'Pay $50 to each player.'),
        new Card('Your building loan matures', 'Your building loan matures. Collect $150.', 'Collect $150.'),
        new Card('You have won a crossword competition', 'You have won a crossword competition. Collect $100.', 'Collect $100.'),
        // Add more chance cards as needed
    ]

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