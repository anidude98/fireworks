var iron = 0;
var gold = 0; 
var miners = 0;

var h3;
var lm;

function setup() {
	var canvas = createCanvas(windowWidth,	windowHeight);

	h3 = windowHeight / 3;
	lm = windowWidth / 10;

	textAlign(CENTER);

	gold = new resource(100, 100, 0, "Gold");

	gold.onClick = function() {
		gold.val += 1;
	}

	iron = new resource(100, 300, 0, "Iron");
}

function draw() {
  background(200);

  gold.draw();
  if(gold.val > 9){
    textSize(70);
    text("HAHA SAM FUCKED YA AGAIN",screenWidth,screenHeight);
  iron.draw();
}

function resource(x,y,val,name){
	this.x = x;
	this.y = y;
	this.val = val;
	this.name = name;

	this.c = false;

	this.draw = function(){
		if(this.c){
			fill(150,150,255);
		}else{
			fill(255);
		}

		stroke(0);
		strokeWeight(3);
		ellipse(x,y,150,150);

		strokeWeight(1);
		fill(0);
		textSize(20);
		text(this.name.toUpperCase(),this.x,this.y);

		textSize(12);
		text(this.val,this.x,this.y + 30);

	}

	this.clicked = function(){
		if(dist(mouseX,mouseY,this.x,this.y) < 75){
			// clicked
			this.onClick();
			this.c = true;
		}else{
			this.c = false;
		}
	}

	this.onClick = function(){} // define for each instance
}

function mousePressed(){
	gold.clicked();
	iron.clicked();

}

function mouseReleased(){
	iron.c = false;
	gold.c = false;
}
