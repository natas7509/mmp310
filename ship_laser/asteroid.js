
class Asteroid extends Entity {
  constructor() {
      super(random(width), -100);
      this.speed.y = random(4)   ;
      this.speed.x = random(-1, 1);


    // random points
    this.points = [];
    var r = random(4, 8);
    for (let i = 0; i < r; i++) {
      var angle = PI * 2 / r * i;
       
      this.points.push({
        x: this.size  * sin(angle) + random(-this.size/2.5, this.size/2.5),
        y: this.size  * cos(angle) + random(-this.size/2.5, this.size/2.5)
      });
    }
  }

  display() {
//    fill('red');
      noFill();
      stroke(255);
      strokeWeight(1);
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
    this.y += 5;
    this.x += random(-1, 1);
   
  } 
    
}
 