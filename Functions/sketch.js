/*
	mmp 310 week 3
	interactive story
	plot sketch, adding functions
*/



// global variables

var whichObject;



var chapter = "neutral"; // day, night

function setup() {
    createCanvas(windowWidth, windowHeight);
    //    textSize(40);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
}

function draw() {
    background("#D2E9F7");

    if (chapter == "neutral") {
        blueHead(600, 200); // blue character
        redHead(1000, 200); //red character
        sun(100, 120, 100);
        narrative("The Popsicles chose the wrong day to go outside!", "Click on the sun to see what happened.");
    } else if (chapter == "summer") {
        blueHead(600, 180); // first character
        redHead(1040, 160); //red character
        sun(100, 120, 100);
         narrative("merridith warned gary what might happen.", "click on her mouth to see the consequences");
    } else if (chapter == "melted") {
        blueHead(600, 240); // first character
        redHead(1000, 300); //red character
        sun(100, 120, 100);
        narrative("The Popsicles chose the wrong day to go outside!", "Click on the sun to see what happened.");
    }

    
}

function mouseClicked() {
    // change chapter
    if (chapter == "neutral") chapter = "summer";
     var sunDist = dist(mouseX, mouseY, 800, 200);
        if (sunDist < 100 / 2) {
            whichObject = "blueHead";
            chapter = "melted";
  
} else if (chapter == "melted") chapter = "neutral";

    // detect which character is clicked
    else if (chapter == "summer") {
        // clicked the blueMan
       
        }
        // clicked redWoman
        var redDist = dist(mouseX, mouseY, 400, 100);
        if (redDist < 150 / 2) {
            whichObject = "redHead";
            chapter = "melted";
        }

}

function blueHead(x, s) {
    var eyeSize = s / 9;
    fill("blue");
    noStroke();
    ellipse(x, 200, s); // body
    fill("white");
    stroke(0);
    ellipse(x + eyeSize * 3, 200 - eyeSize, eyeSize); // left eye
    ellipse(x, 200 - eyeSize, eyeSize); // right eye
    arc(x, 240, 50, 35, 0, PI + QUARTER_PI, OPEN);
}

function redHead(x, s) {
    var eyeSize = s / 10;
    fill("red");
    noStroke();
    ellipse(x, 200, s); // body
    fill("white");
    stroke(0);
    ellipse(x + eyeSize * 3, 200 - eyeSize, eyeSize); // left eye
    ellipse(x, 200 - eyeSize, eyeSize); // right eye
    arc(1042, 230, 40, 45, 0, PI + QUARTER_PI, OPEN);
}

function sun(x, y, s) {

    //sun
    noStroke();
    fill("#FFD800"); // sunColor
    ellipse(x, y, s); // sun shape
}

function narrative(story, instructions) {
    // narrative
    fill('black');
    stroke(255);
    textSize(40);
    text(story, width / 2, height - 200);
    // instructions
    fill ('red');
    textSize(25);
    text(instructions, width / 2, height - 70);
}