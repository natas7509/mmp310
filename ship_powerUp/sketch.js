/*
	jon darling
    MMP-310
    week-9
    Ship-Laser
    
 */

var spaceship;
var asteroids = [];
var lasers = [];


function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  a = new Asteroid();
  spaceship = new Spaceship();
  
}

function draw() {
  noStroke();
  background("black");


  a.display();
  a.update();

  // adds random asteroid
  if (random(100) > 99) {
    // create an asteroid
    asteroids.push(new Asteroid());
  }

//   add lasers
  if (keyIsDown(32) || keyIsDown(88)) {
    lasers.push(new Laser());
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

     
    }
  }

  for (let i = 0; i < lasers.length; i++) {
    if (lasers[i].died) {
      lasers[i].remove(lasers);
    }
  }
 

}
