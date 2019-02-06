/*
wk1_310
v1.
by Jon Darling
Logic sketch
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
var redSize = 160;
var redEyeSize = redSize / 8;

var redmouthX = 1000;
var redmouthY = 330;
var redmouthW = 30;
var redmouthH = 40;

var story = "The adventures of the Popsicles.";
var storyX;
var storyY;

var caption1 = "is it getting hotter?";
var captionX;
var captionY;
var captionSize = 24;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(38);
  textFont("roboto");
  textAlign(CENTER, CENTER);
  storyX = width / 2;
  storyY = height / 6;
  captionX = width / 2;
  captionY = height / 6;
}

function draw() {
  background(255, 255, 200); // background color

  if (mouseIsPressed) {
    // add text for Winter prompt
    background("orange");
    fill("red");
    textSize(captionSize);
    text(caption1, captionX, captionY);
    fill("red");
    textFont("roboto");
  } else {
    // day scene
    background(255, 255, 200); // background color
    fill("gold");
    textSize(38);
    textFont("roboto");
    fill("black");
    text(story, storyX, storyY);
  }

  // Male Blue character
  fill("blue");
  noStroke();
  ellipse(blueX, blueY, blueSize); // head

  fill("white");
  noStroke();
  ellipse(blueX + blueEyeSize * 2.75, blueY - blueEyeSize, blueEyeSize); // left eye
  ellipse(blueX - blueEyeSize * 0.5, blueY - blueEyeSize, blueEyeSize); // right eye

  stroke(0);
  strokeWeight(2);
  arc(mouthX, mouthY, mouthW, mouthH, 0, PI + QUARTER_PI, OPEN); //mouth

  //body
  noStroke();
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

  stroke(0);
  strokeWeight(2);
  arc(redmouthX, redmouthY, redmouthW, redmouthH, 0, PI + QUARTER_PI, OPEN); //mouth

  //body
  noStroke();
  fill("red");
  rect(970, 400, 60, 200, 100);
  fill("white");
  rect(920, 380, 155, 100, 100);

  fill("#7FEFBD"); // dress color)
  triangle(890, 520, 1000, 380, 1100, 520);

  //Neck
  noStroke();
  fill(190); // neck color
  arc(1000, 375, 170, 20, 100, PI + QUARTER_PI); // Neck shape
}
