class BaseTile {
    constructor(position, width, height) {
        this.position = position; // 0,1,2,3 .. the order in which the game board moves
        this.width = width;
        this.height = height;
    }
}

export default BaseTile
