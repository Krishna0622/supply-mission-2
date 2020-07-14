var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomplatform, leftplatform, rightplatform;
var bottomplatform1, leftplatform1, rightplatform1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomplatform1=createSprite(400, 640, 100, 10);
	bottomplatform1.shapeColor=color(255)

	leftplatform1=createSprite(350, 620, 10, 50);
	leftplatform1.shapeColor=color(255)

	rightplatform1=createSprite(450, 620, 10, 50);
	rightplatform1.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	packageBody.debug=true;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bottomplatform = Bodies.rectangle(400, 640, 100, 10 , {isStatic:true} );
	 World.add(world, bottomplatform);
	 leftplatform = Bodies.rectangle(350, 620, 10, 50 , {isStatic:true} );
	 World.add(world, leftplatform);
	 rightplatform = Bodies.rectangle(450, 620, 10, 50 , {isStatic:true} );
 	World.add(world, rightplatform);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



