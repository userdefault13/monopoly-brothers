import BaseTile from "./BaseTile";
import { corners } from "../cards/corners";

const squareTileWidth = 240;
const squareTileHeight = 240;

export default class CornerTile extends BaseTile {
    constructor(cornerConfig) {
        const { index, name, action} = cornerConfig;
        super(index, squareTileWidth, squareTileHeight);
        this.index = index;
        this.name = name;
        this.action = action;
    }

    render(scene, x, y) {
        const squareTile = scene.add.container(x, y);
        const squareTileBackground = scene.add.rectangle(0, 0, squareTileWidth, squareTileHeight, 0x800080);
        
        const logoProp = scene.add.image(0, 0, 'placeholderImage').setDisplaySize(150, 100);

        const squareText = scene.add.text(0, 0, this.name, {
          fontFamily: 'Arial',
          fontSize: '16pt',
          color: '#FFFFFF',
          align: 'center',
          fontStyle: 'bold'
        });

        squareText.setOrigin(0.5);
        squareTile.add(squareTileBackground);
        squareTile.add(logoProp);
        squareTile.add(squareText);
        return squareTile
    }
}


