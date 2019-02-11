/*
wk1_310
v1.
by Jon Darling
Logic sketch
adding 3 settings
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

var caption1 = "is it getting hotter in here?";
var captionX;
var captionY;
var captionSize = 24;

// settings: neutral, summer, melting/death
var currentSetting = "neutral";
var bgColor = "lightblue";


function setup() {
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