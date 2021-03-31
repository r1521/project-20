var backgroundIMG;
var cat, catIMG, mouse, mouseIMG;
var cat2, mouse2;
var mouse3;

function preload() {
    //load the images here
    backgroundIMG = loadImage("images/garden.png"); 
    mouseIMG = loadImage("images/mouse1.png");
    catIMG = loadImage("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png,cat3.png")
    mouse2 = loadAnimation("images/mouse1.png,mouse2.png")
    mouse3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,200);
    cat.addImage(catIMG);
    mouse = createSprite(100,200);
    mouse.addImage(mouseIMG);
}

function draw() {

    background(backgroundIMG);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x <(cat.width - mouse.width)/2){
cat.velocityX =0;
mouse.changeAnimation("mouse3");
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.velocityX = -3;
    cat.addAnimation("catRunning", cat2);
    cat.changeAnimation("catRunning");
    cat.frameDelay = 25;
}

}
