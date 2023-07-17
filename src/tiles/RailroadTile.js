import BaseTile from "./BaseTile";
import { railroads } from "../cards/railroads";

export default class RailroadTile extends BaseTile {
    constructor(railroadConfig) {
        const { index, name, price, fare} = railroadConfig;
        super(index);
        this.name = name;
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

         // Add black border
         graphics.lineStyle(2, 0x000000);
         graphics.strokeRect(0, 0, this.width, this.height);
 
        graphics.setPosition(x, y);
        graphics.setFillStyle(0xffffff);
        graphics.setInteractive();
        graphics.on("pointerdown", () => {
            alert("Railroad Tile clicked!");
        });
    }
}







