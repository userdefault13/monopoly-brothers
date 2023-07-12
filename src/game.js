import Phaser from 'phaser';
import { createBoard } from './board.js';

function create() {
  const container1X = 400;
  const container1Y = 400;
  const container2X = 2600;
  const container2Y = 400;
  const container3X = 2600;
  const container3Y = 2600;
  const container4X = 400;
  const container4Y = 2600;

  // Create the first row container
  const rowContainer1 = createBoard(this, container1X, container1Y);
  this.add.existing(rowContainer1);

  // Create the second row container
  const rowContainer2 = createBoard(this, container2X, container2Y);
  rowContainer2.setAngle(90); // Set rotation angle to 90 degrees
  this.add.existing(rowContainer2);

  // Create the third row container
  const rowContainer3 = createBoard(this, container3X, container3Y);
  rowContainer3.setAngle(180); // Set rotation angle to 180 degrees
  this.add.existing(rowContainer3);

  // Create the fourth row container
  const rowContainer4 = createBoard(this, container4X, container4Y);
  rowContainer4.setAngle(270); // Set rotation angle to 270 degrees
  this.add.existing(rowContainer4);
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
