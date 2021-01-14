const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine =Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }

  var b_option ={
    restitution : 0.5
  }
  ball = Bodies.circle(200,200,30,b_option);
  World.add(world,ball);

  ground = Bodies.rectangle(200,350,400,30,option);
  World.add(world,ground);

  //console.log(object1.position.x);


}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}