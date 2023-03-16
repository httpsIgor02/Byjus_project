var pacman, lowerWall, upperWall, leftWall

function setup() {
  createCanvas(1200, 550);
  
  pacman= createSprite(50,50);
  lowerWall= createSprite(550,450,1200,40);
  upperWall= createSprite(550,20,1200,40);
  leftWall= createSprite(15,235,40,390);

}

function draw() {
  // Fill the canvas with light gray, covering up previous images
  background(220);

  // Set the fill color to dark gray
  fill(50);
  // Draws a circle that follows the mouse
  if (keyDown("right")){
    pacman.x +=5
  }

  if (keyDown("left")){
    pacman.x -=5
  }

  if (keyDown("up")){
    pacman.y -=5
  }

  if (keyDown("down")){
    pacman.y +=5
  }
  

  drawSprites();
}