/*
	jon darling
    MMP-310
    week 7
 array popsicles
    


***************************
*/


var r = 0;
var popsicles = []; // empty cats



function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    
    
}


function draw() {
	background(50);
	noStroke();
    
    if (mouseIsPressed) {
		popsicles.push([mouseX, mouseY]);	
    }
	
    for (let i = 0; i < popsicles.length; i++) {
        popsicle(popsicles[i][0], popsicles[i][1], 70);
        popsicles[i][0] += 1;
       
    }
    
    translate(width / 2, height / 2);
	scale(r);
	r += 0.01;
	
	for (let i = 0; i < popsicles.length; i++) {
		let x = popsicles[i][0] - width / 2;
		let y = popsicles[i][1] - height / 2;
        
		fill('white');
        noStroke;
		rect(x, y, 10, 10);
        ellipse(x, y + 3, 5, );
	}
	
	if (random(70) > 69) r = 0;


}



//function cat(x, y, s) {
//	// cat drawing
//	fill(s, 0, s);
//	triangle(x - s*0.75, y - s/4, x + s*0.75, y - s/4, x, y + s/2); // ears
//	ellipse(x, y, s); // face
//	fill(255);
//	ellipse(x - s/4, y, s/4, s/2); // left eye
//	ellipse(x + s/4, y, s/4, s/2); // right eye
//}

function popsicle(x, y, s) {
    var eyeSize = s / 9;
    //head********************
    fill("blue");
    stroke(0);
    strokeWeight(1);
    ellipse(x, y, s); // head
    //eyes*****************
    fill("white");
    ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
    ellipse(x, y - eyeSize, eyeSize); // right eye
    //mouth****************
    var mouthSize = s / 4;
    fill("red");
    stroke(0);
    strokeWeight(2);
    ellipse(x + mouthSize, y + mouthSize, mouthSize, 10); //mouth
    //body**********************
}