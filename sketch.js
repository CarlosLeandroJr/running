var runner, path, leftEdge, rightEdge;
var runnerImg, pathImg;
var edges;

function preload(){
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  leftEdge = createSprite(0, 0, 100, 800);
  leftEdge.visible = false;

  rightEdge = createSprite(400, 400, 100, 800);
  rightEdge.visible = false;

  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(180,340);
  runner.addAnimation("jaxon", runnerImg);
  runner.scale = 0.05
  edges = createEdgeSprites()
}

function draw() {
  
  if (path.y > 400) {
  path.y = height/2;

  }

  runner.x = World.mouseX;
  runner.y = World.mouseY;

  runner.collide(edges);
  runner.collide(leftEdge);
  runner.collide(rightEdge);
  
  background(0);
  drawSprites();
}
