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
  textAlign(CENTER, CENTER);
  storyX = width / 2;
  storyY = height - 50;
}

function draw() {
  background("#D2E9F7");

  if (chapter == "neutral") {
    blueMan(500, 200, 200); // blue character
    redHead(1000, 200);
    sun(100, 120, 100);

    narrative(
      "The Popsicles chose the wrong day to go outside!",
      "Click on the sun to see what happened."
    );
  } else if (chapter == "summer") {
    blueMan(550, 215, 200); // first character
    redHead(1000, 185); //red character
    sun(100, 120, 100);
     
   
    narrative(
      "Meredith warned Gary what might happen.",
      "click on his mouth to see the consequences"
    );
    image(blueManCaption, 565, 75); //blue mouth bubble
  } else if (chapter == "melted") {
    sun(120, 120, 150);
    meltBlueMan(600, 450, 500, 150);
    meltredWoman(1100, 400, 480, 140);
    narrative("They weren't getting along anyway", "");
         
  }
}
function mouseClicked() {
  // change chapter
  if (chapter == "neutral") chapter = "neutral";
  var sunDist = dist(mouseX, mouseY, 100, 120);
  if (sunDist < 100 / 2) {
    whichObject = "sun";
    chapter = "summer";
  } else if (chapter == "melted") chapter = "neutral";
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

function blueMan(x, y, s) {
  var eyeSize = s / 9;
  fill("blue");
  noStroke();
  ellipse(x, y, s); // head
  fill("white");
  stroke(0);
    strokeWeight(1);
  ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
  ellipse(x, y - eyeSize, eyeSize); // right eye
  var mouthPos = s / 10;
  arc(x - mouthPos + 30, y - mouthPos + 50, 50, 35, 0, PI + QUARTER_PI, OPEN);
  //body
  noStroke();
  var legs = s / 2;
  fill("blue");
  rect(x + legs - 130, y + 100, 60, 200, 40);
  var bodPos = s / 2;
  fill("white");
  rect(x - bodPos, y + 100, 200, 100, 20); //white body
}

function redHead(x, s) {
  var eyeSize = s / 10;
  fill("red");
  noStroke();
  ellipse(x, 200, s); // body
  fill("white");
  stroke(0);
    strokeWeight(1);
  ellipse(x + eyeSize * 3, 200 - eyeSize, eyeSize); // left eye
  ellipse(x, 200 - eyeSize, eyeSize); // right eye
  arc(1042, 230, 40, 45, 0, PI + QUARTER_PI, OPEN);

  //body
  noStroke();
  fill("red");
  rect(970, 300, 60, 200, 100);

  fill("#7FEFBD"); // dress color)
  triangle(890, 460, 1000, 320, 1100, 460);

  fill("white");
  rect(920, 300, 155, 80, 100);

  //Neck
  noStroke();
  fill(190); // neck color
  arc(1000, 295, 170, 25, 100, PI + QUARTER_PI); // Neck shape
}

function sun(x, y, s) {
  //sun
  noStroke();
  fill("#FFD800"); // sunColor
  ellipse(x, y, s); // sun shape
}

//melted characters

function meltBlueMan(x, y, w, s) {
  //body
  fill("white");
  noStroke();
  ellipse(x + 100, y + 100, w - 30, s - 30); //white Body Melted

  var eyeSize = s / 10;
  fill("blue");
  noStroke();
  ellipse(x, y, w, s); // melted BlueHead

  fill("white");
  stroke(0);
strokeWeight(1);
  ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
  ellipse(x, y - eyeSize + 20, eyeSize); // right eye
  var mouthPos = s / 10;
  arc(x - mouthPos + 30, y - mouthPos - 35, 100, 20, 0, PI + QUARTER_PI, OPEN);
}

//melted red woman
function meltredWoman(x, y, w, s) {
  //body

  fill("#7FEFBD");
  noStroke();
  ellipse(x + 100, y + 100, w - 30, s - 30); //dress Melted

  fill("white");
  noStroke();
  ellipse(x + 30, y + 80, w, s - 40); //white Body Melted

  var eyeSize = s / 10;
  fill("red");
  noStroke();
  ellipse(x, y, w, s); // meltredWomanHead

  fill("white");
  stroke(0);
    strokeWeight(1);
  ellipse(x + eyeSize * 8, y + eyeSize, eyeSize); // left eye
  ellipse(x, y - eyeSize + 25, eyeSize); // right eye
  var mouthPos = s / 10;
  arc(x - mouthPos + 5, y - mouthPos - 10, 160, 10, 0, PI + HALF_PI, OPEN);
}
//function heating() {
//     background(r, g, b);
//     r = map(mouseX, 0, windowWidth, 250, 255);
//    g = map(mouseX, 0, windowWidth, 255, 165);
//    b = map(mouseX, 0, windowWidth, 255, 0);
//   
//}

function narrative(story, instructions) {
  // narrative

  stroke("white");
  strokeWeight(5);
  fill("black");

  textSize(40);
  text(story, width / 2, height - 140);
  // instructions
  noStroke();
  fill("red");
  textSize(25);
  text(instructions, width / 2, height - 70);
}
