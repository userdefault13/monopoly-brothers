import BaseTile from "./BaseTile";
import utilities from "../cards/utilities";

class UtilityTile extends BaseTile {
    constructor(utilityConfig) {
        const { index, name, price, fee} = utilityConfig;
        super(index);
        this.name = name;
        this.price = price;
        this.fee = fee;

        // state
        this.owner = null;
        this.deeds = 0;
    }

    calculateFee() {
        let feeAmount = this.fee;
    
        // Modify fare amount based on property conditions
        if (this.deeds > 0) {
            // Increase fare based on the number of houses
            feeAmount *= Math.pow(2, this.deeds);
        }
    
        return feeAmount;
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
            alert("Utility Tile clicked!");
        });
    }
}

export default UtilityTile;






