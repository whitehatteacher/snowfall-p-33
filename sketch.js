const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bkImg ;
var snowDrop ;
var maxDrops = 30;
var drops= [] ;

function preload () {
  bkImg = loadImage ("1.jpg");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  console.log (width);
  console.log (height);

  
  // create snow drops at random x and y positions for every 250
  // frames interval
  if(frameCount % 250 === 0){

    for(var i=0; i<maxDrops; i++){
        // create the drop object and store it in an array
        drops.push(new Snow (random(0,800), random(0,400), 20));
    }

  }
  
}

function draw() {
  background(bkImg);  
  Engine.update(engine);

   
  for(var i = 0; i<maxDrops; i++){
    // display drops
    drops[i].fallingdrops();

    // if drops reach bottom , reset the position 
    drops[i].updateY();
  }


}