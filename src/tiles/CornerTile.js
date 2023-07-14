import BaseTile from "./BaseTile";
import { corners } from "../cards/corners";

export default class CornerTile extends BaseTile {
    constructor(cornerConfig) {
        const { index, name, action} = cornerConfig;
        super(index);
        this.index = index;
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


