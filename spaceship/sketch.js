/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;
var asteroids = [];

function setup() {

	createCanvas(windowWidth, windowHeight);
	noStroke();
	
	spaceship = new Spaceship();
}

function draw() {
	background(51);
	
	// adds random asteroid
	if (random(100) > 99) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}
	
	spaceship.controls();
	spaceship.display();
	spaceship.update();
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();
	}
}
