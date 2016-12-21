var ritn;
var x = 0;

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
	resizeCanvas(windowWidth,windowHeight);
	background(x,255,255);
	x+=10;
	if(x>255){
		x = 0;
	}
}
