/*
	jon darling
    MMP-310
    wekk-8
    DATA v-1
    
 */


var rookies;
function preload() {
	rookies = loadTable('rookies.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(50);
	textAlign(LEFT, CENTER);
    rectMode(CENTER);
	noStroke();
}

function draw() {
	background('#888');
	
	for (let i = 0; i < rookies.getRowCount(); i++) {
		let ast = rookies.getNum(i, 'ASTper');
		let min = rookies.getNum(i, 'MPper');
		let x = map(min, 0, 39, 0, width);
		let y = map(ast, 0, 8, height - 10, 0);
		
		fill('white');
		if (dist(x, y, mouseX, mouseY) < 7.5) {
			let player = rookies.getString(i, 'Player').split('\\')[0];
            fill('blue');
			text(player, 100, 200);
            fill('red');
			text(ast, 100, 250);
            fill('white');
			text(min, 100, 300);
				
		}
        
		rect(x, y, 15, 15);
	}
}











