/*jon Darling
week-5
MMP-310
grid/image
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);

    var columns = 8;
    var rows = 6;
    var w = width / columns;
    var h = height / rows;

    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {


         
            var r = random(0, 255);
            var g = random(0, 100);
            var b = random(0, 255);

            fill(r, g, b);
            noStroke();
            ellipse(x, y, w / 12);


            var rd = random(3);
            if (rd > 2) {
                stroke(0);
                strokeWeight(1.6); //verticle lines
                line(x + w, y - h, x + w, y + h);



            } else if (rd > 1) {

                stroke(0);
                strokeWeight(2);
                line(x - w, y + h, x + w, y - h);
                fill(r, g, b);





            } else {

                stroke(0);
                strokeWeight(3); 
                line(x + w, y + h, x - w, y - h);//angle left to right
                stroke(0);
                strokeWeight(2);
                line(x + w, y - h, x + w, y + h);
                
       


            }
        }
    }
}

// click to save image to Downloads folder
//function mouseClicked() {
//	save('pattern-1.jpg');
//}
