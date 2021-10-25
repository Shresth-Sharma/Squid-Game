var time=0;
var gameState=0;
var deadline=0;
var state=0;
var player;
var distance=5000;
function preload(){

}
function setup(){
 frameRate(100);
 createCanvas(windowWidth,windowHeight);
 player=createSprite(windowWidth/2,windowHeight/2,15,15);
}
function draw(){
background(14,131,114);
camera.position.x = windowWidth/2
camera.position.y = player.y
if(keyDown("Enter")&&gameState===0){
 gameState=1;
}
if(gameState===1){
    if(deadline>=30){
        deadline=0;
        state=1
    }
    if(deadline<=-15){
        deadline=0;
        state=0
    }
    if(state===0){
        deadline=deadline+0.05
        
    }
    if(state===1){
        deadline=deadline-0.05

    }
    time=time-0.05
    player.velocityY=0
    if(keyDown("W")){
        player.velocityY=-2
        distance=distance-1
    }
    if(deadline<0&&player.velocityY<0){
        gameState=3
    }
}
if(distance<=0){
 gameState=2;
}
if(gameState===3){
 textSize(50);
 fill("red")
 text("LOSE",player.x,player.y)
}
if(gameState===2){
 textSize(50);
 fill("red")
 text("WIN",player.x,player.y)
}
textSize(40);
fill(7,16,114);
text("Score:"+Math.round(time),25,player.y-windowHeight/3);
text("Time:"+Math.round(deadline),25,player.y-windowHeight/6);
text("Distance:"+Math.round(distance),25,player.y-windowHeight/12);
drawSprites();
}
