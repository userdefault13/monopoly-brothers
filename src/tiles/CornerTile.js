import BaseTile from "./BaseTile";

const CORNER_W_H = 240;

class CornerTile extends BaseTile {
    constructor(position) {
        super(position, CORNER_W_H, CORNER_W_H);
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

export default CornerTile;
