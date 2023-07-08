/*import BaseTile from "./BaseTile";

const PROPERTY_TILE_WIDTH = 90*2;
const PROPERTY_TILE_HEIGHT = 120*2;

export class PropertyTile extends BaseTile {
    constructor(name, price, rent, houseCost, hotelCost, position) {
        super(position, PROPERTY_TILE_WIDTH, PROPERTY_TILE_HEIGHT);
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
};*/

import BaseTile from "./BaseTile";

const PROPERTY_TILE_WIDTH = 180;
const PROPERTY_TILE_HEIGHT = 240;

class PropertyTile extends BaseTile {
    constructor(name, price, rent, houseCost, hotelCost, position) {
        super(position, PROPERTY_TILE_WIDTH, PROPERTY_TILE_HEIGHT);
        this.name = name;
        this.price = price;
        this.rent = rent;
        this.owner = null;
        this.houses = 0;
        this.hasHotel = false;
        this.houseCost = houseCost;
        this.hotelCost = hotelCost;
    }

    render(graphics, x, y) {
        // Add rendering logic for property tiles
        graphics.displayWidth = this.width;
        graphics.displayHeight = this.height;
        graphics.setPosition(x, y);
        graphics.setFillStyle(0xffffff);
        graphics.setInteractive();
        graphics.on("pointerdown", () => {
            alert("Property Tile clicked!");
        });

        /*// Example: Display the name of the property on the tile
        const text = this.scene.add.text(x + this.width / 2, y + this.height / 2, this.name, {
            font: '12px Arial',
            fill: '#000000',
            align: 'center'
        });
        text.setOrigin(0.5);*/
    }
}

export default PropertyTile;






