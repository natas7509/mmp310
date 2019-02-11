/*
wk2_310
v1.
by Jon Darling
<<<<<<< HEAD
Logic sketch
adding 3 settings
=======
Logic Settings 
>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce
Interactive Story
*/

// global variables

// blueMan
var blueX = 600;
var blueY = 300;
var blueSize = 200;
var blueEyeSize = blueSize / 8;

// meltedBlueMan
var meltblueX = 589;
var meltblueY = 420;
var meltblueSize = 179;
var meltblueEyeSize = blueSize / 8;

var meltMouthX = 640;
var meltMouthY = 360;
var meltMouthW = 50;
var meltMouthH = 60;

var mouthX = 640;
var mouthY = 330;
var mouthW = 50;
var mouthH = 50;

// redWoman
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

//sun

var sunX = 100;
var sunY = 120;
var sunSize = 100;

var story = "The Popsicles chose the wrong day to go outside!";

var storyX;
var storyY;

<<<<<<< HEAD
var caption1 = "is it getting hotter in here?";
var captionX;
var captionY;
var captionSize = 24;
=======
//startStory
var start = "click sun to start";
var startX;
var startY;
//2nd story
var pg2 = "click red mouth";
var pg2X;
var pg2Y;

//settings: neutral, summer, melting, death

var currentSetting = "neutral";
var bgColor = "#D2E9F7";
var r = 255;
var g;
var b = 255;

function preload() {
  blueManCaption = loadImage("blueManCaption.png");
  redWomanCaption = loadImage("redWomanCaption.png");
}
>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce

// settings: neutral, summer, melting/death
var currentSetting = "neutral";
var bgColor = "lightblue";


function setup() {
<<<<<<< HEAD
    createCanvas(windowWidth, windowHeight);
    textSize(38);
    textFont("roboto");
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = (100);
    captionX = width / 2;
    captionY = height / 6;
}

