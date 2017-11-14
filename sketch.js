var interfaceItems = [];

var brushSize = 10;
var song;
var button;
function setup(){
  createCanvas(400,400);

  interfaceItems.push(new interface(100,100,50, color(255,0,0)));

  interfaceItems.push(new interface(200,100,50, color(0,255,0)));
song = load sound("rainbow.mp3", loaded);
    button = createButton("play");

}


function draw(){
  fill(0);
  ellipse(mouseX,mouseY, brushSize,brushSize);

  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
  //console.log(interfaceItems[0].check());
}

function mousePressed(){
  if(interfaceItems[0].check() == true){
    console.log("pressed red button");
    brushSize++;
  }

  if(interfaceItems[1].check() == true){
    brushSize--;
  }
function togglePlaying(){
    song.play();
    song.setVolume(0.3);
}

}
