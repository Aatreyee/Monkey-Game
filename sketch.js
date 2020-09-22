var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime;

function preload(){
  
  
  monkey_running = loadAnimation("monkey_1.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png",
"monkey_2.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,350,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground);
}


function draw() {
  
  background("white");
  
   if(keyDown("space")){
     monkey.velocityY=-12 ; 
   }
    monkey.velocityY = monkey.velocityY + 0.8;    

    monkey.collide(ground);  
  if (ground.x<0 ){
      ground.x = ground.width/2;
      }
  
  
  stroke("white");
  textSize=20;
  fill("white");
  text("Score:"+score,350,50);
  
  stroke("black");
  textSize=20;
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+survivalTime,100,50);
  
  obstacle();
  banana();
  drawSprites();
}

function banana(){
  if (frameCount % 80 === 0){
    var banana = createSprite(280,56,78,56);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -6;
    banana.y = Math.round(random(120,250));
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    banana.lifetime = 200;
  }
}

function obstacle(){
  if (frameCount % 80 === 0){
    var obstacle = createSprite(50,310,78,56);
    obstacle.addImage( obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-2;  
    obstacle.x = Math.round(random(200,400));
    obstacle.lifetime = 200;
  }
}
