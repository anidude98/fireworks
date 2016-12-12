var rockets = [];
var explosions = [];

function setup() {
  	createCanvas(400, 400);
	rockets.push(new Rocket(width/2,height, 0, -50, 90));
	stroke(255);
}

function draw() {
  	background(220);
	
	rockets[0].update();
	
}

function Rocket(x,y,vx,vy,d){
	this.x = x;
	this.y = y; 
	this.vx = vx;
	this.vy = vy;
	this.d = d;
	
	this.trail = [];
	
	this.update = function(){
		for(i = 0; i < 5; i++){	this.trail.push(new Particle(this.x,this.y,random(10)-5,random(10)+30,20)); }
		for(i = 0; i < this.trail.length; i++){
			this.trail[i].x += this.trail[i].vx;
			this.trail[i].y += this.trail[i].vy;
			
			this.trail[i].vx *= 0.75;
			this.trail[i].vy *= 0.75;
			
			this.trail[i].d -= 1;
			
			
			if(this.trail[i].d < 1){  this.trail.splice(i,1); }
		}
		for(i = 0; i < this.trail.length; i++){
			point(this.trail[i].x,this.trail[i].y)
		}
		
	};
}

function Particle(x,y,vx,vy,d){
	this.x = x;
	this.y = y; 
	this.vx = vx;
	this.vy = vy;
	this.d = d;
}

