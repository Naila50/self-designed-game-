var form;
var gameState= 0;

function preload(){
  back_img = loadImage("images/image main shinchan.jpg")
}
function setup() {
  fill("lightblue");
  createCanvas(1260,580);
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background();
  if(gameState ===1){
  console.log("gameStatePlay")
  game.play();  
  }
  
}

