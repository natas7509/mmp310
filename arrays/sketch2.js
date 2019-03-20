/*
	jon darling
    MMP-310
    week 7
    Array Drawing
    


***************************
*/




var points = []; // empty array
var r = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	background(51);
	
	if (mouseIsPressed) {
		points.push([mouseX, mouseY]);	
	}
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0];
		let y = points[i][1];
		fill('plum');
		ellipse(x, y, 20);
		
//		points[i][1]++; // increment the y value
	}
	
	translate(width/2, height/2);
	scale(r);
	r += 0.01;
	
	for (let i = 0; i < points.length; i++) {
		let x = points[i][0] - width/2;
		let y = points[i][1] - height/2;
		fill('gold');
		rect(x, y, 20, 20);
	}
	
	if (random(100) > 99) r = 0;
}











//function popsicle(x, y, s) {
//    var eyeSize = s / 9;
//    //head********************
//    fill("blue");
//    stroke(0);
//    strokeWeight(1);
//    ellipse(x, y, s); // head
//    //eyes*****************
//    fill("white");
//    ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
//    ellipse(x, y - eyeSize, eyeSize); // right eye
//    //mouth****************
//    var mouthSize = s / 4;
//    fill("red");
//    stroke(0);
//    strokeWeight(2);
//    ellipse(x + mouthSize, y + mouthSize, mouthSize, 10); //mouth
//    //body**********************
//}

/****************************
owens example in class
var points = [];
var r = rotate;

function setup() {

function draw() {
    if (mousePressed)

    points.push([mouseX, mouseY]);
    
}

for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points.[i][1];
    fill('gold');
    ellipse( x, y, 20);
    
    }
    
    }










*/