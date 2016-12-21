var ritn;

function preLoad(){
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
	x+=1;
	if(x>255){
		x = 0;
	}
}
