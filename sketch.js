
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world,engine;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var ball1,ball2,ball3,ball4,ball5;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
    roof= new Roof  (500,20,1000,30);
	ball1=new Ball (100,500,20)
	ball2=new Ball (300,500,20)
	ball3=new Ball (500,500,20)
	ball4=new Ball (700,500,20)
	ball5=new Ball (900,500,20)
	rope1=new Rope ( ball1.body,roof.body,-80,0)
	rope2=new Rope ( ball2.body,roof.body,-40,0)
	rope3=new Rope ( ball3.body,roof.body,0,0)
	rope4=new Rope ( ball4.body,roof.body,+40,0)
	rope5=new Rope ( ball5.body,roof.body,+80,0)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites(); 
 
}



