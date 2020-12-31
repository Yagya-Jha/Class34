const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var world,engine;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;
var ball,rope,ground;

function setup(){
var canvas = createCanvas(1200,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(width/2,height,width,20);
ball = new Ball(500,200,50,50,80);
rope = new Rope(ball.body,{x:500,y:150});
b1 = new Box(700,740,100,100);
b2 = new Box(700,640,100,100);
b3 = new Box(700,540,100,100);
b4 = new Box(700,440,100,100);
b5 = new Box(700,340,100,100);
b6 = new Box(700,240,100,100);

b7 = new Box(800,740,100,100);
b8 = new Box(800,640,100,100);
b9 = new Box(800,540,100,100);
b10 = new Box(800,440,100,100);
b11 = new Box(800,340,100,100);
b12 = new Box(800,240,100,100);
}

function draw(){
    background(180);
    Engine.update(engine);
    rectMode(CENTER);
    ground.display();
    rope.display();
    ball.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
   }

   function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}