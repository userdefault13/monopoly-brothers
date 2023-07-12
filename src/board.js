import Phaser from 'phaser';

// Function to render a square
function renderSquare(graphics, x, y, width, height, color) {
  graphics.fillStyle(color);
  graphics.fillRect(x, y, width, height);
}

// Function to render a rectangle
function renderRectangle(graphics, x, y, width, height, color) {
  graphics.fillStyle(color);
  graphics.fillRect(x, y, width, height);
}

// Function to create the board
export function createBoard(scene, containerX, containerY) {
  const container = scene.add.container(containerX, containerY);

  // Create a graphics object for drawing
  const graphics = scene.add.graphics();

  // Render the square
  const squareX = 0;
  const squareY = 0;
  const squareWidth = 240;
  const squareHeight = 240;
  const squareColor = 0xFF0000; // Red color
  renderSquare(graphics, squareX, squareY, squareWidth, squareHeight, squareColor);

  // Render the rectangles in a row
  const rectangleWidth = 180;
  const rectangleHeight = 240;
  const rectangleColor = 0x00FF00; // Green color
  let currentX = squareWidth + 10; // Start position after the square
  const numRectangles = 9;

  for (let i = 0; i < numRectangles; i++) {
    const rectangleX = currentX;
    const rectangleY = squareY + (squareHeight - rectangleHeight) / 2;
    renderRectangle(graphics, rectangleX, rectangleY, rectangleWidth, rectangleHeight, rectangleColor);
    currentX += rectangleWidth + 10; // Increase the position for the next rectangle
  }

  // Add the graphics object to the container
  container.add(graphics);

   // Rotate the container by 90 degrees
   container.setAngle(360);

  // Update the container's display size based on the drawn objects
  container.setSize(squareWidth + (numRectangles * (rectangleWidth + 10)), squareHeight);

  // Return the container
  return container;
}
