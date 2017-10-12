function setup() {
    createCanvas(260,260);
    
    var posX= width/2;
var posY= height/2;

}

function draw() {
    
     var posX= width/2;
    var posY= height/2;
    //260 is the placement and 100 is the width and height x,y,w,h
    
        
    background('red');
    fill('orange');
    stroke("cyan");
    strokeWeight(5);
    point(posX +10,posY + 10);
    
        
    ellipse(127,127,100,100);
    
    fill('cyan');
    ellipse(110,105,10,10);
    
    fill('cyan');
    ellipse(140,105,10,10)

    fill('white');
    arc(125,125, 15, 5, HALF_PI, PI);
    
    line(100,150,150,150)
    
   
    
   
    
    
    
    
}