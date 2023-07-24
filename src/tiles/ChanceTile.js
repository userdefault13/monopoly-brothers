import BaseTile from "./BaseTile"; 
import chance from "../cards/chance";

export default class ChanceTile extends BaseTile {
    constructor(chanceCards) {
        const {index, title, description, action} = chanceCards;
        super(index);
            this.index = index;
            this.title = title;
            this.description = description;
            this.action = action;
    }

    render(graphics, x, y) {
        graphics.displayWidth = this.width;
        graphics.displayHeight = this.height;
        graphics.setPosition(x,y);
        graphics.setFillStyle(0x3498db);
        
        graphics.setInteractive();
        graphics.on("pointerdown", () => {
            alert('FUCK YEAH')
        })
    }
}

