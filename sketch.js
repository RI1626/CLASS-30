const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruitcon;
var rabbit,bg,cut,food;



function preload(){
  rabbit = loadImage("Rabbit-01.png")
  
  food = loadImage("melon.png")
  bg = loadImage("background.png")

}



function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);


    bunny = createSprite(250,640,10,10)
    bunny.addImage(rabbit)
    bunny.scale=0.2
    
  rope=new Rope(6,{x:245,y:30})

  var fruitOptions={density:0.001}
  fruit = Bodies.circle(300,300,15,fruitOptions)

  Matter.Composite.add(rope.body,fruit)
  
  fruitcon = new Link(rope,fruit)
  button = createImg("cut_button.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop)


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  imageMode(CENTER);
 
}

function draw() 
{
  background(51);
  image(bg,width/2,height/2,500,700)
  ground.show();
  rope.show();
  
  
  Engine.update(engine);
  image( food,fruit.position.x,fruit.position.y,60,60)
  

 drawSprites();
   
}

function drop()
{
rope.break()
fruitcon.detach()
  fruitcon=null

}