/*
wk1_310
v1.
by Jon Darling
characters sketch
Interactive Story
*/

// global variables
var blueX = 600;
var blueY = 300;
var blueSize = 200;
var blueEyeSize = blueSize / 8;

var mouthX = 640;
var mouthY = 330;
var mouthW = 50;
var mouthH = 50;

// red character

var redX = 1000;
var redY = 300;
var redSize = 150;
var redEyeSize = redSize / 8;

var redmouthX = 1000;
var redmouthY = 330;
var redmouthW = 30;
var redmouthH = 40;

var story = "The adventures of the Popsicles.";
var storyX;
var storyY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(38);
  textFont("roboto");
  textAlign(CENTER, CENTER);
  storyX = width / 2;
  storyY = height - 40;
}

function draw() {
  background(50);

  // Male Blue character
  fill("blue");
  noStroke();
  ellipse(blueX, blueY, blueSize); // head

  fill("white");
  noStroke();
  ellipse(blueX + blueEyeSize * 2.75, blueY - blueEyeSize, blueEyeSize); // left eye
  ellipse(blueX - blueEyeSize * 0.5, blueY - blueEyeSize, blueEyeSize); // right eye
  arc(mouthX, mouthY, mouthW, mouthH, 0, PI + QUARTER_PI, OPEN); //mouth

  //body
  fill("blue");
  rect(575, 400, 60, 200, 100);
  fill("white");
  rect(500, 400, 200, 100, 20);

  //Neck
  noStroke();
  fill(190); // neck color
  arc(600, 400, 200, 20, 100, PI + QUARTER_PI); // Neck shape

  // Female red character
  fill("red");
  noStroke();
  ellipse(redX, redY, redSize); // head

  fill("white");
  noStroke();
  ellipse(redX + redEyeSize * 2.75, redY - redEyeSize, redEyeSize); // left eye
  ellipse(redX - redEyeSize * 0.5, redY - redEyeSize, redEyeSize); // right eye
  arc(redmouthX, redmouthY, redmouthW, redmouthH, 0, PI + QUARTER_PI, OPEN); //mouth

  //body
  fill("red");
  rect(970, 400, 60, 200, 100);
  fill("white");
//  rect(900, 380, 200, 100, 20);
  triangle(890, 520, 1000, 380, 1100, 520);

  //Neck
  noStroke();
  fill(190); // neck color
  arc(1000, 375, 170, 20, 100, PI + QUARTER_PI); // Neck shape

  //text
  textStyle("italic");
  fill("white");
  stroke("rgb(0,255,0)");
  strokeWeight(1.7);
  text(story, storyX, storyY);
}
