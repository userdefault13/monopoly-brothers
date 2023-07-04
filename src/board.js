import propertyCards from './properties.js';
//import { Card, chanceCards, communityChestCards } from './card.js';

// Create the game board
function createBoard(graphics) {
  // Set up the board background
  graphics.fillStyle(0x000000);
  graphics.fillRect(0, 0, 2920, 3024);

  // Define tile sizes
  var cornerTileSize = 120*2;
  var propertyTileWidth = 90*2;
  var propertyTileHeight = 120*2;

  // Draw the first row
  var startX = 50;
  var startY = 50;
  var numProperties = 9;
  var rowHeight = propertyTileHeight;
  var rowWidth = cornerTileSize + (numProperties * propertyTileWidth) + cornerTileSize;

  // Draw the corner tile
  graphics.lineStyle(2, 0x000000);
  graphics.fillStyle(0x3498db);
  graphics.fillRect(startX, startY, cornerTileSize, cornerTileSize);
  graphics.strokeRect(startX, startY, cornerTileSize, cornerTileSize);
  
  // Draw property tiles 1-9
  for (var i = 0; i < numProperties; i++) {
    var x = startX + cornerTileSize + (i * propertyTileWidth);
    var y = startY;
    
    graphics.lineStyle(2, 0x000000);
    graphics.fillStyle(0xffffff);
    graphics.fillRect(x, y, propertyTileWidth, propertyTileHeight);
    graphics.strokeRect(x, y, propertyTileWidth, propertyTileHeight);
    
    displayPropertyNames(graphics, propertyCards, startX, startY, cornerTileSize, propertyTileWidth, propertyTileHeight);
  }

  // Draw the corner tile
  startX = startX + cornerTileSize + (numProperties * propertyTileWidth);
  graphics.lineStyle(2, 0x000000);
  graphics.fillStyle(0x3498db);
  graphics.fillRect(startX, startY, cornerTileSize, cornerTileSize);
  graphics.strokeRect(startX, startY, cornerTileSize, cornerTileSize);

  // Draw the second row 10 times
  for (var row = 0; row < 9; row++) {
    startY += rowHeight; // Move to the next row
    startX = 50; // Reset the startX position for each row

    // Draw the property tile
    graphics.lineStyle(2, 0x000000);
    graphics.fillStyle(0xffffff);
    graphics.fillRect(startX, startY, propertyTileHeight, propertyTileWidth);
    graphics.strokeRect(startX, startY, propertyTileHeight, propertyTileWidth);

    

    // Draw the blank spaces
    for (var i = 0; i < numProperties; i++) {
      startX += propertyTileWidth;
      graphics.lineStyle(0, 0x000000);
      graphics.fillStyle(0x000000);
      graphics.fillRect(startX + 30*2, startY, propertyTileWidth, propertyTileWidth);
      graphics.strokeRect(startX, startY, propertyTileHeight);
    }
    
    // Draw the property tile
    startX += propertyTileWidth;
    graphics.lineStyle(2, 0x000000);
    graphics.fillStyle(0xffffff);
    graphics.fillRect(startX + 30*2, startY, propertyTileHeight, propertyTileWidth);
    graphics.strokeRect(startX + 30*2, startY, propertyTileHeight, propertyTileWidth);
    
    // Update the row height for the next row
    rowHeight = 90*2;
  }

  // Repeat Row 1 at the end
  startY += rowHeight; // Move to the next row
  startX = 50; // Reset the startX position for Row 1

  // Draw the corner tile
  graphics.lineStyle(2, 0x000000);
  graphics.fillStyle(0x3498db);
  graphics.fillRect(startX, startY, cornerTileSize, cornerTileSize);
  graphics.strokeRect(startX, startY, cornerTileSize, cornerTileSize);

  // Draw the property tiles
  for (var i = 0; i < numProperties; i++) {
    var x = startX + cornerTileSize + (i * propertyTileWidth);
    var y = startY;

    graphics.lineStyle(2, 0x000000);
    graphics.fillStyle(0xffffff);
    graphics.fillRect(x, y, propertyTileWidth, propertyTileHeight);
    graphics.strokeRect(x, y, propertyTileWidth, propertyTileHeight);
  }

  // Draw the corner tile
  startX = startX + cornerTileSize + (numProperties * propertyTileWidth);
  graphics.lineStyle(2, 0x000000);
  graphics.fillStyle(0x3498db);
  graphics.fillRect(startX, startY, cornerTileSize, cornerTileSize);
  graphics.strokeRect(startX, startY, cornerTileSize, cornerTileSize);

  // Display property names on tiles

  // Draw other game elements, such as properties, icons, etc.
  // Add additional code here to draw custom elements on the board
}

// Display property names on tiles
function displayPropertyNames(graphics, propertyCards, startX, startY, cornerTileSize, propertyTileWidth, propertyTileHeight) {
  graphics.lineStyle(2, 0x000000);

  for (var i = 0; i < 9; i++) {
    var x = startX + cornerTileSize + (i * propertyTileWidth);
    var y = startY;

    graphics.fillStyle(0xffffff);
    graphics.fillRect(x, y, propertyTileWidth, propertyTileHeight);
    graphics.strokeRect(x, y, propertyTileWidth, propertyTileHeight);

    var propertyName = propertyCards[i].name;

    var text = graphics.scene.add.text(x + propertyTileWidth / 2, y + propertyTileHeight / 2, propertyName, {
      font: '12px Arial',
      fill: '#000000',
      align: 'center'
    });
    text.setFontStyle('100');
    text.setOrigin(.5);
  }
}

export default createBoard;
