import Phaser from "phaser";
import CornerTile from "./tiles/CornerTile";

export class Board extends Phaser.Scene {
    constructor() {
        super('board');
    }

    create() {
        //background
        const backgroundGraphic = this.add.graphics();
        backgroundGraphic.fillStyle(0);
        backgroundGraphic.fillRect(0, 0, 2920, 3024);

        // Draw the first row
        var currentX = 50;
        var currentY = 50;
        var numProperties = 9;

        const goCornerRectangle = this.add.rectangle();
        const goCorner = new CornerTile(0);
        goCorner.render(goCornerRectangle, currentX, currentY);
    }
}
