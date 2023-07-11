import BaseTile from "./BaseTile";

class PropertyTile extends BaseTile {
    constructor(index, width, height, setPositionX, setPositionY, name, price, rent, houseCost, hotelCost) {
        super(index, width, height);
            this.name = name;
            this.setPositionX = setPositionX;
            this.setPositionY = setPositionY;
            this.width = propertyWidth;
            this.height = propertyHeight;
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
    }
}

export default PropertyTile;






