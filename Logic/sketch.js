/*
wk1_310
v1.
by Jon Darling
Logic sketch
Interactive Story
*/

// global variables

// blueMan
var blueX = 600;
var blueY = 300;
var blueSize = 200;
var blueEyeSize = blueSize / 8;

// melttedBlueMan
var meltblueX = 589;
var meltblueY = 420;
var meltblueSize = 179;
var meltblueEyeSize = blueSize / 8;

var meltMouthX = 640;
var meltMouthY = 360;
var meltMouthW = 50;
var meltMouthH = 50;

var mouthX = 640;
var mouthY = 330;
var mouthW = 50;
var mouthH = 50;

// red character

var redX = 1000;
var redY = 300;
var redSize = 200;

var redEyeSize = redSize / 8;

var redWasClicked = false;


var redmouthX = 1000;
var redmouthY = 330;
var redmouthW = 30;
var redmouthH = 40;

//meltRedMouth

var meltredmouthX = 990;
var meltredmouthY = 340;
var meltredmouthW = 20;
var meltredmouthH = 45;
var meltredmouthSize = 20;

var story = "The adventures of the Popsicles.";
var storyX;
var storyY;

var caption1 = "is it getting hotter in here?";
var captionX;
var captionY;
var captionSize = 24;

var caption2 = "oh my god!!";
var caption2X;
var caption2Y;
var caption2Size = 24;

var sunX = -50;
var sunY = 20;


//settings: neutral, summer, melting, death
var currentSetting = "neutral";
var bgColor = "#B5E1FC";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(38);
  textFont("roboto");
  textAlign(CENTER, CENTER);
  storyX = width / 2;
  storyY = height / 6;
  captionX = width / 1.6;
  captionY = height / 2;
  caption2X = 1150;
  caption2Y = height / 2;
}

function draw() {
  // settings
  background(bgColor);

  if (currentSetting == "neutral") {
    textSize(38);
    textFont("roboto");
    fill("black");
    text(story, storyX, storyY);

    if (mouseIsPressed) {
      currentSetting = "summer";
      bgColor = "#B5E1FC";
    }
  } else if (currentSetting == "summer") {
    // getting hotter? prompt
    background("#FCB864");
    fill("black");
    textSize(captionSize);
    text(caption1, captionX, captionY);
    //    fill("red");
    textFont("roboto");
  }

  
  //redWoman response
  if (mouseIsPressed) {
    var redDistance = dist(mouseX, mouseY, redX, redY);
  }
  if (redDistance < redSize / 2) {
    redWasClicked = true;
    currentSetting = "melting";
    background("#FF671C");
    fill("black");
    textSize(caption2Size);
    text(caption2, caption2X, caption2Y);
    fill("red");
    textFont("roboto");
  } else if (currentSetting == "melting") {
    // (what IT LOOKS LIKE after redWoman is clicked !!)

    background("#FF671C");

    fill("blue");
    noStroke();
    ellipse(meltblueX, meltblueY, meltblueSize); // meltedBlueHead

    // meltedblueEyes

    fill("white");
    noStroke();
    ellipse(
      meltblueX + meltblueEyeSize * 1.8,
      meltblueY - meltblueEyeSize,
      meltblueEyeSize
    ); // left eye

    ellipse(
      meltblueX - meltblueEyeSize * 0.5,
      meltblueY - meltblueEyeSize * 0.5,
      meltblueEyeSize
    ); // right eye

    textSize(caption2Size);
    fill("white");
    textFont("roboto");
    text(caption2, caption2X, caption2Y);

    //meltedBlueBody
    noStroke();
    fill("blue");
    ellipse(600, 500, 300, 100);

    // melted red woman

    fill("red");
    noStroke();
    ellipse(redX, redY, redSize); // head

    fill("white");
    noStroke();
    ellipse(redX + redEyeSize * 2.0, redY - redEyeSize, redEyeSize); // left eye
    ellipse(redX - redEyeSize * 0.5, redY - redEyeSize * 2, redEyeSize); // right eye

    //red woman mouth
    stroke(0);
    strokeWeight(2);
    ellipse(
      meltredmouthX,
      meltredmouthY,
      meltredmouthW,
      meltredmouthH,
      meltredmouthSize
    ); //mouth

    //meltedRedBody
    noStroke();
    fill("red");
    ellipse(970, 400, 300, 50);
    fill("red");
    rect(940, 390, 168, 80, 50);

    fill("#7FEFBD"); // melted dress color)
    ellipse(940, 500, 180, 80);
    ellipse(950, 460, 140, 50);

    //Neck
    noStroke();
    fill(190); // neck color
    arc(1000, 375, 170, 20, 100, PI + QUARTER_PI); // Neck shape
  }

  // Male Blue character // (THE STATE BEFORE YOU CLICK REDWOMAN !!)
  if (!redWasClicked) {
    fill("blue");
    noStroke();
    ellipse(blueX, blueY, blueSize); // head
    fill("white");
    stroke(0);
    strokeWeight(2);
    arc(mouthX, mouthY, mouthW, mouthH, 0, PI + QUARTER_PI, OPEN); //mouth

    fill("white");
    noStroke();
    ellipse(blueX + blueEyeSize * 2.75, blueY - blueEyeSize, blueEyeSize); // left eye
    ellipse(blueX - blueEyeSize * 0.5, blueY - blueEyeSize, blueEyeSize); // right eye

    //body
    noStroke();
    fill("blue");
    rect(575, 400, 60, 200, 100);
    fill("white");
    rect(500, 400, 200, 100, 20);

    //neck
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

    //red woman mouth
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

  //SUN
 
  noStroke();
  fill("#FFD800"); // sunColor
  ellipse(sunX, sunY, 200, 200, 100); // sun shape
}
