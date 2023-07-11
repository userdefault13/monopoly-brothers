import ChanceTile from "./tiles/ChanceTile";

const randomIndex = Math.floor(Math.random() * chanceArray.length);
const randomCard = chanceArray[randomIndex];

// chance cards
const chanceArray = [
    {
        title: 'Advance to Go',
        description: 'Advance to Go and collect $200.',
        action: (player) => {
            player.moveToTile(goTile);
            player.collectMoney(200);
        }
    },
    {
        title: 'Advance to Illinois Avenue',
        description: 'Advance to Illinois Avenue.',
        action: (player) => {
            player.moveToTile(illinoisAveTile);
        }
    },
    {
        title: 'Advance to St. Charles Place',
        description: 'Advance to St. Charles Place.',
        action: (player) => {
            player.moveToTile(stCharlesPlaceTile);
        }
    },
    {
        title: 'Advance to nearest Utility',
        description: 'Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown.',
        action: (player) => {
            const nearestUtilityTile = findNearestUtilityTile(player.getPosition());
            player.moveToTile(nearestUtilityTile);
            
            if (nearestUtilityTile.isOwned()) {
                const diceRoll = rollDice();
                const rent = diceRoll * 10;
                const owner = nearestUtilityTile.getOwner();
                player.payRent(rent, owner);
            }
        }
    },
    {
        title: 'Advance to nearest Railroad',
        description: 'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.',
        action: (player) => {
            const nearestRailroadTile = findNearestRailroadTile(player.getPosition());
            player.moveToTile(nearestRailroadTile);
            
            if (nearestRailroadTile.isOwned()) {
                const rent = nearestRailroadTile.getRent() * 2;
                const owner = nearestRailroadTile.getOwner();
                player.payRent(rent, owner);
            }
        }
    },
    {
        title: 'Bank pays you dividend',
        description: 'Bank pays you a dividend of $50.',
        action: (player) => {
            player.collectMoney(50);
        }
    },
    {
        title: 'Get out of Jail free',
        description: 'Get out of Jail free. This card may be kept until needed or sold.',
        action: (player) => {
            player.receiveGetOutOfJailCard();
        }
    },
    {
        title: 'Go back 3 spaces',
        description: 'Go back 3 spaces.',
        action: (player) => {
            player.moveBackSpaces(3);
        }
    },
    {
        title: 'Go directly to Jail',
        description: 'Go directly to Jail. Do not pass Go, do not collect $200.',
        action: (player) => {
            player.moveToTile(jailTile);
            player.goToJail();
        }
    },
    {
        title: 'Make general repairs on all your property',
        description: 'Make general repairs on all your property. For each house pay $25. For each hotel pay $100.',
        action: (player) => {
            const totalHouses = player.getTotalHouses();
            const totalHotels = player.getTotalHotels();
            const houseRepairCost = totalHouses * 25;
            const hotelRepairCost = totalHotels * 100;
            const totalRepairCost = houseRepairCost + hotelRepairCost; 
            player.payMoney(totalRepairCost);
        }
    },
    {
        title: 'Pay poor tax',
        description: 'Pay poor tax of $15.',
        action: (player) => {
            player.payMoney(15);
        }
    },
    {
        title: 'Take a trip to Reading Railroad',
        description: 'Take a trip to Reading Railroad.',
        action: (player) => {
            player.moveToTile(readingRailroadTile);
        }
    },
    {
        title: 'Take a walk on the Boardwalk',
        description: 'Take a walk on the Boardwalk.',
        action: (player) => {
            player.moveToTile(boardwalkTile);
        }
    },
    {
        title: 'You have been elected Chairman of the Board',
        description: 'You have been elected Chairman of the Board. Pay each player $50.',
        action: (player, otherPlayers) => {
            for (const otherPlayer of otherPlayers) {
                if (otherPlayer !== player) {
                    player.payMoneyToPlayer(50, otherPlayer);
                }
            }
        }
    },
    {
        title: 'Your building loan matures',
        description: 'Your building loan matures. Collect $150.',
        action: (player) => {
            player.collectMoney(150);
        }
    },
    {
        title: 'You have won a crossword competition',
        description: 'You have won a crossword competition. Collect $100.',
        action: (player) => {
            player.collectMoney(100);
        }
    },
    // Add more chance cards as needed
]; 

const chance1 = new ChanceTile(290, 50, 180, 240, `${chanceArray[randomCard].title}`, `${chanceArray[randomCard].description}`, chanceArray[randomCard].action);
const chance2 = new ChanceTile(290, 50, 180, 240, `${chanceArray[randomCard].title}`, `${chanceArray[randomCard].description}`, chanceArray[randomCard].action);
const chance3 = new ChanceTile(290, 50, 180, 240, `${chanceArray[randomCard].title}`, `${chanceArray[randomCard].description}`, chanceArray[randomCard].action);
const chance4 = new ChanceTile(290, 50, 180, 240, `${chanceArray[randomCard].title}`, `${chanceArray[randomCard].description}`, chanceArray[randomCard].action);

const chanceCards = [
    chance1,
    chance2,
    chance3,
    chance4
]

export default chanceCards;                                                                                                                                                                                                                                                             