/*
	spaceship class
*/

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 200);
	}
	
	display() {
        
         fill(85);
        ellipse(this.x - 20, this.y + 45, 10,  this.size);//leftGun
        ellipse(this.x + 20, this.y + 45, 10,  this.size);//rightGun
        
        fill (52);
         triangle(
            this.x, this.y,
            this.x -  this.size / 3, this.y + this.size * 2.5,
            this.x + this.size / 3, this.y + this.size * 2.5);// turbines
         fill('#DE9151');
        ellipse(this.x, this.y + 100, 10, this.size);//flames
        fill('#888')
        triangle(
            this.x, this.y,
            this.x - this.size, this.y + this.size * 2,
            this.x + this.size, this.y + this.size * 2);
        
        
      
   
    }
	
	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 5;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -5;
		} else {
			this.speed.x = 0;	
		}
	}
}