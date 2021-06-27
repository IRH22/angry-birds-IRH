const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var piso, plataforma, caja1, caja2, caja3, caja4, caja5, log1, log2, log3, log4, cerdo1, cerdo2;

var score = 0;

var resor, resorte;

var fondoI;

var estado = "ligado";

var bg = "Imagenes/fondo.PNG"



function preload(){
  
  
  gfondo();
  

}


function setup(){
 var canvas = createCanvas(1200,400);  
  engine = Engine.create();
  world = engine.world;
 
    piso = new Ground(600,height,1200,20);
    plataforma = new Ground(150, 340, 300, 170);
   
    bird = new Bird(100,100);
    
    caja1 = new Box(700, 320, 70, 70);
    cerdo1 =  new Pig(810, 350, 20, 20);
    caja2 = new Box(920, 320, 70, 70);
    log1 = new Log(810, 310, 300, PI/2);
  
    caja3 = new Box(700, 240, 70, 70);
    cerdo2 =  new Pig(810, 250, 20, 20);
    caja4 = new Box(920, 240, 70, 70);
    log2 = new Log(810, 180, 300, PI/2);
  
    caja5 = new Box(810, 150, 70, 70);
    log3 = new Log(720, 140, 150, PI/7);
    log4 = new Log(900, 140, 150, PI/-7);
  
    
    resor = new Resortera(bird.body, {x:90, y:80});

  
  
}

function draw(){
  background(fondoI);
  Engine.update(engine);
    
    plataforma.display();
  
    bird.display();
     
    caja1.display();
    cerdo1.display();
    caja2.display();
    log1.display();
    
    caja3.display();
    cerdo2.display();
    caja4.display();
    log2.display();

    caja5.display();
    log3.display();
    log4.display();
    
    resor.display();
  
    piso.display();
  
    textSize(25);
    text("score "+score, 700, 50)

    cerdo1.score();
    cerdo2.score()

    
  
}

function mouseReleased(){
  resor.fly();
  estado = "libre";

}

function mouseDragged(){
  if (estado === "ligado"){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
  } 
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(bird.body, {x:90, y:80})
    resor.regresa(bird.body);
    estado = "ligado";
  }
  
}

function gfondo(){
  var fecha = new Date();
  var hora = fecha.getHours();
  console.log(hora)
  if (hora >= 06 && hora < 16){
    bg = "Imagenes/fondo.PNG"
  }
  else{
    bg = "Imagenes/bg2.jpg"
  }
  fondoI = loadImage(bg);

}