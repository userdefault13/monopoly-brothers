import Phaser from "phaser";
import CornerTile from "./tiles/CornerTile";
import PropertyTile from './tiles/PropertyTile.js';


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
        currentX += goCorner.width-30; // Move to the next tile position
        
        // Draw the property tiles
        for (var i = 1; i <= numProperties; i++) {
            const propertyVerticalRectangle = this.add.rectangle();
            const propertyVerticalTile = new PropertyTile(`Property ${i}`, 200, [20, 100, 300, 750, 925, 1100], 150, 150, i);
            propertyVerticalTile.render(propertyVerticalRectangle, currentX, currentY);
            currentX += propertyVerticalTile.width; // Update the currentX position for the next tile
        }

        // Draw the jail property
        const jailCornerRectangle = this.add.rectangle();
        const jailCorner = new CornerTile(0);
        jailCorner.render(jailCornerRectangle, currentX, currentY);
        currentY = 600;

        // Draw the property tiles
        for (var i = 1; i <= numProperties; i++) {
            const propertyHorizontalRectangle = this.add.rectangle();
            const propertyHorizontalTile = new PropertyTile(`Property ${i}`, 200, [20, 100, 300, 750, 925, 1100], 150, 150, i);
            // interchange width and height
            propertyHorizontalTile.width = 240;
            propertyHorizontalTile.height = 180;
            propertyHorizontalTile.render(propertyHorizontalRectangle, currentX, currentY);
            currentY = 240+20; // Update the currentX position for the next tile
        }
        
        
    }
}
