

var spaceship = {

    x: 200,
    y: 200,
    size: 50,
    speed: 20,
   
   
    
    

    display: function () {
         
       
        fill(85);
        ellipse(this.x - 20, this.y + 45, 10,  this.size);//leftGun
        ellipse(this.x + 20, this.y + 45, 10,  this.size);//rightGun
        
        fill (52);
         triangle(
            this.x, this.y,
            this.x -  this.size / 3, this.y + this.size * 2.5,
            this.x + this.size / 3, this.y + this.size * 2.5);
         fill('#DE9151');
        ellipse(this.x, this.y + 100, 10, this.size);//flames
        fill('#888')
        triangle(
            this.x, this.y,
            this.x - this.size, this.y + this.size * 2,
            this.x + this.size, this.y + this.size * 2);
        
        
      
    },
        
    

      // to move ship
    
    update: function () {
        
       

        if (keyIsDown(RIGHT_ARROW)) {
            spaceship.x += spaceship.speed;
        }

        if (keyIsDown(LEFT_ARROW)) {

            spaceship.x -= spaceship.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            spaceship.y += spaceship.speed;
        }

        if (keyIsDown(UP_ARROW)) {

            spaceship.y -= spaceship.speed;
        }

    }
};

var asteroids = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	
	// ship's starting pos
    
	spaceship.x = width/2;
	spaceship.y = height - 200;
}

function draw() {
	background('black');
    noStroke();
	
	// adds random asteroid
    
	if (random(100) > 99) {
		// push new asteroid
        
		asteroids.push(new Asteroid());
	}
   
	
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();
	}
}  