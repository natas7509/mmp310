/*
	jon darling
    MMP-310
    week 7
    Arrays
    


***************************
variables */
// height of my 12 popsicles
var popsicles = [10, 100, 50, 100, 150, 25, 75, 125, 175, 80, 100, 36, 55];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('grey');
	noStroke();
	
	for (let i = 0; i < popsicles.length; i++) {
		let x = i * width/popsicles.length;
		let s = popsicles[i]; // size
		popsicle(x, 400, s);
	}
}

function popsicle(x, y, s) {
    
    
    
    var eyeSize = s / 9;
    fill("blue");
    noStroke();
    ellipse(x, y, s); // head
    fill("white");
    stroke(0);
    strokeWeight(1);
    ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
    ellipse(x, y - eyeSize, eyeSize); // right eye
   
    //body
    noStroke();
    var legs = s / 2;
    fill(255, 214, 170);
    rect(x + legs - 130, y + 100, 60, 200, 40);
    var bodPos = s / 2;
    fill("white");
    rect(x - bodPos, y + 100, 200, 100, 20); //white body
    //Neck
    noStroke();
    fill(190); // neck color
    arc(x, y + 100, 170, 25, 100, PI + QUARTER_PI); // neck shape
}