function draw() {

// settings
	background(bgColor);



//    background(255, 255, 200); // background color
    
    if (currentSetting == "neutral") 
		

		// to change the scene
		if (mouseIsPressed) {
			currentSetting = "summer";
			bgColor = "orange";
		}
    
    else if (currentSetting == "evening") {
		fill('orange');
		noStroke();
		ellipse(sunX, sunY + 100, sunSize);
		
		// click on a character to eat it
		if (mouseIsPressed) {
			var orangeDistance = dist(mouseX, mouseY, orangeX, orangeY);
			if (orangeDistance < orangeSize / 2) {
				fruitEaten = "orange";
				orangeWasClicked = true;
				currentSetting = "night";
				bgColor = "darkblue";
			}


//
//    if (mouseIsPressed) {
//        // add text for summer prompt
//
//        fill("red");
//        textSize(captionSize);
//        text(caption1, captionX, captionY);
//        fill("red");
//        textFont("roboto");
//    } else {
//        // day scene
//        background(255, 255, 200); // background color
//        fill("gold");
//        textSize(38);
//        textFont("roboto");
//        fill("black");
//        text(story, storyX, storyY);
//    }

    // Male Blue character
    fill("blue");
    noStroke();
    ellipse(blueX, blueY, blueSize); // head
=======
  createCanvas(windowWidth, windowHeight);
  //  createCanvas(600, 600);
  textSize(38);
  textFont("roboto");
  textAlign(CENTER, CENTER);
  storyX = width / 2;
  storyY = height / 6;

  startX = 100;
  startY = 25;
  pgX = 100;
  pgY = 25;
}

function draw() {
  // settings

  background(bgColor);

  if (currentSetting == "neutral") {
    textSize(38);
    textFont("roboto");
    fill("black");
    text(story, storyX, storyY);

    //startStory
    textSize(20);
    text(start, startX, startY);
    fill("blue");
    noStroke();
    ellipse(blueX, blueY, blueSize); // head
    fill("white");
    stroke(0);
    strokeWeight(2);
    arc(mouthX, mouthY, mouthW, mouthH, 0, PI + QUARTER_PI, OPEN); //mouth
>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce

    fill("white");
    noStroke();
    ellipse(blueX + blueEyeSize * 2.75, blueY - blueEyeSize, blueEyeSize); // left eye
    ellipse(blueX - blueEyeSize * 0.5, blueY - blueEyeSize, blueEyeSize); // right eye

<<<<<<< HEAD
=======
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

    // HAND cursor on sun
    if (
      mouseX < sunSize / 2 ||
      mouseX > sunSize + sunSize / 2 ||
      mouseY < sunSize / 2 ||
      mouseY > sunSize + sunSize / 2
    ) {
      cursor(ARROW);
    } else {
      cursor(HAND);
    }

    triangle(80, 40, 120, 40, 100, 60);

    //end of opening scene

    // changing the scene
    if (mouseIsPressed) {
      var sunDistance = dist(mouseX, mouseY, sunX, sunY); //gradually heating up
      if (sunDistance < sunSize / 2) {
        sunWasClicked = true;
        currentSetting = "summer";
      }
    }
  } else if (currentSetting == "summer") {
    r = map(mouseX, 0, windowWidth, 250, 255);
    g = map(mouseX, 0, windowWidth, 255, 165);
    b = map(mouseX, 0, windowWidth, 255, 0);
    background(r, g, b);

    //HAND cursor on redMouth
    if (mouseX > 1040 || mouseX < 980 || mouseY > 340 || mouseY < 280) {
      cursor(ARROW);
    } else {
      cursor(HAND);
    }

    //clickRedMouth
    fill(255, 170, 0);
    text(pg2, pgX, pgY);
    fill("blue");
    noStroke();
    ellipse(blueX, blueY, blueSize); // head
    fill("white");
>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce
    stroke(0);
    strokeWeight(2);
    arc(mouthX, mouthY, mouthW, mouthH, 0, PI + QUARTER_PI, OPEN); //mouth

<<<<<<< HEAD
=======
    fill("white");
    noStroke();
    ellipse(blueX + blueEyeSize * 2.75, blueY - blueEyeSize, blueEyeSize); // left eye
    ellipse(blueX - blueEyeSize * 0.5, blueY - blueEyeSize, blueEyeSize); // right eye

>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce
    //body
    noStroke();
    fill("blue");
    rect(575, 400, 60, 200, 100);
    fill("white");
    rect(500, 400, 200, 100, 20);

<<<<<<< HEAD
    //Neck
    noStroke();
    fill(190); // neck color
    arc(600, 400, 200, 20, 100, PI + QUARTER_PI); // Neck shape

    // Female red character
=======
    //neck
    noStroke();
    fill(190); // neck color
    arc(600, 400, 200, 20, 100, PI + QUARTER_PI); // Neck shape
    image(blueManCaption, 600, 170);
  }

  //redWoman response
  if (mouseIsPressed) {
    var redDistance = dist(mouseX, mouseY, redX, redY);
  }
  if (redDistance < redSize / 2) {
    redWasClicked = true;
    currentSetting = "melting";
  } else if (currentSetting == "melting") {
    // (what IT LOOKS LIKE after redWoman is clicked !!)

    background("#FF671C");
    cursor(ARROW);

    //meltedScene

    fill("blue");
    noStroke();
    ellipse(meltblueX, meltblueY, meltblueSize); // meltedBlueHead

    //sun
    noStroke();
    fill("#FFD800"); // sunColor
    ellipse(sunX, sunY, sunSize); // sun shape

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

    image(redWomanCaption, 988, 85);
  }

  // Male Blue character // (THE STATE BEFORE YOU CLICK REDWOMAN !!)
  if (!redWasClicked) {
>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce
    fill("red");
    noStroke();
    ellipse(redX, redY, redSize); // head

    fill("white");
    noStroke();
    ellipse(redX + redEyeSize * 2.75, redY - redEyeSize, redEyeSize); // left eye
    ellipse(redX - redEyeSize * 0.5, redY - redEyeSize, redEyeSize); // right eye

<<<<<<< HEAD
=======
    //red woman mouth
>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce
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
<<<<<<< HEAD
    arc(1000, 375, 170, 20, 100, PI + QUARTER_PI); // Neck shape
}
=======
    arc(1000, 380, 170, 25, 100, PI + QUARTER_PI); // Neck shape
  }

  //sun
  noStroke();
  fill("#FFD800"); // sunColor
  ellipse(sunX, sunY, sunSize); // sun shape
}
>>>>>>> b18bd005f95eff10ad3dbe41014d3253fd4af3ce
