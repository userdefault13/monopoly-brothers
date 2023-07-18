// chance cards
import ChanceTile from "../tiles/ChanceTile";
import PropertyTile from "../tiles/PropertyTile";

export const chanceConfig = [
    {
        index: 0,
        title: 'Advance to Go',
        description: 'Advance to Go and collect $200.',
        type: "Chance",
        action: (player) => {
            player.moveToTile(PropertyTile[0]);
            player.collectMoney(200);
        }
    },
    {
        index: 1,
        title: 'Advance to Illinois Avenue',
        description: 'Advance to Illinois Avenue.',
        type: "Chance",
        action: (player) => {
            player.moveToTile(PropertyTile[24]);
        }
    },
    {
        index:2,
        title: 'Advance to St. Charles Place',
        description: 'Advance to St. Charles Place.',
        type: "Chance",
        action: (player) => {
            player.moveToTile(stCharlesPlaceTile);
        }
    },
    {
        index: 3,
        title: 'Advance to nearest Utility',
        description: 'Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown.',
        type: "Chance",
        action: (player) => {
            const nearestUtilityTile = find.NearestUtilityTile(player.getPosition());
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
        index: 4,
        title: 'Advance to nearest Railroad',
        description: 'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.',
        type: "Chance",
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
        index: 5,
        title: 'Bank pays you dividend',
        description: 'Bank pays you a dividend of $50.',
        type: "Chance",
        action: (player) => {
            player.collectMoney(50);
        }
    },
    {
        index: 6,
        title: 'Get out of Jail free',
        description: 'Get out of Jail free. This card may be kept until needed or sold.',
        type: "Chance",
        action: (player) => {
            player.receiveGetOutOfJailCard();
        }
    },
    {
        index: 7,
        title: 'Go back 3 spaces',
        description: 'Go back 3 spaces.',
        type: "Chance",
        action: (player) => {
            player.moveBackSpaces(3);
        }
    },
    {
        index: 8,
        title: 'Go directly to Jail',
        description: 'Go directly to Jail. Do not pass Go, do not collect $200.',
        type: "Chance",
        action: (player) => {
            player.moveToTile(jailTile);
            player.goToJail();
        }
    },
    {
        index: 9,
        title: 'Make general repairs on all your property',
        description: 'Make general repairs on all your property. For each house pay $25. For each hotel pay $100.',
        type: "Chance",
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
        index: 10,
        title: 'Pay poor tax',
        description: 'Pay poor tax of $15.',
        type: "Chance",
        action: (player) => {
            player.payMoney(15);
        }
    },
    {
        index: 11,
        title: 'Take a trip to Reading Railroad',
        description: 'Take a trip to Reading Railroad.',
        type: "Chance",
        action: (player) => {
            player.moveToTile(readingRailroadTile);
        }
    },
    {
        index: 12,
        title: 'Take a walk on the Boardwalk',
        description: 'Take a walk on the Boardwalk.',
        type: "Chance",
        action: (player) => {
            player.moveToTile(boardwalkTile);
        }
    },
    {
        index: 13,
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
        index: 14,
        title: 'Your building loan matures',
        description: 'Your building loan matures. Collect $150.',
        type: "Chance",
        action: (player) => {
            player.collectMoney(150);
        }
    },
    {
        index: 15,
        title: 'You have won a crossword competition',
        description: 'You have won a crossword competition. Collect $100.',
        type: "Chance",
        action: (player) => {
            player.collectMoney(100);
        }
    },
    // Add more chance cards as needed
]; 

const randomIndex = Math.floor(Math.random() * chanceConfig.length);
//const randomCard = chanceConfig[randomIndex];


const chanceCard1 = {
    index: 23,
    name: "Chance",
    tile: new ChanceTile(
        chanceConfig[randomIndex].title,
        chanceConfig[randomIndex].description,
        chanceConfig[randomIndex].action
    ),
};
const chanceCard2 = {
    index: 8,
    name: "Chance",
    tile: new ChanceTile(
        chanceConfig[randomIndex].title,
        chanceConfig[randomIndex].description,
        chanceConfig[randomIndex].action
    ),
};
const chanceCard3 = {
    index: 14,
    name: "Chance",
    tile: new ChanceTile(
        chanceConfig[randomIndex].title,
        chanceConfig[randomIndex].description,
        chanceConfig[randomIndex].action
    ),
};

const chanceCards = [
    chanceCard1,
    chanceCard2,
    chanceCard3,
]

export { chanceCards };                                                                                                                                                                                                                                                             