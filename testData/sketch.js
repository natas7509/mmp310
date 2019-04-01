/*
	jon darling
    MMP-310
    wekk-8
    DATA v-1
    
 */
var Epl;
function preload() {
	Epl = loadTable('epl_final.csv', 'csv', 'header');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
	textAlign(LEFT, CENTER);
	textSize(20);
	noStroke();
}

function draw() {
	background('#888');
	for (let i = 0; i < Epl.getRowCount(); i++) {
		let salePrice = Epl.get(i, "market_value/mil's");
        let age = Epl.getNum(i, 'age');
		let x = i * 9;
        
		let y = map(salePrice, 0, 65, 0, height);

		
		fill('white');
		if (mouseX > x && mouseX < x + 9) {
			let name = Epl.getString(i, 'name');
            let club = Epl.getString(i, 'club');
           
            text(age + ' years old', 100, 250);
            text(club, 100, 200);
            text(name, 100, 100);
			text(salePrice + ' million', 100, 150);
			fill('#89D2DC');
        }
             
            
        
    
       
		rect(x, height - y, 8, y); 
	}
}

//var eplPlayers;
//function preload() {
//  eplPlayers = loadTable("epldata_final.csv", "csv", "header");
//}
//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  textSize(50);
//  textAlign(LEFT, CENTER);
//  //    rectMode(CENTER);
//  noStroke();
//}
//
//function draw() {
//  background("#888");
//
//  for (let i = 0; i < eplPlayers.getRowCount(); i++) {
//    let marketValue = eplPlayers.getNum(i, "market_value");
//    let age = eplPlayers.getNum(i, "age");
//    let x = map(age, 0, 50, 0, width);
//    let y = map(marketValue, 80, 0, 0, height);
//      	
//		fill('white');
//		if (mouseX > x && mouseX < x + 11) {
//			text(rookies.get(i, 'Player').split('\\')[0], 200, 100);
//			text(ast, 200, 150);
//			fill('gold');
//		}
//
//		rect(x, height - h, 10, h);
//  }
//    
//}

//		fill('white');
//		if (dist(x, y, mouseX, mouseY) < 7.5) {
//			let name = eplPlayers.getString(i, 'name').split('\\')[0];
//            fill('blue');
//			text(name, 100, 200);
//            fill('red');
//			text(marketValue, 100, 250);
//            fill('white');
//			text(age, 100, 300);
//
//		}
//        rect(x, y, 15, 15);

//
//var rookies;
//function preload() {
//	rookies = loadTable('rookies.csv', 'csv', 'header');
//}
//
//function setup() {
//	createCanvas(windowWidth, windowHeight);
//	textSize(50);
//	textAlign(LEFT, CENTER);
//    rectMode(CENTER);
//	noStroke();
//}
//
//function draw() {
//	background('#888');
//
//	for (let i = 0; i < rookies.getRowCount(); i++) {
//		let ast = rookies.getNum(i, 'ASTper');
//		let min = rookies.getNum(i, 'MPper');
//		let x = map(min, 0, 39, 0, width);
//		let y = map(ast, 0, 8, height - 10, 0);
//
//		fill('white');
//		if (dist(x, y, mouseX, mouseY) < 7.5) {
//			let player = rookies.getString(i, 'Player').split('\\')[0];
//            fill('blue');
//			text(player, 100, 200);
//            fill('red');
//			text(ast, 100, 250);
//            fill('white');
//			text(min, 100, 300);
//
//		}
//
//		rect(x, y, 15, 15);
//	}
//}
