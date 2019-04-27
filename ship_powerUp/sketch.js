/*
	jon darling
    MMP-310
    week-9
    Ship-Laser
    
 */

var spaceship;
var asteroids = [];
var lasers = [];
var powerups = [];

// laser timeout counter
var laserTimeout = 24; // number of frames between laser firing
var laserCounter = 0; // counts frame each time
var laserRed = 0;

// score
// one point for every asteroid destroyed
var kills = 0;

// player lives
var lives = 3;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  a = new Asteroid();
  spaceship = new Spaceship();
  powerup = new Powerup();
}

function draw() {
  noStroke();
  background("black");

  // add random power ups
  if (random(1000) > 998) {
    powerups.push(new Powerup());
  }

  a.display();
  a.update();

  // adds random asteroid
  if (random(100) > 99) {
    // create an asteroid
    asteroids.push(new Asteroid());
  }

  // add lasers
//  if (keyIsDown(32) || keyIsDown(88)) {
//    lasers.push(new Laser());
//  }
    
    // add lasers
	if (laserCounter <= 0) {
		// shoot a laser
		if (keyIsDown(32) || keyIsDown(88)) {
			lasers.push(new Laser());
			laserCounter = laserTimeout;
		}
	} else {
		laserCounter -= 1;	
	}

  spaceship.controls();
  spaceship.display();
  spaceship.update();

  for (let i = 0; i < powerups.length; i++) {
    if (powerups[i].collide(spaceship)) {
      // power up applied
      laserTimeout -= 2;
      powerups[i].died = true;
      laserRed += 10;
    }
    powerups[i].display();
    powerups[i].update();
  }

  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].display();
    asteroids[i].update();

    // collision with spaceship
    if (asteroids[i].collide(spaceship)) {
      // end game
      textAlign(CENTER, CENTER);
      textSize(100);
      fill("#fff");
      text("PUNISHED!!!", width / 2, height / 2);
      noLoop();
    }

    // detect all lasers
    for (let j = 0; j < lasers.length; j++) {
      if (asteroids[i].collide(lasers[j])) {
        asteroids[i].died = true;
        lasers[j].died = true;
      }
    }
  }

  for (let i = 0; i < lasers.length; i++) {
    lasers[i].display();
    lasers[i].update();
  }

  // clean up dead asteroids and lasers
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i].died) {
      asteroids[i].remove(asteroids);

      // score count
      kills += 1;
    }
  }

  for (let i = 0; i < lasers.length; i++) {
    if (lasers[i].died) {
      lasers[i].remove(lasers);
    }
  }
  for (let i = 0; i < powerups.length; i++) {
    if (powerups[i].died) {
      powerups[i].remove(powerups);
    }
  }

  /* user display */

  // score
  stroke("#fff");
  strokeWeight(1);
  textSize(40);
  text("kills: " + kills, width - 200, 40);

  // lives
  for (let i = 0; i < lives; i++) {
    var x = 20 + i * 30;
    rect(x, 20, 20, 20);
  }
}
