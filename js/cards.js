class Card {
    constructor(title, description, action) {
        this.title = title;
        this.description = description;
        this.action = action;
    }
}

const chanceCards = [
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
];

const communityChestCards = [
    new Card('Advance to Go', 'Advance to Go and collect $200.', 'Collect $200.'),
    new Card('Bank error in your favor', 'Bank error in your favor. Collect $200.', 'Collect $200.'),
    new Card('Doctor\'s fees', 'Doctor\'s fees. Pay $50.', 'Pay $50.'),
    new Card('From sale of stock', 'From sale of stock you get $50.', 'Collect $50.'),
    new Card('Get out of Jail free', 'Get out of Jail free. This card may be kept until needed or sold.', 'Get out of Jail free.'),
    new Card('Go to Jail', 'Go to Jail. Go directly to Jail. Do not pass Go, do not collect $200.', 'Go to Jail.'),
    new Card('Grand Opera Night', 'Grand Opera Night. Collect $50 from every player for opening night seats.', 'Collect $50 from each player.'),
    new Card('Holiday Fund matures', 'Holiday Fund matures. Receive $100.', 'Collect $100.'),
    new Card('Income tax refund', 'Income tax refund. Collect $20.', 'Collect $20.'),
    new Card('It\'s your birthday', 'It\'s your birthday. Collect $10 from every player.', 'Collect $10 from each player.'),
    new Card('Life insurance matures', 'Life insurance matures. Collect $100.', 'Collect $100.'),
    new Card('Pay hospital fees', 'Pay hospital fees of $100.', 'Pay $100.'),
    new Card('Pay school fees', 'Pay school fees of $50.', 'Pay $50.'),
    new Card('Receive $25 consultancy fee', 'Receive $25 consultancy fee.', 'Collect $25.'),
    new Card('You are assessed for street repairs', 'You are assessed for street repairs. $40 per house, $115 per hotel.', 'Pay for property repairs.'),
    new Card('You have won second prize in a beauty contest', 'You have won second prize in a beauty contest. Collect $10.', 'Collect $10.'),
    new Card('You inherit $100', 'You inherit $100.', 'Collect $100.'),
    // Add more community chest cards as needed
];

export { Card, chanceCards, communityChestCards };