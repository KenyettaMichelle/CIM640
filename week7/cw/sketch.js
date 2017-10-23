

function setup() {
    createCanvas(255,255);
    background("red");


var posX= width/2;
var posY= height/2;



}


function draw() {
    var posX= width/2;
    var posY= height/2;
    
    //250 is the placement and 100 is the width and height x,y,w,h
    //nostroke();removes stroke from everything
    stroke(0);
    strokeWeight(1);
    fill("pink");    
    ellipse(posX,posY,100,100);

fill("red");
rect(posX-25,posY +20, 50,50);
fill(255);
    ellipse(posX-10,posY-20, 10,40);
    ellipse(posX+10,posY-20, 10, 40);
    
    fill(0,255,0);
    ellipse(posX-10, posY);
    stroke("cyan");
    strokeWeight(5);
    point(posX +10,posY + 10);
    
    
    line(posX -25, posY +30, posX +25, posY +30);
    
    arc(posX,posY,100,100, PI, TWO_PI);
    
}
