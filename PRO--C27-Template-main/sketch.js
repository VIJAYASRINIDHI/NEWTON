
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(450,100,300,20);
	bob1 = new bob(350,400,50)
	bob2 = new bob(400,400,50)
	bob3 = new bob(450,400,50)
	bob4 = new bob(500,400,50)
	bob5 = new bob(550,400,50)
	
	
	rope1=new rope(bob1.body,roofObject.body,x350,y100)
	rope2=new rope(bob2.body,roofObject.body,x400,y100)
	rope3=new rope(bob3.body,roofObject.body,x450,y100)
	rope4=new rope(bob4.body,roofObject.body,x500,y100)
	rope5=new rope(bob5.body,roofObject.body,x550,y100)
	Engine.run(engine);
	
	rope3=new rope(bob3.body,roofObject.body,450,100)
}


function draw() {
  rectMode(CENTER);
  background(rgb(240,128,128));
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 drawSprites();
}
function keyPressed(){
	if (keyCode ===UP_ARROW ){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155});
	}
}





