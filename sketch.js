
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,140,300,30);
	bob_1 = new Bob(300,400,25);
	bob_2 = new Bob(350,400,25);
	bob_3 = new Bob(400,400,25);
	bob_4 = new Bob(450,400,25);
	bob_5 = new Bob(500,400,25);

	rope_1 = new Rope(bob_1.body,roof.body,-100,0);
	rope_2 = new Rope(bob_2.body,roof.body,-50,0);
	rope_3 = new Rope(bob_3.body,roof.body,0,0);
	rope_4 = new Rope(bob_4.body,roof.body,50,0);
	rope_5 = new Rope(bob_5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope_1.display();
  rope_2.display();
  rope_3.display();
  rope_4.display();
  rope_5.display();

  roof.display();

  bob_2.display();
  bob_1.display();
  bob_3.display();
  bob_4.display();
  bob_5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob_1.body,bob_1.body.position,{x:-50,y:-50});
	}
}




