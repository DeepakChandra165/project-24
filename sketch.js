
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	ground = new Ground(600,height,1200,20);
	hammer1 = new hammer(100,100);
	stone1 = new stone(300,320,70,70);
	rubber1 = new rubber(350,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  drawSprites();
  ground.display();
  hammer1.display();
  stone1.display();
  rubber1.display();



}



