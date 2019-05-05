/*
	mmp 310
	Final Project
*/

//Global Variables
var stars = [];
var spaceship;
var asteroids = [];
var lasers = [];
var powerups = [];

//stars Gravity
var gravity;


// probability asteroid spawned in each frame
var asteroidProb = 99;

//Game Audio
var pilot;
var asteroidSound;
var laserSound;
var gameSound;
var powerSound;
var deathSound;
var explosionSound;
var lifeLost;
//images
var explosionImg;

// laser timeout counter
var laserTimeout = 24; // number of frames between laser firing
var laserCounter = 0; // counts frame each time

//-----------SCORE-------------

// one point for every asteroid destroyed
var kills = 0;
// player lives
var lives = 3;
var text = 50;


function preload() {
    //sounds
    soundFormats('mp3', 'ogg');
    pilot = loadSound("game_sounds/pilot.mp3");
    gameSound = loadSound("game_sounds/gameSound.mp3");
    asteroidSound = loadSound("game_sounds/asteroidSound.mp3");
    laserSound = loadSound("game_sounds/laser.mp3");
    powerSound = loadSound("game_sounds/power.mp3");
    deathSound = loadSound("game_sounds/death.mp3");
    explosionSound = loadSound("game_sounds/shipExplode.mp3");
    lifeLost = loadSound("game_sounds/lifeLost.mp3");
    //images
    explosionImg = loadImage("images/explosion-1.png");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.03);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    spaceship = new Spaceship();
    //looped sounds
    gameSound.loop();
    gameSound.setVolume(0.1);
    gameSound.play();
    pilot.loop();
    pilot.setVolume(0.4);
    pilot.play();


}


function draw() {
    background(0);
    /*-------------------------
    stars
    ----------------------*/
    stars.push(new Star());
    for (let i = 0; i < stars.length; i++) {
        stars[i].display();
        stars[i].update();
    }


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

    //Spaceship Info
    spaceship.controls();
    spaceship.display();
    spaceship.update();
    spaceship.checkEdges();

    //PowerUps
    for (let i = 0; i < powerups.length; i++) {
        if (powerups[i].collide(spaceship)) {
            // power up applied
            powerSound.setVolume(0.1);
            powerSound.play();
            laserTimeout -= 5;
            powerups[i].died = true;

        }
        powerups[i].display();
        powerups[i].update();
    }
    //ASTEROIDS
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
            lifeLost.setVolume(0.05);
            lifeLost.play();
            lives -= 1;

            if (lives == 0) {
                lifeLost.stop();
                deathSound.setVolume(0.9);
                deathSound.play();
                explosionSound.setVolume(0.2);
                explosionSound.play();
                pilot.stop();
                gameSound.stop();
                image(explosionImg, spaceship.x - width * 0.10, spaceship.y - height * 0.08, width / 4.0, height / 3.7);
                endGame();
            }
        }

        // detect all lasers
        for (let j = 0; j < lasers.length; j++) {
            if (asteroids[i].collide(lasers[j])) {
                asteroids[i].died = true;
                lasers[j].died = true;
                asteroidSound.setVolume(0.7);
                asteroidSound.play();

                // increment score
                kills += 1;

                // after laser hits asteroid, increase probability
                asteroidProb -= 0.1;
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
            if (asteroids[i].size >= 20) {
                for (let k = 0; k < random(2, 4); k++) {
                    asteroids.push(new Asteroid(asteroids[i].x, asteroids[i].y, asteroids[i].size / 2));
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

    // teeth




    /*------------------------------------- 
      TEXT DISPLAY
      ---------------------------------------*/

    // score
    fill("yellow");
    noStroke();
    textSize(width * 0.04);
    text("Kills - " + kills, width * .8, height * 0.04);


    // lives
    for (let i = 0; i < lives; i++) {
        var x = 20 + i * 60;
        rect(x, 30, 20, 20, 8);

    }
}








/*------------------------------------- 
   FUNCTIONS
 ---------------------------------------*/

// spaceship movement control
function keyReleased() {
    spaceship.isMovingLeft = false;
    spaceship.isMovingRight = false;
    spaceship.isMovingUp = false;
    spaceship.isMovingDown = false;
}

function endGame() {
    textSize(width * 0.07);
    fill("red");
    noStroke();
    text("Game Over", width / 2, height / 2);
    noLoop();
}






/*-------------------------------
MOBILE TOUCH
-------------------------------*/


var touch = {};

function touchStarted() {
    if (touches[0]) {
        touch.x = touches[0].x;
        touch.y = touches[0].y;
        touch.px = touches[0].x;
        touch.py = touches[0].y;
    }
}

function touchMoved() {
    if (touches[0]) {
        touch.x = touches[0].x;
        touch.y = touches[0].y;
    }
}


// below threshold is tap, above is a swipe
var threshold = 20;

function touchEnded() {

    // delta is change between touch start and end
    var delta = touch.x - touch.px;

    if (delta > threshold) {
        // swipe right
        spaceship.setSpeed(5);
    } else if (delta < -threshold) {
        // swipe left
        spaceship.setSpeed(-5);
    } else {
        // tap	
        lasers.push(new Laser());
        laserCounter = laserTimeout;
        spaceship.setSpeed(0);
    }

}
