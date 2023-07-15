import Phaser from 'phaser';
import { createRow } from './board';
import getTiles from './cards/cardsCombined';
import CornerTile from './tiles/CornerTile';
import PropertyTile from './tiles/PropertyTile';

const rows = [
  [
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
  ],
  [
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
  ],
  [
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

  ],
  [
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
  ]
]

// Rotation angle values in degrees
export const rotationAngles = [0, 90, 180, 270];

function create() {
  const containerPositions = {
    container0X: 1500,
    container0Y: 0,
    container1X: 1500,
    container1Y: 500,
    container2X: 1500,
    container2Y: 1000,
    container3X: 1500,
    container3Y: 1500
  }

  // get tiles data
  const combinedTiles = getTiles()

  // create rows
  rows.forEach((rowGroup, containerIndex) => {
    // for each row, create their respective tile class
    const tiles = rowGroup.map(tileIndex => {
      const tileConfig = combinedTiles[tileIndex];

      if(tileConfig.type === "corner") {
        return new CornerTile(tileConfig)
      } else {
        return new PropertyTile(tileConfig);
      }
    })

    const rowContainer = createRow(this, tiles);
    rowContainer.setPosition(containerPositions[`container${containerIndex}X`], containerPositions[`container${containerIndex}Y`]);
    // rowContainer.setAngle(rotationAngles[containerIndex]); // Set rotation angle dynamically
    rowContainer.setAngle(0); // Set rotation angle dynamically
    this.add.existing(rowContainer);
  })  
}

const config = {
  type: Phaser.AUTO,
  width: 3000,
  height: 3000,
  scene: {
    create: create
  }
};

const game = new Phaser.Game(config);
