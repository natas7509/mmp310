/*owen example*/




/*
	asteroid class
*/

//class Asteroid extends Entity {
//	constructor() {
//		super(random(width), -100);
//		this.speed.x = random(-2, 2);
//		this.speed.y = random(7,9);
//		this.color = color(random( 200), random(200), random(200));
//	}
//	
//	display() {
//        noFill();
//		stroke(this.color);
//        strokeWeight(4);
//		ellipse(this.x, this.y, this.size);
//	}
//    
//    
//
//}




class Asteroid extends Entity {
  constructor() {
      super(random(width), -100);
    this.x = 200;
    this.y = 0;
    this.size = 40;
    // random points
    this.points = [];
    var r = random(4, 8);
    for (let i = 0; i < r; i++) {
      var angle = PI * 2 / r * i;
      this.points.push({
        x: this.size * sin(angle) + random(-this.size/2, this.size/2),
        y: this.size * cos(angle) + random(-this.size/2, this.size/2)
      });
    }
  }

  display() {
    fill('red');
    beginShape();
    for (let i = 0; i < this.points.length; i++) {
       vertex(
         this.x + this.points[i].x, 
         this.y + this.points[i].y
       );
    }
    endShape(CLOSE);
    
  }
    
    
    update() {
    this.y += 1;
    this.x += random(-1, 1);
  }
    
}
    

 
//}
//
//let a;
//
//function setup() {
//  createCanvas(400, 400);
//  a = new Asteroid();
//}
//
//function draw() {
//  background(220);
//  a.display();
//  a.update();
//}



























































/*
	asteroid class
*/

//class Asteroid {
//  constructor() {
//    this.x = random(width);
//    this.y = -100;
//    this.size = 100;
//    this.speed = {
//      x: random(-2, 2),
//      y: random(5)
//    };
//  }
//
//  display() {
//    noFill();
//    stroke("#fff");
//    strokeWeight(2);
//    ellipse(this.x, this.y, this.size);
//    
//  }
//
//  update() {
//    this.x += this.speed.x;
//    this.y += this.speed.y;
//  }
//
//  collide() {
//    noStroke();
//    var d = dist(this.x, this.y, spaceship.x, spaceship.y);
//    if (d < this.size / 2) {
//      textSize(100);
//      textAlign(CENTER, CENTER);
//      fill("orange");
//      text("Totally Owned!!", width / 2, height / 2);
//      noLoop();
//    }
//  }
//}
