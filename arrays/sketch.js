/*
	jon darling
    MMP-310
    week 7
    Arrays
    


***************************
*/


// height of my 12 popsicles
var popsicles = [50, 100, 65, 100, 35, 105, 65, 125, 155, 80, 100, 36, 55];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("grey");
    noStroke();

    for (let i = 0; i < popsicles.length; i++) {
        let x = (i * width) / popsicles.length;
        let s = popsicles[i]; // size
        let r = random(500);
        popsicle(x, r, s);
    }
}

function popsicle(x, y, s) {
    var eyeSize = s / 9;
    //head********************
    fill("blue");
    stroke(0);
    strokeWeight(1);
    ellipse(x, y, s); // head
    //eyes*****************
    fill("white");
    ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
    ellipse(x, y - eyeSize, eyeSize); // right eye
    //mouth****************
    var mouthSize = s / 4;
    fill("red");
    stroke(0);
    strokeWeight(2);
    ellipse(x + mouthSize, y + mouthSize, mouthSize, 10); //mouth
    //body**********************
}
