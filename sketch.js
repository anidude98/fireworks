var rockets = [];
var explosions = [];
var debugP;

function setup() {
  	MYCANVAS = createCanvas(800, 600);
	MYCANVAS.parent("cvs");
	
	debugP = createP("NULL");
	
	rockets.push(new Rocket(width/2,height, 0, -1, 1000));
	stroke(255,0,0);
	rectMode(CENTER);
}

function draw() {
  	background(220);
	
	if(rockets[0].d > 1){ rockets[0].update(); text("haha fuck you sam\n   im a rocket", rockets[0].x, rockets[0].y+230);}
	fill(255,50,50)
	
	//console.log(rockets[0]);
}

function Rocket(x,y,vx,vy,d){
	this.x = x;
	this.y = y; 
	this.vx = vx;
	this.vy = vy;
	this.d = d;
	
	this.trail = [];
	
	this.update = function(){
		this.x += this.vx;
		this.y += this.vy;
		this.d -= 1;
		
		
		for(i = 0; i < 5; i++){ this.trail.push(new Particle(this.x,this.y,random(10)-5,random(10)+30,15)); }
		for(i = 0; i < this.trail.length; i++){
			this.trail[i].x += this.trail[i].vx;
			this.trail[i].y += this.trail[i].vy;
			
			this.trail[i].vx *= 0.75;
			this.trail[i].vy *= 0.75;
			
			this.trail[i].d -= 1;
			
			
			if(this.trail[i].d < 1){  this.trail.splice(i,1); }
		}
		for(i = 0; i < this.trail.length; i++){
			point(this.trail[i].x,this.trail[i].y);
		}
		debugP.html(this.trail.length);
	};
}

function Particle(x,y,vx,vy,d){
	this.x = x;
	this.y = y; 
	this.vx = vx;
	this.vy = vy;
	this.d = d;
}

