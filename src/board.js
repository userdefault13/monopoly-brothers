import propertyCards from './properties.js';
import { PropertyTile } from './tiles/PropertyTile.js';
//import { Card, chanceCards, communityChestCards } from './card.js';

// Create the game board
function createBoard(graphics) {
  // Set up the board background
  graphics.fillStyle(0x000000);
  graphics.fillRect(0, 0, 2920, 3024);
}

export default createBoard;






// const tiles = [CornerTile, PropertyTile, PropertyTile, PropertyTile, PropertyTile, CornerTile]

// let currentX = 50;
// let currentY = 50;
// tiles.forEach((tile, index)=> {
//   tile.render(currentX, )
//   currentX = tile.width
// })