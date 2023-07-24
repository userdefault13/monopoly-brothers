import BaseTile from "./BaseTile";


export default class RailroadTile extends BaseTile {
    constructor(railroadConfig) {
        const { index, name, price, fare} = railroadConfig;
        super(index);
        this.name = name;
        this.price = price;
        this.fare = fare;

        // state
        this.owner = null;
        this.deeds = 0;
    }

    calculateFare() {
        let fareAmount = this.fare;
    
        // Modify fare amount based on property conditions
        if (this.deeds > 0) {
            // Increase fare based on the number of houses
            fareAmount *= Math.pow(2, this.deeds);
        }
    
        return fareAmount;
    }
    
    setOwner(player) {
        this.owner = player;
    }
    
    getOwner() {
        return this.owner;
    }

    render(scene, x, y) {
        // Create container and set (x,y) positions
        const rectangleTile = scene.add.container(x, y);
        const rectangleTileWidth = 180;
        const rectangleTileHeight = 240;
        
        // Create a graphics object within the container
        const graphics = scene.add.graphics();

        // Draw the rectangle shape with a border
        graphics.lineStyle(4, 0x000000); // Set the border color and thickness

        // Draw the border
        graphics.strokeRect(-90, -120, rectangleTileWidth, rectangleTileHeight); 

        // Add the graphics object to the container
        rectangleTile.add(graphics);

        
        const colorBox = scene.add.rectangle(0, -92.5, rectangleTileWidth - 10, 45, this.colorBox);
        rectangleTile.add(colorBox);
        
        const titleBoxY = ["Short\nLine\nRailroad"].includes(this.name) ? -10 : -40;
        const titleBox = scene.add.text(0, titleBoxY, this.name, {
            fontFamily: 'Arial',
            fontSize: '18pt',
            color: '#000000',
            align: 'center',
            fontStyle: 'bold'
        });
        titleBox.setOrigin(0.5);
        rectangleTile.add(titleBox);
    
        const logoProp2 = scene.add.image(0, 20, 'placeholderImage').setDisplaySize(rectangleTileWidth - 10, 100);
        rectangleTile.add(logoProp2);
    
        if(this.price) {
            const priceBox = scene.add.text(0, 95, this.price, {
                fontFamily: 'Arial',
                fontSize: '16pt',
                color: '#000000',
                align: 'center',
                fontStyle: 'bold'
            });
            priceBox.setOrigin(0.5);
            rectangleTile.add(priceBox);
        }
        
        return rectangleTile
    }


}







