
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,d1,d2,d3
function preload()
{
	
}

function setup() {
	createCanvas(800, 520);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground (400,500,800,10)
ball=new Ball (100,490,10,10)
d1=new Box(600,450,10,100)
d2=new Box(695,495,180,10)
d3=new Box(780,450,10,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ground.display();
  ball.display();
  d1.display();
  d2.display();
  d3.display();

 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{
			x:13,y:-13
		})
	}
}

