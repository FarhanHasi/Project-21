
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;

var leftWall; 
var rightWall;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	var ball_options = {

		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	var ground_options = {  
		isStatic: true
	};

	ground = Bodies.rectangle(400,650,800,20,ground_options);
	World.add(world,ground);

	leftWall = Bodies.rectangle(1000,650,20,100,ground_options);
	World.add(world,leftWall);

	rightWall = Bodies.rectangle(1000,650,20,100,ground_options);
	World.add(world,rightWall);

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	

	rectMode(CENTER);
	ellipseMode(RADIUS);

	//Create the Bodies Here.

	

}




function draw() {
  
  background(51);
  Engine.update(engine);

fill('red');
 ellipse(ball.position.x, ball.position.y,20);
 fill('yellow');
 rect(ground.position.x,ground.position.y,800,20);
 rect(ground.position.x+150,ground.position.y-60,20,100);
 rect(ground.position.x+280,ground.position.y-60,20,100);

 
 
}

function keyPressed(){

	
	if(keyCode === UP_ARROW){

		console.log("enter");
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}
}


