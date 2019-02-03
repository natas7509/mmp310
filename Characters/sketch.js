/*
wk1_310
v1.
by Jon Darling
characters sketch
Interactive Story
*/

//function setup() {
//	createCanvas(windowWidth, windowHeight);
//    textSize(40);    
//}
//
////global variables
//var blueX = 200;
//var blueY = 300;
//var blueSize = 200;
//var blueEyeSize = 100;
//
//var story
//
//
//function draw() {
//   
//   
//    
//     background(233);
//    
//    
//    // blueman character 
//   
//    fill ("blue");
//    stroke(0);
//	ellipse(blueX + blueEyeSize * 3, blueY - blueEyeSize, blueEyeSize);  // left eye
//	ellipse(blueX, blueY - blueEyeSize, blueEyeSize); 		// right eye
//	
//    
//    
//    //eyes
//    fill ('white');
//    ellipse(220, 300, 20);
//    ellipse(180, 300, 20);
//    	
//    // 2nd character
//    
//    stroke("black")
//    strokeWeight(2)
//   
//    
//    
////    text("checking text function." width/2, height - 50);
//    
//    // owen example
//    
//    fill ("yellow");
//    arc(600, 300, 200, 200, 0, PI);
//    fill (233);
//  
//
//    
//   
//}

// global variables
var blueX = 600;
var blueY = 300;
var blueSize = 200;
var blueEyeSize = blueSize / 8;

var dartX1 = 655;
var dartY1 = 531;
var dartX2 = 600;
var dartY2 = 420;
var dartX3 = 590;
var dartY3 = 463;
var dartX4 = 555;
var dartY4 = 476;

var mouthX = 640;
var mouthY = 330;
var mouthW = 50;
var mouthH = 50;



var story = "The adventures of Big Head.";
var storyX;
var storyY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(38);
    textFont('roboto');
	textAlign(CENTER, CENTER);
	storyX = width / 2;
	storyY = height - 60;
}

function draw() {
	background(50);
	
	// first character blueHead
	fill('blue');
	noStroke();
	ellipse(blueX, blueY, blueSize);  	// head
    
	fill ('white');
	noStroke();
	ellipse(blueX + blueEyeSize * 2.75, blueY - blueEyeSize, blueEyeSize);  // left eye
	ellipse(blueX - blueEyeSize *.5, blueY - blueEyeSize, blueEyeSize,); // right eye
    arc(mouthX, mouthY, mouthW, mouthH, 0, PI + QUARTER_PI,OPEN); //mouth
	
	// second character dart body
	fill('red');
	noStroke();
    quad(dartX1, dartY1, dartX2, dartY2, dartX3, dartY3, dartX4, dartY4,);
   
    //text
    textStyle('italic');
    fill('white');
	stroke('rgb(0,255,0)');
    strokeWeight(1.7);
	text(story, storyX, storyY);
}


