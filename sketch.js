
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,315,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(200,380,600,20);
  bananasGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
 background("white");
  text("score " +score, 350,50);
  score = score+Math.round(getFrameRate()/60);
  monkey.collide(ground);
  
  if (keyDown("space")){
    monkey.velocityY = -10;
    
  }
  
  monkey.velocityY = monkey.velocityY+0.5;

  
  spawnBananas();
  spawnObstacles();

  drawSprites();
  
}

function spawnBananas(){
  if (frameCount%100 === 0){
    var banana = createSprite(400,200,10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 100;
    bananasGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount%100 === 0){
    var obstacle = createSprite(400,360,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
  }
  
  
  
}




