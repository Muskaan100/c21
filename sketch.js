var movingRect, fixedRect ;
var square1 ,  square2 ; 

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(600, 200, 50, 50);
  fixedRect=createSprite(400, 200, 50, 50);
  square1 = createSprite(200,100,40,40);
  square2 = createSprite(600,100,40,40);
  square1.velocityX = 3; 
  square2.velocityX =-3;
  square1.shapeColor = "pink";
  
}

function draw() {
  background("black");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
     && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }
  bounceOff(square1,square2);
  
  drawSprites();
}

