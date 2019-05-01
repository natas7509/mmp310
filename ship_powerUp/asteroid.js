class Asteroid extends Entity {
    constructor(x, y, size) {
        super(random(width), -100);
        if (x) this.x = x;
        if (y) this.y = y;
    
        if (size) {
            // asteroid particle
            this.size = size;
            this.speed.y = random(-5, 5);
            this.speed.x = random(-5, 5);
        } else {
            this.speed.y = random(4);
            this.speed.x = random(-1, 1);
        }

        // random points
        this.points = [];
        var r = random(6, 10);
        for (let i = 0; i < r; i++) {
            var angle = PI * 2 / r * i;
            this.points.push({
                x: this.size * sin(angle) + random(-this.size / 3, this.size / 3),
                y: this.size * cos(angle) + random(-this.size / 3, this.size / 3)
            });
        }
    }

    display() {
        noFill();
        stroke(255);
        strokeWeight(1);
        
        beginShape();
        for (let i = 0; i < this.points.length; i++) {
            vertex(
                this.x + this.points[i].x / 1.5,
                this.y + this.points[i].y / 1.5
            );
        }
        endShape(CLOSE);
        
         beginShape();
        for (let g = 0; g < this.points.length; g++) {
            vertex(
                this.x + this.points[g].x / 10,
                this.y + this.points[g].y / 10
            );
        }
        endShape(CLOSE);
        
        

       
    }
    
    update() {
		super.update();
		
		// remove asteroids below the canvas
		if (this.y > height + this.size) {
			this.remove(asteroids);
		}
		
		// bounce asteroids off sides
		if (this.x <= 0 || this.x >= width) {
			this.speed.x *= -1;
		}
		
		
	}
    
    


//    update() {
//        this.y += 5;
//        this.x += random(-1, 1);
//   
//    }

}