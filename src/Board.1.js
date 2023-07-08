import Phaser from "phaser";
import CornerTile from "./tiles/CornerTile";
import PropertyTile from './tiles/PropertyTile.js';
import ChanceTile from "./tiles/ChanceTile";
import CommunityChestTile from "./tiles/CommunityChestTile";

export class Board extends Phaser.Scene {
    constructor() {
        super('board');
    }

    create() {
        // Background
        const backgroundGraphic = this.add.graphics();
        backgroundGraphic.fillStyle(0);
        backgroundGraphic.fillRect(0, 0, 2920, 3024);

        // Draw the first row
        var currentX = 50;
        var currentY = 50;
        var numProperties = 9;

        // Draw the corner tile
        const goCornerRectangle = this.add.rectangle();
        const goCorner = new CornerTile(0);
        goCorner.render(goCornerRectangle, currentX, currentY);

        
        // Draw the property tiles
        for (var i = 1; i <= numProperties; i++) {
            currentX += goCorner.width; // Move to the next tile position
            const propertyRectangle = this.add.rectangle();
            const propertyTile = new PropertyTile(`Property ${i}`, 200, [20, 100, 300, 750, 925, 1100], 150, 150, i); // Replace the arguments with appropriate values
            propertyTile.render(propertyRectangle, currentX, currentY);
            currentX += propertyTile.width; // Update the currentX position for the next tile
        }
        
    }
}
