/*
wk4_310
v1.
by Jon Darling
characters sketch
randomness
*/


function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#CCDDE2');
    rectMode(CENTER);
    noStroke();
    //face creations
    let faceSize = random(100, 300);
    let increment = faceSize;
    for (let x = 0; x <= width; x += increment) {

        let y = height / 2 + random(-100, 100);

        faceSize = random(100, 300);

        var randomChoice = random(4); // random face colors
        if (randomChoice > 3) {
            fill('#C675BA');
        } else if (randomChoice > 2) {
            fill('purple');
        } else if (randomChoice > 1) {
            fill('green');
        } else {
            fill('blue');
        }
        let r = random(255);
        let g = random(100, 220);
        let b = random(255);
        fill(r, g, b);
        ellipse(x, y, faceSize); // face
        var randomChoice = random(3); // making random choices 
        if (randomChoice > 2) {
            fill('gold');
        } else if (randomChoice > 1) {
            fill('green');
        } else {
            fill('blue');
        }

        let eyeSize = faceSize / 7;

        if (random(1) > 0.5) {
            ellipse(x + eyeSize, y - eyeSize, eyeSize, 20); // left eye
            ellipse(x - eyeSize, y - eyeSize, eyeSize, 20); // right eye
        } else {
            rect(x + eyeSize, y - eyeSize, eyeSize, eyeSize, ); // left square eye
            rect(x - eyeSize, y - eyeSize, eyeSize, eyeSize, ); // right  square eye
        }

        fill('#C60FAB');
        let mouthSize = faceSize / 2;
        rect(x, y + mouthSize / 2 + random(20), mouthSize / 2, mouthSize / 4 + random(2), mouthSize / 11);
        fill('black');
        let noseSize = faceSize / 5 + random(.8);
        rect(x, y + noseSize - 20, noseSize / 4, noseSize);


    }





}