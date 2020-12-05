
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	dustbinimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(200,400,70,70)
ground = new Ground(800,650,1600,20)
bottom = new Dustbin(dustbinimg,1200,620,200,20)
left = new Dustbin(1100,570,20,100)
right = new Dustbin(1300,570,20,100)


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  paper.display();
  ground.display();
  bottom.display();
  left.display();
  right.display();
	
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
	}
}

