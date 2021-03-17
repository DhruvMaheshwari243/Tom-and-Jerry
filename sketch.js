var cat, catImage, cat_running_animation, cat_stop_animation;
var mouse, mouseImage,mouse_teasing_animation, mouse_stop_animation;
var garden,gardenImage;
function preload() {
    //load the images here
    catImage = loadImage("images/cat1.png");
    mouseImage = loadImage("images/mouse1.png");
    gardenImage = loadImage("images/garden.png");
    cat_running_animation = loadAnimation("images/cat2.png" , "images/cat3.png");
    mouse_teasing_animation = loadAnimation("images/mouse2.png", "images/mouse3.png");
    cat_stop_animation = loadAnimation("images/cat4.png");
    mouse_stop_animation = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(700,700);
    //create tom and jerry sprites here
    garden = createSprite(200,200);
    garden.addImage(gardenImage);
    cat = createSprite(600,450,50,50);
    cat.addImage(catImage);
    cat.scale = 0.1;
    mouse = createSprite(150,450,50,50);
    mouse.scale = 0.1;
    mouse.addImage(mouseImage);

}

function draw() {
    background(255);

    var a = cat.x - mouse.x;
    var b = (cat.width/2-mouse.witdth)/2;

    if(a < b){
        console.log("true");
        cat.velocotyX = 0;
        cat.x = 200;
        cat.addAnimation("cat stopping", cat_stop_animation);

        mouse.addAnimation("mouse stopping", cat_stop_animation);
        mouse.changeAnimation("mouse stopping", mouse_stop_animation);

    }

    console.log(mouse.x + "mouse");
    console.log(cat.x);

    cat.debug = true;
    mouse.debug = true;
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.addAnimation("cat running", cat_running_animation);
    cat.changeAnimation("cat running", cat_running_animation);
    cat.velocityX = -3;

    mouse.addAnimation("mouse teasing", mouse_teasing_animation);
    mouse.changeAnimation("mouse teasing", mouse_teasing_animation);


}


}
