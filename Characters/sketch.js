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

var bananaX = 600;
var bananaY = 100;
var bananaSize = 100;

var story = "welcome to the blueman group.";
var storyX;
var storyY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(40);
	textAlign(CENTER, CENTER);
	storyX = width / 2;
	storyY = height - 50;
}

function draw() {
	background(50);
	
	// first character blueHead
	fill('blue');
	noStroke();
	ellipse(blueX, blueY, blueSize);  	// body
    
	fill ('white');
	noStroke();
	ellipse(blueX + blueEyeSize * 3, blueY - blueEyeSize, blueEyeSize);  // left eye
	ellipse(blueX, blueY - blueEyeSize, blueEyeSize); 		// right eye
	
//	// second character banana
//	fill('yellow');
//	noStroke();
//	arc(bananaX, bananaY, bananaSize, bananaSize, -HALF_PI, HALF_PI); // banana background
//	fill(50);
//	arc(bananaX, bananaY, bananaSize / 2, bananaSize, -HALF_PI, HALF_PI); // banana foreground
//	noFill();
//	stroke(0);
//	arc(bananaX, bananaY, bananaSize * 3/4, bananaSize, -HALF_PI, HALF_PI); // banana contour
	
	stroke(255);
	text(story, storyX, storyY);
}


