import Phaser from 'phaser';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  backgroundcolor: 0x000000,
  scale: {
    width: 2101,
    height: 2101,
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
    parent: 'stage',
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [GameScene],
};

new Phaser.Game(config);
