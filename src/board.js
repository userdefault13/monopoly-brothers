import { cornersConfig } from "./cards/corners";
import { propertyConfig } from "./cards/properties";
import { railroadConfig } from "./cards/railroads";
import { utilityConfig } from "./cards/utilities";
import { chanceConfig } from "./cards/chance";
import { communityChestCards } from "./cards/communityChest";
import { taxConfig } from "./cards/tax";
import combinedTiles from "./cards/cardsCombined"


const cornersArray = cornersConfig;
const propertyArray = propertyConfig;
const railroadArray = railroadConfig;
const utilityArray = utilityConfig;
const chanceArray = chanceConfig;
const taxArray = taxConfig;


export function createRow(scene, tiles) {
  // 1 square (corner) + 9 rectangles (properties)
  const rowTileWidth = 240 + (9 * 180);
  const rowTileHeight = 240;
  const rowTile = scene.add.container(0, 0);

  const rowTileBackground = scene.add.rectangle(0, 0, rowTileWidth, rowTileHeight, 0xCCCCCC);
  rowTile.add(rowTileBackground);

  
  let prevTileWidth = 0
  tiles.forEach((tile, index) => {
    
    //TODO: 0,0 keeps adding tiles to the center of the row
    // we need to calculate far left, then increment using INDEX
    const centerOfContainerX = (((rowTileWidth / 2) - (tile.width/2)) * -1) + (index * tile.width);
    
    const renderedTile = tile.render(scene, centerOfContainerX, 0);
    if(renderedTile){
      console.log(tile)
      rowTile.add(renderedTile)
    }
  })

  return rowTile;
}
           
