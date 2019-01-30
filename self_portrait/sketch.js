/*
self portrait
v1.
by Jon Darling
Hard coded V_1
*/

function setup() {
	createCanvas(640, 450);
}

function draw() {
    // Face
	background("#F7F1DA");
    
	noStroke();
     
    // Facial lines
    stroke (5)
    
	line(40, 120, 40, 20); // two xy coordinates
    line(70, 300, 40, 120); // two xy coordinates
    line(130, 400, 70, 300); // two xy coordinates
     line(130, 400, 280,500); // two xy coordinates
	// after 2 points a fill is added
     
	line(600, 120, 600, 20); // two xy coordinates
    line(570, 300, 600, 120); // two xy coordinates
    line(510, 400, 570, 300); // two xy coordinates
     line(510, 400, 330,500); // two xy coordinates
    
    
   
    
   
     // nose
	fill("#917A4F");
    noStroke()
//    ellipse(317, 200,80, 120);
    	triangle(300, 100, 300, 50,330, 220); // three xy coordinates
    // nostrils
    fill ("black")
     ellipse(300, 200,20, 10);
	ellipse(440, 94, 20, 35);
    	
   
    noStroke()
     arc(315, 300, 250, 200, 0, PI);
    // mouth
    stroke("black")
    strokeWeight(5)
     fill("red")
      arc(300, 300, 250, 200, 0, PI);
    // teeth
    fill ("white")
    arc(330,320, 200, 100, 0, PI);
   
      
     // bags
    noStroke()
    fill (210)
     triangle(270,80, 70,180, 220, 110); // three xy coordinates
     triangle(550, 150,400,100, 500, 150); // three xy coordinates
    
      // whites eyes
    fill ("white")
     ellipse (450, 80, 130, 85);
    ellipse (170, 80, 130, 85);
     
    
    
  
    
    // eyes
    noStroke();
    
    fill ("blue")
    ellipse(450, 80, 80);// right
    ellipse(175, 80, 80);// left
     // eyebrows
    noStroke();
    fill ("#917A4F")
    
    	 ellipse (450, 18, 130, 20);
    ellipse (170, 20, 130, 20);
   
   
   
    
    fill ("black")
     			
    
    // pupils
    ellipse(180, 93, 20, 35);
	ellipse(440, 94, 20, 35);
    
    
   
}


     	
    
   
