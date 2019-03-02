/*
wk4_310
v1.
by Jon Darling
characters sketch
loops
*/




var s = 200;
var y = 400;
var eyeSize = 20;
var mouth

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(30,100,16);
    rectMode(CENTER);
    noStroke();

    for (let x = 100; x < width; x += 200) {
        fill('plum');
        ellipse(x, y, s); // face
        fill(0);
        ellipse(x + eyeSize * 2, y - 20, 50, 20); // left ey2
        ellipse(x - eyeSize * 2, y - 20, 50, 20); // right eye
        fill('gold');
        rect(x, y + 60, 80, 30, 20); // mouth
        fill('blue');
        rect(x, y + 20, 20, 40, 10); //nose
    }
   

    	


}
