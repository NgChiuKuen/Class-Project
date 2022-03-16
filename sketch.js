/*const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;
var fruit_con_3;
var rope3;

var bg_img;
var food;
var rabbit;

var button,button2,button3;
var bunny;
var blink,eat,sad;
var mute_btn;

var fr;

var bk_song;
var cut_sound;
var sad_sound;
var eating_sound;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
  
  bk_song = loadSound('sound1.mp3');
  sad_sound = loadSound("sad.wav")
  cut_sound = loadSound('rope_cut.mp3');
  eating_sound = loadSound('eating_sound.mp3');
  air = loadSound('air.wav');

  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png" , "eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");

  starImage = loadImage('star.png');
  emptyStarImage = loadAnimation('empty.png');
  oneStar = loadAnimation('one_star.png');
  twoStar = loadImage('stars.png');

  blink.playing = true;
  eat.playing = true;
  sad.playing = true;
  sad.looping= false;
  eat.looping = false; 
}

function setup() 
{
  createCanvas(600,700);
  frameRate(80);

  bk_song.play();
  bk_song.setVolume(0.5);

  engine = Engine.create();
  world = engine.world;

  //btn 1
  button = createImg('cut_btn.png');
  button.position(100,90);
  button.size(50,50);
  button.mouseClicked(drop);

   //btn 2
   button2 = createImg('cut_btn.png');
   button2.position(400,90);
   button2.size(50,50);
   button2.mouseClicked(drop2);
 
   rope = new Rope(7,{x:100,y:90});
   rope2 = new Rope(7,{x:440,y:90});


  mute_btn = createImg('mute.png');
  mute_btn.position(width-50,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);
  
  ground = new Ground(300,height,width,20);
  blink.frameDelay = 20;
  eat.frameDelay = 20;

  bunny = createSprite(200,620,100,100);
  bunny.scale = 0.2;

  bunny.addAnimation('blinking',blink);
  bunny.addAnimation('eating',eat);
  bunny.addAnimation('crying',sad);
  bunny.changeAnimation('blinking');

  star = createSprite(300,30,20,20);
  star.addImage(starImage);
  star.scale = 0.02;

  star2 = createSprite(100,350,20,20);
  star2.addImage(starImage);
  star2.scale = 0.02; 

  starCounter = createSprite(50,30,20,20);
  starCounter.scale = 0.2;
  starCounter.addAnimation('empty',emptyStarImage);
  starCounter.addAnimation('Onestar', oneStar);
  starCounter.addAnimation('Twostar',twoStar);
  starCounter.changeAnimation('empty');

  blower = createImg('baloon2.png');
  blower.position(250,370);
  blower.size(120,120);
  blower.mouseClicked(airblow);
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit_con_2 = new Link(rope2,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();
  rope2.show();

  Engine.update(engine);
  ground.show();

  drawSprites();

  if(collide(fruit,bunny,bunny,80)==true)
  {
    World.remove(engine.world,fruit);
    fruit = null;
    bunny.changeAnimation('eating');
    eating_sound.play();
  }

  if(fruit!=null && fruit.position.y>=650)
  {
    bunny.changeAnimation('crying');
    bk_song.stop();
    sad_sound.play();
    fruit=null;
   }

  if(collide(fruit,star,20)===true){
    star.visible = false;
    starCounter.changeAnimation('Onestar');
   }

  if(collide(fruit,star2,20)===true){
    star2.visible = false;
    starCounter.changeAnimation('Twostar');
  }
  
}

function drop()
{
  cut_sound.play();
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

function drop2()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}


function mute()
{
  if(bk_song.isPlaying())
     {
      bk_song.stop();
     }
     else{
      bk_song.play();
     }
}

function airblow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:-0.05});
  air.play();
}*/










const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



var dragonWithDragon;
var dragonWithFire;
var fire;
var knight;

var play_btn;
var how_btn;

var one_btn;
var two_btn;
var three_btn;
var four_btn;
var five_btn;
var six_btn;
var seven_btn;
var eight_btn;
var nine_btn;
var ten_btn;

var mouse_btn;
var space_btn;




function preload(){
  dragonWithDragon = loadImage('No fire.JPG');
  dragonWithFire = loadImage('Fire.JPG');
  fire = loadImage('shootfire.jpg');
  knight = loadImage('knight.jpg');
}

function setup(){
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if(isMobile){
    canW=displayWidth
    canH=displayHeight
    createCanvas(canW+80,canH);
  }else{
    canW=windowWidth
    canH=windowHeight
    createCanvas(canW,canH);
  }
  
  frameRate(80);

  knight = new Knight(width-79, height-60, 170, 170, -80);



}

function draw(){
  background(51);
  image(dragonWithDragon,0,0,displayWidth+80,displayHeight);

  fire_btn = createImg("");
  fire_btn.position();
  fire_btn.size();
  fire_btn.mouseClicked(dragonWithFire.display());

  drawSprites();
  fill('black');
  text(mouseX+','+ mouseY,mouseX,mouseY);

  fill("#ff0000");
  textSize(40);
  text(`Score:${score}`, width - 200, 50);
  textAlign(CENTER, CENTER);

  knight.display();
}

function mousePressed() {
  scene.setAnimation("dragonWithFire");
}


 


function collisionWithKnight(index) {
  for (var i = 0; i < knight.length; i++) {
    if (fire[index] !== undefined && knight[i] !== undefined) {
      var collision = Matter.SAT.collides(fire[index].body, knight[i].body);

      if (collision.collided) {
        score+=5
          knight[i].remove(i);
        

        Matter.World.remove(world, fire[index].body);
        delete fire[index];
      }
    }
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var fire = new fire(100,100);
    fire.trajectory = [];
    Matter.Body.setAngle(fire.body, 100,100);
    fires.push(fire);
  }
}

function showCannonBalls(fire,index) {
  if (fire) {
    fire.display();
    fire.animate();
    if (fire.body.position.x >= width || fire.body.position.y >= height - 50) {
        fire.remove(index);
      
    }
  }
}













//function mute()
//{
//  if(bk_song.isPlaying())
//     {
//      bk_song.stop();
//     }
//     else{
//      bk_song.play();
//     }
//}

//ground = createSprite(200,180,400,20);
//ground.addImage("ground",groundImage);
//ground.x = ground.width /2;

//var scene = createSprite(200,200);
//scene.setAnimation("bg_underwater_1");

//function showBoats() {
  //if (boats.length > 0) {
    //if (
      //boats.length < 4 &&
      //boats[boats.length - 1].body.position.x < width - 300
    //) {
      //var positions = [-40, -60, -70, -20];
      //var position = random(positions);
      //var boat = new Boat(
        //width,
        //height - 100,
        //170,
        //170,
        //position,
        //boatAnimation
      //);

      //boats.push(boat);
    //}

    //for (var i = 0; i < boats.length; i++) {
      //Matter.Body.setVelocity(boats[i].body, {
        //x: -0.9,
        //y: 0
      //});

      //boats[i].display();
      //boats[i].animate();
      //var collision = Matter.SAT.collides(this.tower, boats[i].body);
      //if (collision.collided && !boats[i].isBroken) {
        //isGameOver = true;
        //pirateLaugh.play( );
        //gameOver();
      //}
    //}
  //} else {
    //var boat = new Boat(width, height - 60, 170, 170, -60, boatAnimation);
    //boats.push(boat);
  //}
//}