/*
wk2_310
v1.
by Jon Darling
Functions 
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

function setup() {
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

    if (chapter == "neutral") {

        //blueMan
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
        
        textSize(38);
        textFont("roboto");
        fill("black");
        text(story, storyX, storyY);
    
        //startStory
        textSize(20);
        text(start, startX, startY);
        
        
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


    } else if (chapter == "summer") {
       
    } else if (chapter == "night") {
        orange(600, 100);
        banana(700, 50);
    }
}


  
    //
    //
    //    // changing the scene
    //    if (mouseIsPressed) {
    //      var sunDistance = dist(mouseX, mouseY, sunX, sunY); //gradually heating up
    //      if (sunDistance < sunSize / 2) {
    //        sunWasClicked = true;
    //        currentSetting = "summer";
    //      }
    //    }
    //  } else if (currentSetting == "summer") {
    //    r = map(mouseX, 0, windowWidth, 250, 255);
    //    g = map(mouseX, 0, windowWidth, 255, 165);
    //    b = map(mouseX, 0, windowWidth, 255, 0);
    //    background(r, g, b);
    //
    //    //HAND cursor on redMouth
    //    if (mouseX > 1040 || mouseX < 980 || mouseY > 340 || mouseY < 280) {
    //      cursor(ARROW);
    //    } else {
    //      cursor(HAND);
    //    }
    //
    //    //clickRedMouth
    //    fill(255, 170, 0);
    //    text(pg2, pgX, pgY);
    //    fill("blue");
    //    noStroke();
    //    ellipse(blueX, blueY, blueSize); // head
    //    fill("white");
    //    stroke(0);
    //    strokeWeight(2);
    //    arc(mouthX, mouthY, mouthW, mouthH, 0, PI + QUARTER_PI, OPEN); //mouth
    //
    //    fill("white");
    //    noStroke();
    //    ellipse(blueX + blueEyeSize * 2.75, blueY - blueEyeSize, blueEyeSize); // left eye
    //    ellipse(blueX - blueEyeSize * 0.5, blueY - blueEyeSize, blueEyeSize); // right eye
    //
    //    //body
    //    noStroke();
    //    fill("blue");
    //    rect(575, 400, 60, 200, 100);
    //    fill("white");
    //    rect(500, 400, 200, 100, 20);
    //
    //    //neck
    //    noStroke();
    //    fill(190); // neck color
    //    arc(600, 400, 200, 20, 100, PI + QUARTER_PI); // Neck shape
    //    image(blueManCaption, 600, 170);
    //  }
    //
    //  //redWoman response
    //  if (mouseIsPressed) {
    //    var redDistance = dist(mouseX, mouseY, redX, redY);
    //  }
    //  if (redDistance < redSize / 2) {
    //    redWasClicked = true;
    //    currentSetting = "melting";
    //  } else if (currentSetting == "melting") {
    //    // (what IT LOOKS LIKE after redWoman is clicked !!)
    //
    //    background("#FF671C");
    //    cursor(ARROW);
    //
    //    //meltedScene
    //
    //    fill("blue");
    //    noStroke();
    //    ellipse(meltblueX, meltblueY, meltblueSize); // meltedBlueHead
    //
    //    //sun
    //    noStroke();
    //    fill("#FFD800"); // sunColor
    //    ellipse(sunX, sunY, sunSize); // sun shape
    //
    //    // meltedblueEyes
    //
    //    fill("white");
    //    noStroke();
    //    ellipse(
    //      meltblueX + meltblueEyeSize * 1.8,
    //      meltblueY - meltblueEyeSize,
    //      meltblueEyeSize
    //    ); // left eye
    //
    //    ellipse(
    //      meltblueX - meltblueEyeSize * 0.5,
    //      meltblueY - meltblueEyeSize * 0.5,
    //      meltblueEyeSize
    //    ); // right eye
    //
    //    //meltedBlueBody
    //    noStroke();
    //    fill("blue");
    //    ellipse(600, 500, 300, 100);
    //
    //    // melted red woman
    //
    //    fill("red");
    //    noStroke();
    //    ellipse(redX, redY, redSize); // head
    //
    //    fill("white");
    //    noStroke();
    //    ellipse(redX + redEyeSize * 2.0, redY - redEyeSize, redEyeSize); // left eye
    //    ellipse(redX - redEyeSize * 0.5, redY - redEyeSize * 2, redEyeSize); // right eye
    //
    //    //red woman mouth
    //    stroke(0);
    //    strokeWeight(2);
    //    ellipse(
    //      meltredmouthX,
    //      meltredmouthY,
    //      meltredmouthW,
    //      meltredmouthH,
    //      meltredmouthSize
    //    ); //mouth
    //
    //    //meltedRedBody
    //    noStroke();
    //    fill("red");
    //    ellipse(970, 400, 300, 50);
    //    fill("red");
    //    rect(940, 390, 168, 80, 50);
    //
    //    fill("#7FEFBD"); // melted dress color)
    //    ellipse(940, 500, 180, 80);
    //    ellipse(950, 460, 140, 50);
    //
    //    //Neck
    //    noStroke();
    //    fill(190); // neck color
    //    arc(1000, 375, 170, 20, 100, PI + QUARTER_PI); // Neck shape
    //
    //    image(redWomanCaption, 988, 85);
    //  }
    //
    //  // Male Blue character // (THE STATE BEFORE YOU CLICK REDWOMAN !!)
    //  if (!redWasClicked) {
    //    fill("red");
    //    noStroke();
    //    ellipse(redX, redY, redSize); // head
    //
    //    fill("white");
    //    noStroke();
    //    ellipse(redX + redEyeSize * 2.75, redY - redEyeSize, redEyeSize); // left eye
    //    ellipse(redX - redEyeSize * 0.5, redY - redEyeSize, redEyeSize); // right eye
    //
    //    //red woman mouth
    //    stroke(0);
    //    strokeWeight(2);
    //    arc(redmouthX, redmouthY, redmouthW, redmouthH, 0, PI + QUARTER_PI, OPEN); //mouth
    //
    //    //body
    //    noStroke();
    //    fill("red");
    //    rect(970, 400, 60, 200, 100);
    //    fill("white");
    //    rect(920, 380, 155, 100, 100);
    //
    //    fill("#7FEFBD"); // dress color)
    //    triangle(890, 520, 1000, 380, 1100, 520);
    //
    //    //Neck
    //    noStroke();
    //    fill(190); // neck color
    //    arc(1000, 380, 170, 25, 100, PI + QUARTER_PI); // Neck shape
    //  }
    //
    //  //sun
    //  noStroke();
    //  fill("#FFD800"); // sunColor
    //  ellipse(sunX, sunY, sunSize); // sun shape
    //}