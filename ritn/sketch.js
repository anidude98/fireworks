var ritn;
var x = 0;
var y = 0 

function preload(){
	ritn = loadSound('running.mp3');
}

function setup(){

	ritn.setVolume(0.1);
	ritn.play();
	
	canvas = createCanvas(windowWidth,windowHeight);
	colorMode(HSB);
}

function draw(){
	background(x,255,255);
	y = mouseX;
	y = map(y, 0,windowWidth,0,255)
	x += y
	if(x>255){
		x = 0;
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
