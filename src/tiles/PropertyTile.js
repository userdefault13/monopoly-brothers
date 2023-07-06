import BaseTile  from "./BaseTile";

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
}
