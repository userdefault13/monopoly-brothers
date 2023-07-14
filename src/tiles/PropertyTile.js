import BaseTile from "./BaseTile";
import { properties } from "../cards/properties";

export default class PropertyTile extends BaseTile {
    constructor(propertyConfig) {
        const {index, name, price, rent, houseCost, hotelCost} = propertyConfig;
        super(index);
        this.name = name;
        this.price = price;
        this.rent = rent;
        this.hasHotel = false;
        this.houseCost = houseCost;
        this.hotelCost = hotelCost;

        // state
        this.owner = null;
        this.houses = 0;
        
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
    }
}







