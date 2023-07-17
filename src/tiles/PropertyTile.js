import BaseTile from "./BaseTile";
//import { property } from "../cards/properties";

const rectangleTileWidth = 180;
const rectangleTileHeight = 240;

export default class PropertyTile extends BaseTile {
    constructor(propertyConfig) {
        const { name, price, rent, houseCost, hotelCost, colorBox} = propertyConfig;
        super(rectangleTileWidth, rectangleTileHeight);
        this.name = name;
        this.price = price;
        this.rent = rent;
        this.hasHotel = false;
        this.houseCost = houseCost;
        this.hotelCost = hotelCost;
        this.colorBox = colorBox;

        // state
        this.owner = null;
        this.houses = 0;
        
    }

    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
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
    getColorBox() {
        return this.colorBox;
    }

    render(scene, x, y) {
        const rectangleTile = scene.add.container(x, y);
        const rectangleTileWidth = 180;
        const rectangleTileHeight = 240;
        
        // Create a graphics object within the container
        const graphics = scene.add.graphics();

        // Draw the rectangle shape with a border
        graphics.lineStyle(4, 0x000000); // Set the border color and thickness

        graphics.strokeRect(-90, -120, rectangleTileWidth, rectangleTileHeight); // Draw the border

        // Add the graphics object to the container
        rectangleTile.add(graphics);

    
        const colorBox = scene.add.rectangle(0, -92.5, rectangleTileWidth - 10, 45, this.colorBox);
        rectangleTile.add(colorBox);
        
        const titleBox = scene.add.text(0, -50, this.name, {
            fontFamily: 'Arial',
            fontSize: '12pt',
            color: '#000000',
            align: 'center',
            fontStyle: 'bold'
        });
    
        titleBox.setOrigin(0.5);
        rectangleTile.add(titleBox);
    
        const logoProp2 = scene.add.image(0, 20, 'placeholderImage').setDisplaySize(rectangleTileWidth - 10, 100);
        rectangleTile.add(logoProp2);
    
        if(this.price) {
            const priceBox = scene.add.text(0, 95, this.price, {
                fontFamily: 'Arial',
                fontSize: '16pt',
                color: '#000000',
                align: 'center',
                fontStyle: 'bold'
            });
            priceBox.setOrigin(0.5);
            rectangleTile.add(priceBox);
        }
        
        return rectangleTile
    }
}







