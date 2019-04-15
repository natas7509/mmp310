/*
	jon darling
    MMP-310
    week-9
    Ship-Laser
    
 */



var spaceship;
var asteroids = [];
var lasers = [];
var laserRight = [];



function preload() {
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
    a = new Asteroid();
	spaceship = new Spaceship();
   
}

function draw() {
	background('black');
    
    a.display();
 a.update();
	
	// adds random asteroid
	if (random(100) > 99) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	// add lasers
	if (keyIsDown(32) || keyIsDown(88)) {
		lasers.push(new Laser());
	}
    
    if (keyIsDown(32) || keyIsDown(88)) {
		laserRight.push(new LaserRight());
       
	}
    
   

	spaceship.controls();
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
       
 
		
		// collision with spaceship
		if (asteroids[i].collide(spaceship)) {
			// end game
			textAlign(CENTER, CENTER);
			textSize(100);
			fill('#fff');
			text('PUNISHED!!!', width/2, height/2);
			noLoop();
		}
		
		// detect all lasers
		for (let j = 0; j < lasers.length; j++) {
			if (asteroids[i].collide(lasers[j])) {
				asteroids[i].died = true;
				lasers[j].died = true;
                
			}
		}
        
        for (let j = 0; j < laserRight.length; j++) {
			if (asteroids[i].collide(laserRight[j])) {
				asteroids[i].died = true;
				laserRight[j].died = true;
                
			}
		}
        
      
        
	}
	
	for (let i = 0; i < lasers.length; i++) {
		lasers[i].display();
		lasers[i].update();
	}
    
    for (let i = 0; i < laserRight.length; i++) {
		laserRight[i].display();
		laserRight[i].update();
	}
    
	
	// clean up dead asteroids and lasers
	for (let i = 0; i < asteroids.length; i++) {
		if (asteroids[i].died) {
			asteroids[i].remove(asteroids);
		}
	}
	
	for (let i = 0; i < lasers.length; i++) {
		if (lasers[i].died) {
			lasers[i].remove(lasers);
		}
	}
    
    for (let i = 0; i < laserRight.length; i++) {
		if (laserRight[i].died) {
			laserRight[i].remove(laserRight);
		}
	}
    
   
    
    
}

















































/*
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
        
    

      //move spaceship
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
	noStroke();
	
	// position the spaceship at start of game
	spaceship.x = width/2;
	spaceship.y = height - 200;
}

function draw() {
	background('black');
	
	// adds random asteroid
	if (random(100) > 99) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();
	}
}  */









