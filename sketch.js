const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

var engine, world,object;
var box1,box2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;
 box1=new Box(200,300,50,50); 
 box2 = new Box(230,100,50,100);
ground=new Ground(200,height,400,20 );  
}



function draw() {
  background(255,255,0);   
  Engine.update(engine);                  
 box1.display();
 box2.display();


}