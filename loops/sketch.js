/*
wk4_310
v1.
by Jon Darling
characters sketch
loops
*/


function setup() {
    createCanvas(windowWidth, windowHeight);
    background('grey');


    rectMode(CENTER);


    noStroke();

    for (let x = 100; x < width; x += 400) {
//        fill('yellow');
        ellipse(x, height/2, 200); // face
     
        var c = map (x, 0, 4, 0, 255);
        fill(c);
        ellipse(x + 50,height/2-35, 50, 50); // left eye
        ellipse(x - 50,height/2-35, 50, 50); // right eye
        fill('gold');
        rect(x, height/2+50, 66, 25, 22); // mouth
        fill('blue');
        rect(x, height/2, 25, 40, 22); // nose
    }

    

}