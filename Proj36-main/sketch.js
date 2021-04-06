var dog,sadDog,happyDog;
var feedPet,addFood;
var food;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedPet = createButton("Feed The Dog");
  feedPet.position(700,95);

  addFood = createButton("Add Food");
  addFood.position(800,95);


}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
