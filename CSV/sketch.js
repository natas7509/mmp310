/*
	jon darling
    MMP-310
    week 7
    array drawing
    popsicles & lollypops
    
*/

var water;
function preload() {
	water = loadTable('Water_Consumption_In_The_New_York_City.csv', 'csv', 'header');
}
function setup() {
	createCanvas(640, 360);
	background(51);
	textAlign(CENTER, CENTER);

	let x = 50;
	let y = 25;
	for (let i = 0; i < water.getRowCount(); i++) {
		let year = water.getNum(i, 'Year');
		let gallons = water.getNum(i, 3) / 4;

		fill('lightblue');
		ellipse(x, y, gallons);

		fill('white');
		noStroke();
		text(year, x, y);

		x += 100;
		if (x > width) {
			x = 50;
			y += 50;
		}
	}
}