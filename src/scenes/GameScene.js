import Phaser from 'phaser';

import getTiles from '../cards/cardsCombined';
import CornerTile from '../tiles/CornerTile';
import PropertyTile from '../tiles/PropertyTile';


export default class GameScene extends Phaser.Scene {
    constructor ()
    {
        super('GameScene');
    }

    create ()
    {
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

        const rotationAngles = [0, 90, 180, 270];

        const rowWidth = this.scale.width;
        const rowHeight =  240;

        const containerPositions = {
            container0X: this.scale.width/2,
            container0Y: 120,
            container1X: this.scale.width - 120,
            container1Y: this.scale.height/2,
            container2X: this.scale.width/2,
            container2Y: this.scale.height - 120,
            container3X: 120,
            container3Y: this.scale.height/2,
          }
        
          // get tiles data
          const combinedTiles = getTiles()
          console.log(combinedTiles)
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
        
            const rowContainer = this.createRow(tiles, rowWidth, rowHeight);
            rowContainer.setPosition(containerPositions[`container${containerIndex}X`], containerPositions[`container${containerIndex}Y`]);
            rowContainer.setAngle(rotationAngles[containerIndex]); // Set rotation angle dynamically
            this.add.existing(rowContainer);
          })  


    }

    createRow(tiles, rowWidth, rowHeight) {

        const row = this.add.container(0, 0);
        
        const rowTileBackground = this.add.rectangle(0, 0, rowWidth, rowHeight);
        row.add(rowTileBackground);
        
        
        let prevTotalWidth = 0
        tiles.forEach((tile) => {        
            const renderedTile = tile.render(this, 0, 0);
            if (renderedTile) {
                const leftPosition = (((rowWidth/2) * -1) + tile.getWidth()/2);
                
                renderedTile.setPosition(leftPosition + prevTotalWidth, 0)
                row.add(renderedTile)
            } else {
                throw Error('cannot render tile')
            }

            prevTotalWidth = prevTotalWidth + tile.getWidth();
        })

        return row;
    }
}