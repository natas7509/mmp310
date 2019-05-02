/*powerUp class
****************/

class Powerup extends Entity {
	constructor() {
		super(random(width), -110) ;
		this.speed.x = random(-2, 2);
		this.speed.y = 5;
		this.size /= 2;
	}
	
	display() {
		fill('red');
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	
	update() {
		super.update();
		
		if (this.y > height + this.size) {
			this.remove(powerups);	
		}
		
		if (this.x <= 0 || this.x >= width) {
			this.speed.x *= -1; 	
		}
		
	}
}



