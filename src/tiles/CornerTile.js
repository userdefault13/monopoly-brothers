import BaseTile from "./BaseTile";

const CORNER_W_H = 120*2;

class CornerTile extends BaseTile {
    constructor(position) {
        super(position, CORNER_W_H, CORNER_W_H);
    }

    render(graphics, x, y) {
        // graphics.lineStyle(2, 0x000000);
        // graphics.fillStyle(0x3498db);
        // graphics.fillRect(x, y, this.width, this.height);
        // graphics.strokeRect(x, y, this.width, this.height);
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
