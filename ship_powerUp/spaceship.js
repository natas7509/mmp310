/*
	spaceship class
*/

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 200);
	}

	display() {
        
        fill(85);
          noStroke();
        ellipse(this.x - 20, this.y + 30, 10,  this.size);//leftGun
        ellipse(this.x + 20, this.y + 30, 10,  this.size);//rightGun
        
        fill('orange');
        ellipse(this.x - 20, this.y + 30, 2,  this.size);//leftGun-ORANGE
        ellipse(this.x + 20, this.y + 30, 2,  this.size);//rightGun - ORANGE
        
	
         fill (90);
         triangle(
            this.x, this.y,
            this.x -  this.size / 3, this.y + this.size * .5,
            this.x + this.size / 3, this.y + this.size * .5);
        fill('#DE9151');
        ellipse(this.x, this.y + 50, 18, this.size);//flames
        fill('#888')
        triangle(
            
            this.x, this.y,
            this.x - this.size, this.y + this.size/2,
            this.x + this.size, this.y + this.size/2);
        
   
    //Spaceship stays within the screen
    this.checkEdges = function() {
        if (this.x < this.size) this.x = this.size;
        else if (this.x > width - this.size) this.x = width - this.size;
    }
    
}
    
 
	
	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 5;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -5;
		} 
//        else if (keyIsDown(UP_ARROW)) {
////            this.speed.y = -5;
////        } else if (keyIsDown(DOWN_ARROW)) {
////            this.speed.y = 5;
////       } 
        else {
			this.speed.x = 0;	
		}
	}
}