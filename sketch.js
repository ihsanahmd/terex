var box;
function setup() {
  createCanvas(400,400);
box=createSprite(300,200,30,10);
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW));
{
  box.position.x= box.position.x+5;

}
drawSprites();
}




