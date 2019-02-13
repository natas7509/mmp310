/*
	mmp 310 week 3
	interactive story
	plot sketch, adding functions
*/

// global variables
var story = "Once there were the Popsicles";
var storyX;
var storyY;

var chapter = "morning"; // day, night

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);
  storyX = width / 2;
  storyY = height - 50;
}

function draw() {
  background(50);

  if (chapter == "morning") {
    blueHead(600, 200); // first character
    redHead(1000, 200);
  } else if (chapter == "day") {
    blueMan(300, 150);
    banana(400, 75);
  } else if (chapter == "night") {
    blueMan(600, 100);
    banana(700, 50);
  }

  stroke(255);
  text(story, storyX, storyY);
}

function mouseClicked() {
  if (chapter == "morning") chapter = "day";
  else if (chapter == "day") chapter = "night";
  else if (chapter == "night") chapter = "morning";
}

function blueHead(x, s) {
  var eyeSize = s / 10;
  fill("blue");
  noStroke();
  ellipse(x, 200, s); // body
  fill("white");
  stroke(0);
  ellipse(x + eyeSize * 3, 200 - eyeSize, eyeSize); // left eye
  ellipse(x, 200 - eyeSize, eyeSize); // right eye
  arc(642, 230, 50, 35, 0, PI + QUARTER_PI, OPEN);
}

function redHead(x,s) {
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
