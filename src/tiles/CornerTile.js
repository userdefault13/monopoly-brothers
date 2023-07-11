import BaseTile from "./BaseTile";


class CornerTile extends BaseTile {
    constructor(index, setPositionX, setPositionY, name, action) {
        super(index, width, height);
            this.index = index;
            this.setPositionX = setPositionX;
            this.setPositionY = setPositionY;
            this.width = cornerWidth;
            this.height = cornerHeight;
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
