/*
	mmp 310 week 3
	interactive story
	plot sketch, adding functions
*/

// global variables

var whichObject;

var chapter = "neutral"; // summer, melted

function preload() {
  blueManCaption = loadImage("blueManCaption.png");
  redWomanCaption = loadImage("redWomanCaption.png");
}

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
    redHead(1000, 200);
    sun(100, 120, 100);
    narrative(
      "The Popsicles chose the wrong day to go outside!",
      "Click on the sun to see what happened."
    );
  } else if (chapter == "summer") {
    blueHead(600, 180); // first character
    redHead(1000, 185); //red character
    sun(100, 120, 100);
    narrative(
      "meredith warned gary what might happen.",
      "click on his mouth to see the consequences"
    );
      image(blueManCaption, 565, 75);
  } else if (chapter == "melted") {
    blueHead(600, 170); // first character
    redHead(1000, 180); //red character
    sun(100, 120, 100);
    narrative(
      "The Popsicles chose the wrong day to go outside!",
      "you are pathetic!."
    );
  }
}
function mouseClicked() {
  // change chapter
  if (chapter == "neutral") chapter = "neutral";
     var sunDist = dist(mouseX, mouseY, 100, 120);
    if (sunDist < 100 / 2) {
      whichObject = "sun";
      chapter = "summer";
    }
  else if (chapter == "melted") chapter = "neutral";
    
  // detect which character is clicked
  else if (chapter == "summer") 
    // clicked the orange
    var blueDist = dist(mouseX, mouseY, 600, 200);
    if (blueDist < 180 / 2) {
      whichObject = "blue";
      chapter = "melted";
    }
    // clicked red
    else if (chapter == "melted") {
    var redDist = dist(mouseX, mouseY, 1000, 200);
    if (redDist < 75 / 2) {
      whichObject = "red";


    }
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
  fill("black");
  stroke(255);
  textSize(40);
  text(story, width / 2, height - 200);
  // instructions
  fill("red");
  textSize(25);
  text(instructions, width / 2, height - 70);
}
