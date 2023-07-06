import Phaser from "phaser";
import createBoard from './board.js';
import { Board } from "./Board.1.js";

// Initialize the game
var config = {
    type: Phaser.AUTO,
    width: 3920,
    height: 3024,
    scene: [Board]
};

var game = new Phaser.Game(config);

function create() {
    var graphics = this.add.graphics();
    createBoard(graphics);
}


