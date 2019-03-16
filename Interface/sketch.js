/*
	jon darling
    MMP-310
    dom-work
    interface
*/

/* global variables */
var bg = "green";
var g = 255;
var columns = 10;
var rows = 8;

function setup() {
	createCanvas(windowWidth, windowHeight / 2);
	pattern();
	
	var button = createButton("Save Image");
	button.mousePressed(saveImage);
//	button.style('color', bg);
	button.style('font-family', 'asap');
	button.id('my-button');
	button.class('interface');
	button.position(20, height + 160);
	
	
	var generatePattern = createButton("Generate Pattern");
	generatePattern.mousePressed(pattern);
	generatePattern.class('interface');
//	generatePattern.position(x + width, height +40);
	
	// columns slider
	createDiv("Number of Columns");
	var columnSlider = createSlider(2, 50, columns);
	columnSlider.input(setColumn);
   
    
	
	// rows 
	
	// bg color
	createDiv("Background Color");
	var colorSlider = createSlider(0, 255, g);
	colorSlider.input(setColor);
    
    // rows 
	
    
    
	
}

function setColumn() {
	columns = this.value();
	pattern();
}

function setColor() {
	g = this.value();
	pattern();
}
function discs(x, y, w, h) {
  var r = random(0, 255);
  var g = random(0, 100);
  var b = random(0, 255);
  fill(r, g, b);
  noStroke();
  ellipse(x, y, w / 6);//main disc
  stroke(255);
  strokeWeight(2);
  ellipse(x, y, 7, 3 + random(5));//inner disc
}

function pattern() {
	background(0, g, 127);
	
	var w = width / columns;
	var h = height / rows;
	
	
    for (let x = 0; x <= width; x += w) {
    for (let y = 0; y <= height; y += h) {
      discs(x - w, y - h, w, h); //discs

      var rd = random(3);
      if (rd > 2) {
        stroke(0);
        strokeWeight(1.6);
        line(x + w, y, x + w, y + h);
      } else if (rd > 1) {
        var r = random(0, 255);
        var g = random(0, 100);
        var b = random(0, 255);

        stroke(r, g, b);
        strokeWeight(2);
        line(x + w, y, x, y + h);
      } else {
        stroke(0);
        strokeWeight(1);
        line(x, y, x + w, y + h);
        discs(x - w, y - h, w, h); //discs
        noStroke();

        rect(x - w, y - h, w / 4, h / 4, 10); // blocks
      }
    }
}

}

function saveImage() {
	save("pattern.png");
}









