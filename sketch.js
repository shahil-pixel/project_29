const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15
,block16;
var polygon,slingshot,polygonImage;

function preload(){

polygonImage=loadImage("polygon.png");
}


function setup() {
   createCanvas(800,400);

   engine = Engine.create();
   world = engine.world;
  
  //level 1
  block1 = new Box(330,275,30,40);
  block2 = new Box(360,275,30,40);
  block3 = new Box(390,275,30,40);
  block4 = new Box(420,275,30,40);
  block5 = new Box(450,275,30,40);
  block6 = new Box(480,275,30,40);
  block7 = new Box(300,275,30,40);
  

  //level 2
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level 3
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top
  block16 = new Box(390,155,30,40);

 polygon = Bodies.circle(50,200,20);
 polygon.shapeColor="yellow";
 World.add(world,polygon);

 slingshot = new Slingshot(polygon,{x:100,y:200});

  ground = new Ground(400,400,900,50);
  stand = new Ground(390,305,230,20);
}

function draw() {
  background("black");
  stand.display(); 

  ground.display();
  
  fill("lime")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  fill("peach");
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  fill("cyan");
  block13.display()
  block14.display()
  block15.display()
  fill("gray");
  block16.display()
  
  //ellipseMode(RADIUS);
  //fill("yellow");
  //ellipse(polygon.position.x,polygon.position.y,20)
 
  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);
  slingshot.display()


  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(this.polygon, {x:mouseX , y:mouseY});

}


function mouseReleased(){
  slingshot.fly();
}