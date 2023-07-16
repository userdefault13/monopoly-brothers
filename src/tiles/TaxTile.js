import BaseTile from "./BaseTile";
import tax from "../cards/tax";

class TaxTile extends BaseTile {
    constructor(taxConfig) {
        const { index, name, fee} = taxConfig;
        super(index);
        this.name = name;
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
            alert("Tax Tile clicked!");
        });
    }
}

export default TaxTile;






