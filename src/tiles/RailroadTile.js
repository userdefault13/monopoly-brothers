import BaseTile from "./BaseTile";

class RailroadTile extends BaseTile {
    constructor(config) {
        const { index, width, height, setPositionX, setPositionY, name, price, fare} = config;
        super(index, width, height);
        this.name = name;
        this.setPositionX = setPositionX;
        this.setPositionY = setPositionY;
        this.width = propertyWidth;
        this.height = propertyHeight;
        this.price = price;
        this.fare = fare;

        // state
        this.owner = null;
        this.deeds = 0;
    }

    calculateFare() {
        let fareAmount = this.fare;
    
        // Modify fare amount based on property conditions
        if (this.deeds > 0) {
            // Increase fare based on the number of houses
            fareAmount *= Math.pow(2, this.deeds);
        }
    
        return fareAmount;
    }
    
    setOwner(player) {
        this.owner = player;
    }
    
    getOwner() {
        return this.owner;
    }

    render(graphics, x, y) {
        // Add rendering logic for property tiles
        graphics.displayWidth = this.width;
        graphics.displayHeight = this.height;
        graphics.setPosition(x, y);
        graphics.setFillStyle(0xffffff);
        graphics.setInteractive();
        graphics.on("pointerdown", () => {
            alert("Railroad Tile clicked!");
        });
    }
}

export default RailroadTile;






