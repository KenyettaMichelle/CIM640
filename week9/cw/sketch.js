var frameArray = [];
var counter = 0;


var interval = 250;
var pMillis = 0;
var appear = false;


function setup() {
    createCanvas(500, 500);

    for (){var i = 0; i < 4; i++)}
        varlString = "assets/Thatwasclose" + i +".jpg";
        frameArray[i] = loadImage();


    frameArray[0] = loadImage("assets/Thatwasclose0.jpg";
    frameArray[1] = loadImage("assets/Thatwasclose1.jpg";
    frameArray[2] = loadImage("assets/Thatwasclose2.jpg";
    frameArray[3] = loadImage("assets/Thatwasclose3.jpg";
}



function draw() {

    //frameRate(1);
    console.log(millis());
image(frameArray[currentFrame], 0, 0);




    if (millis() - prevMillis >= interval) {
        currentFrame++; // Next frame
        prevMillis = millis();
        counter++
    }

    if (currentFrame == frameArray.length) {
        currentFrame = 0;
        // Return to first frame
    }

    if(appear == true){
        ellipse(mouseX,mouseY, 100,100);
    }


}
