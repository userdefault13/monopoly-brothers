import { cornersConfig } from "./cards/corners";
import { propertyConfig } from "./cards/properties";
import { railroadConfig } from "./cards/railroads";
import { utilityConfig } from "./cards/utilities";
import { chanceConfig } from "./cards/chance";
import { communityChestConfig } from "./cards/communityChest";
import { taxConfig } from "./cards/tax";

// Rotation angle values in degrees
export const rotationAngles = [0, 90, 180, 270];

const cornersArray = cornersConfig;
const propertyArray = propertyConfig;
const railroadArray = railroadConfig;
const utilityArray = utilityConfig;
const chanceArray = chanceConfig;
const communityChestArray = communityChestConfig;
const taxArray = taxConfig;

const monopolyTiles = [
  0,  // Go
  1,  // Mediterranean Avenue
  2,  // Community Chest
  3,  // Baltic Avenue
  4,  // Income Tax
  5,  // Reading Railroad
  6,  // Oriental Avenue
  7,  // Chance
  8,  // Vermont Avenue
  9,  // Connecticut Avenue
  10, // Jail
  11, // St. Charles Place
  12, // Electric Company
  13, // States Avenue
  14, // Virginia Avenue
  15, // Pennsylvania Railroad
  16, // St. James Place
  17, // Community Chest
  18, // Tennessee Avenue
  19, // New York Avenue
  20, // Free Parking
  21, // Kentucky Avenue
  22, // Chance
  23, // Indiana Avenue
  24, // Illinois Avenue
  25, // B. & O. Railroad
  26, // Atlantic Avenue
  27, // Ventnor Avenue
  28, // Water Works
  29, // Marvin Gardens
  30, // Go To Jail
  31, // Pacific Avenue
  32, // North Carolina Avenue
  33, // Community Chest
  34, // Pennsylvania Avenue
  35, // Short Line
  36, // Chance
  37, // Park Place
  38, // Luxury Tax
  39  // Boardwalk
];

export function createBoard(scene) {
  const squareTileWidth = 240;
  const squareTileHeight = 240;
  const rectangleTileWidth = 180;
  const rectangleTileHeight = 240;

  const rowTileWidth = squareTileWidth + (9 * rectangleTileWidth) - 540;
  const rowTileHeight = 240;
  const rowTile = scene.add.container(0, 0);

  const rowTileBackground = scene.add.rectangle(1200, 120, rowTileWidth, rowTileHeight, 0xCCCCCC);
  rowTileBackground.angle = 0; // Set the initial rotation angle of the rowTileBackground
  rowTile.add(rowTileBackground);

  const squareTile = scene.add.container(0, 0);
  const squareTileBackground = scene.add.rectangle(0, 0, squareTileWidth, squareTileHeight, 0x800080);
  squareTile.add(squareTileBackground);

  const logoProp = scene.add.image(0, 0, 'placeholderImage').setDisplaySize(150, 100);
  squareTile.add(logoProp);

  const squareText = scene.add.text(0, 0, cornersArray[0].name, {
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

     // Get the rotation value of the rowTile in degrees
    const rotationDegrees = rowTileBackground.angle;
    

    // Calculate the rotation index based on rotation degrees
    const rotationIndex = (rotationAngles.indexOf(rotationDegrees) + i) % rotationAngles.length;
      console.log(rotationIndex);
      console.log(rotationDegrees);
      
    // Calculate the tile index based on rotation index and index
    const tileIndex = (rotationIndex + index) % monopolyTiles.length;
    console.log(tileIndex);

    const tileData = getTileData(tileIndex);

    const titleBox = scene.add.text(0, -50, tileData.name, {
      fontFamily: 'Arial',
      fontSize: '16pt',
      color: '#FFFFFF',
      align: 'center',
      fontStyle: 'bold'
    });

    titleBox.setOrigin(0.5);
    rectangleTile.add(titleBox);

    const logoProp2 = scene.add.image(0, 20, 'placeholderImage').setDisplaySize(rectangleTileWidth - 10, 100);
    rectangleTile.add(logoProp2);

    const priceBox = scene.add.text(0, 95, tileData.price, {
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

    console.log(`RowTile Index: ${index}`);
    console.log(`RowTile Rotation: ${rotationIndex}`);
    console.log(`Tile Index: ${tileIndex}`);
    console.log(`Tile Data:`, tileData);
    console.log(`------------------------`);
  }

  // Set positions relative to rowTile
  squareTile.setPosition(squareTileWidth / 2, rowTileHeight / 2);

  return rowTile;
}

function getTileData(tileIndex) {
  let tileData;

  if (tileIndex === 0 || tileIndex === 10 || tileIndex === 20 || tileIndex === 30) {
    tileData = cornersArray[tileIndex];
  } else if (tileIndex === 4 || tileIndex === 38) {
    tileData = taxArray[0];
  } else if (tileIndex === 2 || tileIndex === 17 || tileIndex === 33) {
    tileData = communityChestArray[0];
  } else if (tileIndex === 7 || tileIndex === 22 || tileIndex === 36) {
    tileData = chanceArray[0];
  } else if (tileIndex === 5 || tileIndex === 15 || tileIndex === 25 || tileIndex === 35) {
    tileData = railroadArray[0];
  } else if (tileIndex === 12 || tileIndex === 28) {
    tileData = utilityArray[0];
  } else {
    tileData = propertyArray.find((tile) => tile.index === tileIndex); // Find the tile with matching index
  }

  return tileData;
}

