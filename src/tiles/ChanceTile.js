import BaseTile from "./BaseTile"; 

class ChanceTile extends BaseTile {
    constructor(index, setPositionX, setPositionY, title, description, action) {
        super(index, width, height);
            this.index = index;
            this.setPositionX = setPositionX;
            this.setPositionY = setPositionY;
            this.width = cornerWidth;
            this.height = cornerHeight;
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

export default ChanceTile;