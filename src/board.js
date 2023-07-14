import { cornersConfig } from "./cards/corners";
import { propertyConfig } from "./cards/properties";
import { railroadConfig } from "./cards/railroads"; 
import { utilityConfig } from "./cards/utilities";
import { chanceConfig } from "./cards/chance";
import { communityChestConfig } from "./cards/communityChest";
import { taxConfig } from "./cards/tax";

// Rotation angle values
export const rotationAngles = [0, 90, 180, 270];

const cornersArray = cornersConfig;
const propertyArray = propertyConfig;
const railroadArray = railroadConfig;
const utilityArray = utilityConfig;
const chanceArray = chanceConfig;
const communityChestArray = communityChestConfig;
const taxArray = taxConfig;

export function createBoard(scene) {
  const squareTileWidth = 240;
  const squareTileHeight = 240;
  const rectangleTileWidth = 180;
  const rectangleTileHeight = 240;

  const rowTileWidth = squareTileWidth + (9 * rectangleTileWidth) - 540;
  const rowTileHeight = 240;
  const rowTile = scene.add.container(0, 0);

  const rowTileBackground = scene.add.rectangle(1200, 120, rowTileWidth, rowTileHeight, 0xCCCCCC);
  rowTile.add(rowTileBackground);

  const squareTile = scene.add.container(0, 0);
  const squareTileBackground = scene.add.rectangle(0, 0, squareTileWidth, squareTileHeight, 0x800080);
  squareTile.add(squareTileBackground);

  const logoProp = scene.add.image(0, 0, 'placeholderImage').setDisplaySize(150, 100);
  squareTile.add(logoProp);

  const squareText = scene.add.text(0, 0, cornersArray[2].name, {
    fontFamily: 'Arial',
    fontSize: '16pt',
    color: '#FFFFFF',
    align: 'center',
    fontStyle: 'bold'
  });
  squareText.setOrigin(0.5);
  squareTile.add(squareText);

  rowTile.add(squareTile);

  for (let i = 0; i < 9; i++) {
    const rectangleTile = scene.add.container(0, 0);
    const rectangleTileBackground = scene.add.rectangle(0, 0, rectangleTileWidth, rectangleTileHeight, 0x400040);
    rectangleTile.add(rectangleTileBackground);
    
    const colorBox = scene.add.rectangle(0, -92.5, rectangleTileWidth - 10, 45, 0xFF0000);
    rectangleTile.add(colorBox);

    const index = i; // Store the index value of the rectangleTile

    // Get the rotation value of the rowTile
    const rotation = rowTile.rotation;

    const titleBox = scene.add.text(0, -50, propertyArray[index].name, {
      fontFamily: 'Arial',
      fontSize: '16pt',
      color: '#FFFFFF',
      align: 'center',
      fontStyle: 'bold'
    });

    let tileData;
    if (rotation === 0 || rotation === Math.PI) {
      tileData = propertyArray[index];
    } else if (rotation === Math.PI / 2 || rotation === (3 * Math.PI) / 2) {
      tileData = utilityArray[index];
    } else if (rotation === Math.PI / 4 || rotation === (5 * Math.PI) / 4) {
      tileData = railroadArray[index];
    } else if (rotation === (3 * Math.PI) / 4 || rotation === (7 * Math.PI) / 4) {
      tileData = chanceArray[index];
    } else {
      tileData = communityChestArray[index];
    }

    titleBox.setOrigin(0.5);
    rectangleTile.add(titleBox);

    const logoProp2 = scene.add.image(0, 20, 'placeholderImage').setDisplaySize(rectangleTileWidth - 10, 100);
    rectangleTile.add(logoProp2);

    const priceBox = scene.add.text(0, 95, propertyArray[index].price, {
      fontFamily: 'Arial',
      fontSize: '16pt',
      color: '#FFFFFF',
      align: 'center',
      fontStyle: 'bold'
    });
    priceBox.setOrigin(0.5);
    rectangleTile.add(priceBox);

    rowTile.add(rectangleTile);

    // Set position of each rectangleTile
    rectangleTile.setPosition((squareTileWidth + rectangleTileWidth * (index + 1)) - 90, rowTileHeight / 2);
  }

  // Set positions relative to rowTile
  squareTile.setPosition(squareTileWidth / 2, rowTileHeight / 2);

  return rowTile;
}
