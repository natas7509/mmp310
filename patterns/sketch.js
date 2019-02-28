/*
wk5_310
v1.
by Jon Darling
grids

*/
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	textSize(50);
	
	var columns = 8;
	var rows = 6;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			fill('white');
			noStroke();
			ellipse(x, y, w/24);
			
			noFill();
			strokeWeight(2);
			stroke('yellow');
			
			// triangle(x1, y1, x2, y2, x3, y3);
			var r = random(w);
//			triangle(x + random(50), y + r, x, y, x + r, y);
			
			// line(x1, y1, x2, y2);
			
			stroke('plum');
//			line(x + w, y + random(100), x + w/4, y);
		
			var choice = random(2);
			if (choice > 1) {
				
				var _r = random(0, x);
				var _g = random(0, y);
				var _b = random(255);
				fill(_r, _g, _b)
                ellipse(x, y, w/4);
//				rect(x, y, w / 7, h);
			} else {
				stroke('aqua');
//				line(x - w, y - h/2, x + w/2, y + h/2);
			}
		
		}
	}
}
