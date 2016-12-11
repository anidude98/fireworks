function setup() {
  createCanvas(400, 400);
	rocket = new particle(width/2,height,0,-9, 50);
	rocket.tSparks = [];
	xplo = [];
}

function draw() {
  background(220);
	rocket.y += rocket.vy;
	rocket.vy *= 0.99;
	stroke(255,25,25);
	
	sUpdate(rocket);
	rocket.d -= 1;
	
	if(rocket.d < 1){
	  //console.log("boom");
	  xplo.push(new explosion(rocket.x,rocket.y, 3))
    
	}
	
	if(xplo.length > 0){
	for(i = 0; i < xplo[0].spark.length; i++){
	  point(xplo[0].spark[i].x,xplo[0].spark[i].y)
	  xplo[0].spark[i].x += xplo[0].spark[i].vx;
	  xplo[0].spark[i].y += xplo[0].spark[i].vy;
	  xplo[0].spark[i].vy + 1;
	  
	}
	}
}

function particle(x,y,vx,vy,d){
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.d = d;
}

function sUpdate(r){
  for(i = 0; i < random(10)+10; i++){
	  r.tSparks.push(new particle(r.x,r.y,random(15)-7.5,10+random(5),15));
	  
	}
  
  for(i = 0; i < r.tSparks.length; i++){
	  r.tSparks[i].d -= 1;
	  r.tSparks[i].y += r.tSparks[i].vy;
	  r.tSparks[i].x += r.tSparks[i].vx;
	  r.tSparks[i].vy *= 0.75;
	  r.tSparks[i].vx *= 0.75;
	  
	  point(r.tSparks[i].x,r.tSparks[i].y);
	  
	  if(r.tSparks[i].d < 1){r.tSparks.splice(i,1);}
	}
	
	
}

function explosion(x,y,f){
	  this.x = x;
	  this.y = y;
	  this.f = f;
	  this.spark = [];
	  for(x = 0; x < 10 * f; x++ ){
	    this.spark.push(new particle(x,y,random(5*f)-((5*f)/2),random(5*f)*-1,random(5)+5*f));
	  }
	}