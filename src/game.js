import Phaser from 'phaser';
import { createBoard, rotationAngles } from './board';

function create() {
  const container1X = 400;
  const container1Y = 2022;
  const container2X = 640;
  const container2Y = 160;
  const container3X = 2500;
  const container3Y = 400;
  const container4X = 2260;
  const container4Y = 2260;

  // Create the first row container
  const rowContainer1 = createBoard(this);
  rowContainer1.setPosition(container1X, container1Y);
  this.add.existing(rowContainer1);

  // Create the second row container
  const rowContainer2 = createBoard(this);
  rowContainer2.setPosition(container2X, container2Y);
  rowContainer2.setAngle(rotationAngles[1]); // Set rotation angle dynamically
  this.add.existing(rowContainer2);

  // Create the third row container
  const rowContainer3 = createBoard(this);
  rowContainer3.setPosition(container3X, container3Y);
  rowContainer3.setAngle(rotationAngles[2]); // Set rotation angle dynamically
  this.add.existing(rowContainer3);

  // Create the fourth row container
  const rowContainer4 = createBoard(this);
  rowContainer4.setPosition(container4X, container4Y);
  rowContainer4.setAngle(rotationAngles[3]); // Set rotation angle dynamically
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
