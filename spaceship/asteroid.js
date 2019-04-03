/*
	asteroid class
*/

class Asteroid {
	constructor() {
		this.x = random(width);
		this.y = -100;
		this.size = 100;
		this.speed = {
			x: random(-2, 2),
			y: random(5)
		};
	}
	
	display() {
		noFill();
		stroke('#fff');
        strokeWeight(2);
		ellipse(this.x, this.y, this.size);
        
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
	collide() {
        noStroke();
		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
		if (d < this.size / 2) {
			textSize(100);
			textAlign(CENTER, CENTER);
			fill('orange');
			text("Totally Owned!!", width/2, height/2);
			noLoop();	
		}
	}
}

