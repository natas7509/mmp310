/*
	jon darling
    MMP-310
    week 7
    array drawing
    popsicles & lollypops
    
*/

var r_ = 0;
var g_ = 0;
var b_ = (0, 255);

var r = 0;
var popsicles = []; // empty popsicle heads

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
    popsicle(popsicles[i][0], popsicles[i][1], 100);
    popsicles[i][0] += 0.8;
  }

  translate(width / 2, height / 2);
  scale(r);
  r += 0.01;

  for (let i = 0; i < popsicles.length; i++) {
    let x = popsicles[i][0] - width / 2;
    let y = popsicles[i][1] - height / 2;
    let s = popsicles[i][0] - width / 2;
    let r_ = random(0, 255);
    let g_ = random(0, 255);
    let b_ = random(0, 255);
      
      
    //lollypops***************************  
    fill("#FCD5AB");
    stroke(0);
    strokeWeight(0.2);
    rect(x, y, 5, s); //flying stick
    fill(r_, g_, b_);
    stroke(0);
    strokeWeight(0.2);
    ellipse(x, y + 3, s); //flying lolly pop
  }

  if (random(70) > 69) r = 0;
}

function popsicle(x, y, s) {
  var eyeSize = s / 9;

  //head********************
  var b_ = random(150, 255);
  fill(r_, g_, b_);
  stroke(0);
  strokeWeight(0.2);
  ellipse(x, y, s); // head

  //eyes*****************
  fill("white");
  ellipse(x + eyeSize * 3, y - eyeSize, eyeSize); // left eye
  ellipse(x, y - eyeSize, eyeSize); // right eye

  //Tongue****************
  var mouthSize = s / 4;
  fill("red");
  noStroke();
  ellipse(x + mouthSize, y + mouthSize, mouthSize, 15); //tongue-1
  ellipse(x + mouthSize + 7, y + mouthSize + 7, mouthSize, 13); //tongue-2
  ellipse(x + mouthSize + 9, y + mouthSize + 11, mouthSize, 10); //tongue-3
  ellipse(x + mouthSize + 12, y + mouthSize + 11, mouthSize, 10); //tongue-4

  //body**********************
}
