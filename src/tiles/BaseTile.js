class BaseTile {
    constructor(index, width, height) {
        this.index = index; // 0,1,2,3 .. the order in which the game board moves
        this.width = width;
        this.height = height;
    }
}

export default BaseTile;
