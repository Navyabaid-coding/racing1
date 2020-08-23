var database,canvas;
var gameState=0;
var playerCount,allPlayers;
var form,game,player;



function setup(){
 database=firebase.database();
  
 canvas=createCanvas(400,400)
 game=new Game();
 game.getState();
 game.start();
 
}
function draw(){

}