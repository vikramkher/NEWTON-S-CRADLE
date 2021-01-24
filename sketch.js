const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse = Matter.Mouse;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(windowHeight/1.5,windowWidth/3);
    engine = Engine.create();
	world = engine.world;
    
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse : canvasmouse
    };
    mConstraint = Matter.MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    pendulum1 = new Pendulum(80,300,"black");
    pendulum2 = new Pendulum(140,300,"black");
    pendulum3 = new Pendulum(200,300,"black");
    pendulum4 = new Pendulum(260,300,"black");
    pendulum5 = new Pendulum(320,300,"black");

    sling1 = new Sling(pendulum1.body,{x:80,y:10});
    sling2 = new Sling(pendulum2.body,{x:140,y:10});
    sling3 = new Sling(pendulum3.body,{x:200,y:10});
    sling4 = new Sling(pendulum4.body,{x:260,y:10});
    sling5 = new Sling(pendulum5.body,{x:320,y:10});

   
}


function draw() {
  background('black');
  Engine.update(engine);
  

  pendulum1.depth = pendulum2.depth;
    pendulum2.depth = pendulum3.depth;
    pendulum3.depth = pendulum4.depth;
    pendulum4.depth = pendulum5.depth
  
 pendulum1.display();
 pendulum2.display();
 pendulum3.display();
 pendulum4.display();
 pendulum5.display();

 sling1.display();
 sling2.display();
 sling3.display();
 sling4.display();
 sling5.display();
 
}
function mouseDragged(){
	
		Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY});
       
}

