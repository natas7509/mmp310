/*
	jon darling
    MMP-310
    week 7
    array drawing
    


***************************
*/

var r_ = (255);
var g_ = (0);
var b_ = (0, 255);

var r = 0;
var popsicles = []; // empty popsicle heads

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(50);
    noStroke();

    if (mouseIsPressed) {
        popsicles.push([mouseX, mouseY]);
    }

    for (let i = 0; i < popsicles.length; i++) {
        popsicle(popsicles[i][0], popsicles[i][1], 70);
        popsicles[i][0] += 1;
    }

    translate(width / 2, height / 2);
    scale(r);
    r += 0.01;

    for (let i = 0; i < popsicles.length; i++) {
        let x = popsicles[i][0] - width / 2;
        let y = popsicles[i][1] - height / 2;
        let s = popsicles[i][1] - height/ 4;

   
        fill(r_,g_,b_);
        stroke(0);
        strokeWeight(.2);
        rect(x, y, 5, s); //flying stick
        fill(r_,g_,b_);
        stroke(0);
        strokeWeight(.2);
        ellipse(x, y + 3, s); //flying lolly pop


    }

    if (random(70) > 69) r = 0;


}

/**************************
popsicle head*/

function popsicle(x, y, s) {
    var eyeSize = s / 9;
    //head********************
    fill("blue");
    stroke(0);
    strokeWeight(.2);
    ellipse(x, y, s); // head
    //eyes*****************
    fill("white");
    ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
    ellipse(x, y - eyeSize, eyeSize); // right eye
    //mouth****************
    var mouthSize = s / 4;
    fill("red");
    stroke(0);
    strokeWeight(.5);
    ellipse(x + mouthSize, y + mouthSize, mouthSize, 10); //mouth
    //body**********************
}
