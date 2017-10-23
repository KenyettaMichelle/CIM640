var red, blue, green, white;

var hRedColor

var backgroundColor;

var hitZoneX = 100
var hitZoneY = 100

var ballons;

function preload(){bgImage1= loadimage("assets/carnivaljpg");}

bgImage2 = loadimage("assets/party.jpg");

function setup() {
    createCanvas(400, 400);
    
    centerX= width/2;
    centerY=height/2;
    
    bgColor = color(255,0,0);
    hRedColor= createSlider(0,255,0);
    hGreenColor= createSlider(0,255,0);
    hBlueColor= createSlider(0,255,0);
    
    bgChange = createButton("party")
    bgChange.position(100,500);
    bgChange.mousePress(changeBgFunction);
    
    bgChange2 = createButton("carnival")
    bgChange2.position(0,500);
    bgChange2.mousePress(changeBgFunction2);
    
    currentBgImage = bgImage;
}

function draw() {
    background(bgColor);
    
    image(currentBgImage, 0,0,400,400);
    
    console.log("mouseX": +")
                
    //if (mouseX==hitZoneX && mouseY == hitzoneY){console.log("I am in the zone!")}        
                
                var hitZoneDist = dist(hitZoneX,hitzoneY,mouseX,mouseY);
    console.log("hitZoneDist:" + hitZoneDist);
   
    if(hitZoneDist <=5){console.log ("We are Totally in the Zone");
          image(ballons,0,0);       }
    
                
function mousePressed(){bgColor = color(0,255,0);}                
function changeBgImage = bgImage2;
    
    console.log
                
function changeBgImage = bgImage                
function changeBgImage = bgImage2;
    
    
    
        
    
    noFill();
    
    stroke(hRedcolor.value(),hGreenColor.value(),hbBlueColor.value))