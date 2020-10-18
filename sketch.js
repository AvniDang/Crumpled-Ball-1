
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	rectMode(CENTER)
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,300, 20);
	dustbin = new DustBin(670, 670, 200, 20);
	ground = new Ground(0,700,1600,20);

	Matter.Engine.run(engine);

	

}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paper.display();
  ground.display();
  
  drawSprites();
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 12,
		y: -20
	  });
	}
  }

