
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(580, 365, 100, 10);
  paper = new Paper(130, 290, 10);

 ground = new Ground(width/2, 380, width, 20);
 
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
	text("This Game will teach you the importance of throwing away your trash.", 50, 200)
	text("        Press Up Arrow to Start, and Up to throw away the trash.", 50, 240)
	
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }

  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
	paper.display();
	ground.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
