
var hr;
var mn;
var sc;
var scAngle;

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  
}

function draw() {
  background(255,255,255);  
  translate (200,200)
  rotate (-90)


strokeWeight(8);
noFill();
stroke(255,100,150);
scAngle1 = map(sc,0, 60, 0 ,360)
arc(0,0, 300, 300, 0 , scAngle1);

push ();
rotate(scAngle1);
stroke(255,100,150);
line (0,0,100,0);
pop ();

stroke(155,200,150);
scAngle2 = map(mn,0, 60, 0 ,360)
arc(0,0, 280, 280, 0 , scAngle2);

push ();
rotate(scAngle2);
stroke(155,200,150);
line (0,0,100,0);
pop ();


stroke(75,200,250);
scAngle3 = map(hr % 12,0, 12, 0 ,360)
arc(0,0, 260, 260, 0 , scAngle3);

push ();
rotate(scAngle3);
stroke(75,200,250);
line (0,0,100,0);
pop ();
  //drawSprites();
}