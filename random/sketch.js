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
    let faceSize = random(70, 250);
    let increment = faceSize;
    for (let x = 0; x <= width; x += increment) {

        let y = height / 2 + random(-100, 100);

        faceSize = random(100, 300);
        
        let r = random(200);
        let g = random(0, 200);
        let b = random(0, 255);
        fill(r, g, b);
        ellipse(x, y, faceSize, 150,); // face

        var randomChoice = random(4); // random face colors
        if (randomChoice > 3) {
            fill('#C675BA');
        } else if (randomChoice > 2) {
            fill('red');
        } else if (randomChoice > 1) {
            fill('green');
        } else {
            fill('blue');
        }
//        let r = random(200);
//        let g = random(100, 220);
//        let b = random(255);
//        fill(r, g, b);
//        ellipse(x, y, faceSize, 150,); // face
//        var randomChoice = random(3); // making random choices 
//        if (randomChoice > 2) {
//            fill('red');
//        } else if (randomChoice > 1) {
//            fill('green');
//        } else {
//            fill('blue');
//        }

        let eyeSize = faceSize / 7;
     
        
        

        if (random(1) > 0.9) {
            ellipse(x + eyeSize, y - eyeSize, eyeSize, 10); // left eye
            ellipse(x - eyeSize, y - eyeSize, eyeSize, 10); // right eye
        } else if (random(1) > .5){
            rect(x + eyeSize, y - eyeSize, eyeSize - 10, eyeSize/1.5 ); // left square eye
            rect(x - eyeSize, y - eyeSize, eyeSize - 10, eyeSize/1.5 ); // right  square  eye
        } else  {
            fill('yellow');
            ellipse(x + eyeSize, y - eyeSize, eyeSize, 30); // left eye
            ellipse(x - eyeSize, y - eyeSize, eyeSize, 30); // right eye
        }

        fill('#C675BA');
        let mouthSize = faceSize / 2;
        rect(x, y + mouthSize / 4 + random(10), mouthSize / 2 + random(30), mouthSize / 4 + random(2), mouthSize / 11 );// mouth
        fill('black');
        let noseSize = faceSize / 12 + random(5);
        rect(x, y + 2, noseSize / 2, noseSize, noseSize + 50);//nose


    }





}