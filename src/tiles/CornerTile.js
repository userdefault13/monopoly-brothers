import BaseTile from "./BaseTile";
import corners from "../cards/properties";

class CornerTile extends BaseTile {
    constructor(indexr) {
        const {index,  width, height, setPositionX, setPositionY, name, action} = corners[indexr];
        super(index, width, height);
        this.index = index;
        this.width = cornerWidth;
        this.height = cornerHeight;
        this.setPositionX = setPositionX;
        this.setPositionY = setPositionY;
        this.name = name;
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

export default CornerTile;
