import BaseTile from "./BaseTile";
import communityChestCards from "../cards/communityChest";

class CommiunityChestTile extends BaseTile {
    constructor(communityChestConfig) {
    const {index, title, description, action} = communityChestConfig
        super(index);
            this.index = index;
            this.title = title;
            this.description = description;
            this.action = action;
    }

    render(graphics, x, y) {
        graphics.displayWidth = cornerWidth;
        graphics.displayHeight = cornerHeight;
        graphics.setPosition(x,y);
        graphics.setFillStyle(0x3498db);
        graphics.setInteractive();
        graphics.on("pointerdown", () => {
            alert('FUCK YEAH')
        })
    }
}

export default CommiunityChestTile;