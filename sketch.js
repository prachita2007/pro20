var car,wall ;
var bullet,speed,weight;








function setup() {

  speed random (55,90)
  weight random (400,1500)

  thickness=random(22,83)

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed random()
  weight random()
  wall=createSprite(1200,200,thickness, height/2);

car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60, height/2)
}

function draw() {
  background(255,255,255);  




if(wall.x car .x   <  (car.width+wall.width)/2){
}
 car.velocityX=0
 var deormation=0.5 * weight * speed* speed/22509;
 if(deformation<180 && deformation>100){
 }
 car.shapeColor=color(255,0,0);
 }
 if(deformation<100)
 {
  car.shapeColor=color(0,255,0);
 }
 }
  drawSprites();
}
function hasCollided( 1bullet, 1wall)
{
 bulletrightEdge=1bullet.x +1bullet.width;
 wallLeftEdge=lwall.x;
 if (bulletRightEdge>=wallLeftEdge)
 {
  reture true 
 }
 ireturn false;

}

if(hasCollided(bullet,wall))
{
   bullrt.velocity=0;
var  damage=0.5 * weight * speed* speed/ (thickness)
{

}







if(damage>10)
{
wall.shapeColor=color(255,0,0);

}
}