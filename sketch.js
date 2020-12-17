
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var tree_image;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var ground;
var stone;
var boy,boy_image;
var slingshot;

function preload()
{
	tree_image = loadImage("images/tree.png");
	boy_image = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	mango1 = new Mango(100,200);
	mango2 = new Mango(450,200);
	mango3 = new Mango(300,200);
	mango4 = new Mango(550,250);
	mango5 = new Mango(600,250);
	mango6 = new Mango(700,300);
	mango7 = new Mango(400,150);
	mango8 = new Mango(200,300);
	mango9 = new Mango(325,275);
	mango10 = new Mango(460,70);
    
    ground = new Ground(400,700,800,20);

	boy = createSprite(110,630);
	boy.addImage(boy_image);
	boy.scale = 0.1;

    stone = new Stone(30,570);

	slingshot = new Slingshot(stone.body,{x:60,y:575}); 


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	}
	);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  background(tree_image);
  
text("Space for second chance",mouseX,mouseY);

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

ground.display();

boy.display();

stone.display();

slingshot.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);

 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode == 32){
        slingshot.attach(stone.body);
    }
}

function detectCollision(stoneobj,mangos){
var distance = dist(stoneobj.body.position.x,stoneobj.body.position.y,mangos.body.position.x,mangos.body.position.y)
if(distance <= 75){
	Matter.Body.setStatic(mangos.body,false);
}

}
