const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,rect1,rect2,rect3,ground,block4,DBimage;

function preload(){
DBimage = loadImage("dustbingreen.png")

}


function setup() {
  createCanvas(1200,600);
  engine = Engine.create()
  world = engine.world
  ball = new Paper()
  ground = new Block(600,590,1200,20)
  rect1 = new Block(1100,530,20,100)
  rect2 = new Block(990,570,200,20)
  rect3 = new Block(880,530,20,100)
  
  
 /*  block4 = createSprite(990,420,200,2)
  block4.addImage(DBimage)
  block4.scale = 1 */
 
}

function draw() {
  background("skyblue");
  Engine.update(engine)  
 ball.display()
fill("brown")
ground.display()
fill("yellow")
rect1.display()
rect3.display()
rect2.display()
//drawSprites();
imageMode(CENTER)
image(DBimage,990,480,299,200)
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-87})
  }
}