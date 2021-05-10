
var monkey
var Ground
var obstacle
var banana
var monkey_running_Anim
var obstacle_Image
var banana_Image
var banana_Group
var obstacle_Group
var score = 0;

function preload()
{
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banana_Image = loadImage("banana.png");
  obstacle_Image = loadImage("obstacle.png");
}

function setup()
{
  createCanvas(600,600);

  //creates monkey
  monkey = createSprite(50,-10,20,20);
  monkey.velocityY = 5;
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  //creates ground sprite
  Ground = createSprite(300,560,1300,20);
  Ground.velocityX = -2;
  
  //creates two groups for food and obstacle
  banana_Group = new Group();
  obstacle_Group = new Group();
  
}

function draw()
{
  background("green");

  //code to make the monkey collide with the ground
  monkey.collide(Ground);

  //gravity affect
  monkey.velocityY = monkey.velocityY + 0.8;

  //code for jump when space bar is pressed
  if(keyDown("space"))
  {
    monkey.velocityY = -12;
  }
  if(Ground.x == -10)
  {
    Ground.x = 300; 
  }

  //scoring and displaying the score
  score = score + Math.round(getFrameRate()/60);
  fill("red");
  textAlign(CENTER);
  textSize(20);
  text("Survival Time : " + score ,300,50);

  drawSprites();
  Banana();
  Obstacle();
}

function Banana()
{
  if(frameCount % 80 == 0)
  {
   var y = round(random(100,400));
   banana = createSprite(610,y,20,20);
   banana.velocityX = -5;
   banana.lifetime = 150;
   banana.addImage(banana_Image);
   banana.scale = 0.1;
   banana_Group.add(banana);
  }
}

function Obstacle()
{
  if(frameCount % 200 == 0)
  {
   obstacle = createSprite(610,540,20,20);
   obstacle.velocityX = -5;
   obstacle.lifetime = 150;
   obstacle.addImage(obstacle_Image);
   var size = round(random(1,3));
   
   if(size == 1)
   {
     obstacle.scale = 0.1
   } 
   if(size == 2)
   {
     obstacle.scale = 0.2
     obstacle.y = 520;
   }
   if(size == 3)
   {
     obstacle.scale = 0.3
     obstacle.y = 500;
   }
   obstacle_Group.add(obstacle);
  }
}





