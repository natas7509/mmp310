/*
	laser class
*/

class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
		this.speed.y = -19;
	}
	
	display() {   
        stroke(255);
        strokeWeight(4);
        point(this.x - 20, this.y - 10);
        point(this.x +20 , this.y - 10);
        noStroke();
        
	}
    

}