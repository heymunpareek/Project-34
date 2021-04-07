const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box8, box9, box10, box11, box12, box13;
var hero,monster,rope,ground;
var column1 = [];
var column2= [];

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for(var boxC = 0; boxC <= 7; boxC++) {
    column1.push(new Box(600, 100, 70, 70));
  }
  for(var boxC2 = 0; boxC2 <= 7; boxC2++) {
    column2.push(new Box(900, 100, 70, 70));
  }
  



 
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  for (var i = 0; i <= 7; i++) {
    column1[i].display();
    //column2[i].display();
  }
  for (var n = 0; n <= 7; n++) {
    column2[n].display();
  }

  hero.display();
  rope.display();
  monster.display();

  if(monster.body.position.y > 700) {
    textAlign(CENTER);
    fill("black");
    stroke("black");
    strokeWeight(2);
    textSize(20);
    text("You have defeated the monster.",1200, 200)
  }

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
