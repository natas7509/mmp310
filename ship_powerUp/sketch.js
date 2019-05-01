/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;
var asteroids = [];
var lasers = [];
var powerups = [];

// probability asteroid spawned in each frame
var asteroidProb = 99;
var asteroidSound;
var laserSound;
var gameSound;

// laser timeout counter
var laserTimeout = 24; // number of frames between laser firing
var laserCounter = 0; // counts frame each time





// score
// one point for every asteroid destroyed
var kills = 0;

// player lives
var lives = 3;

function preload() {
    soundFormats('mp3', 'ogg');
    asteroidSound = loadSound('game_sounds/asteroid-1.mp3');
    laserSound = loadSound('game_sounds/laser.mp3');
    gameSound = loadSound('game_sounds/gameSound.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    spaceship = new Spaceship();
    gameSound.setVolume(0.2);
    gameSound.play();




}

function draw() {
    background(51);
   

    // add random power ups
    if (random(1000) > 998) {
        powerups.push(new Powerup());
    }

    // adds random asteroid
    if (random(100) > asteroidProb) {
        // create an asteroid
        asteroids.push(new Asteroid());
    }

    // add lasers
    if (laserCounter <= 0) {
        // shoot a laser
        if (keyIsDown(32) || keyIsDown(88)) {
            lasers.push(new Laser());
            laserCounter = laserTimeout;
            laserSound.setVolume(0.1);
            laserSound.play();
        }
    } else {
        laserCounter -= 1;
    }


    spaceship.controls();
    spaceship.display();
    spaceship.update();
    spaceship.checkEdges();



    for (let i = 0; i < powerups.length; i++) {
        if (powerups[i].collide(spaceship)) {
            // power up applied
            laserTimeout -= 5;
            powerups[i].died = true;

        }
        powerups[i].display();
        powerups[i].update();
    }

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();

        //collision with other asteroids
        for (let j = 0; j < asteroids.length; j++) {
            if (i != j) {
                if (asteroids[i].collide(asteroids[j])) {
                    asteroids[i].speed.x *= -1;
                    asteroids[j].speed.x *= -1;
                }
            }
        }

        // collision with spaceship
        if (asteroids[i].collide(spaceship)) {
            asteroids[i].died = true;
            lives -= 1;
            if (lives == 0) {
                endGame();
            }
        }

        // detect all lasers
        for (let j = 0; j < lasers.length; j++) {
            if (asteroids[i].collide(lasers[j])) {
                asteroids[i].died = true;
                lasers[j].died = true;
                asteroidSound.setVolume(0.1);
                asteroidSound.play();



                // increment score
                kills += 1;

                // after player hits asteroid, increase probability
                asteroidProb -= .1;
                if (laserTimeout < 24) {
                    laserTimeout += 0.5;
                }
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

            // create smaller asteroids
            if (asteroids[i].size >= 50) {
                for (let k = 0; k < 3; k++) {
                    asteroids.push(new Asteroid(asteroids[i].x, asteroids[i].y, 10));
                }
            }


            asteroids[i].remove(asteroids);
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
    fill('yellow');
    noStroke();
    textSize(20);
    text('Kills - ' + kills, width - 100, 30);

    // lives
    for (let i = 0; i < lives; i++) {
        var x = 20 + i * 30;
        rect(x, 30, 20, 20, 8);
    }
}


// spaceship movement control
function keyReleased() {
    spaceship.isMovingLeft = false;
    spaceship.isMovingRight = false;
}



function endGame() {
    textSize(20);
    fill('red');
    noStroke();
    text('Game Over', width / 2, height / 2);
    noLoop();
}