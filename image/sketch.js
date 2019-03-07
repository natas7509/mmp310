/*
wk5_310
v1.
by Jon Darling
save image code


*/

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#F5D3C8");

    var columns = 12;
    var rows = 6;
    var w = width / columns; // column width
    var h = height / rows; // row height
    var r = random(0, 20);

    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {
            var randomChoice = random(3);

            if (randomChoice > 2) {


                stroke('black');
                strokeWeight(2);
                line(x + width, y, x, y); //hor-grid
                line(x, y + height, x, y); //vert-grid
                ellipse(x, y, w / 14);
                noFill();
                noStroke();
                var r_ = random(0, x);
                var g_ = random(0, y);
                var b_ = random(100, 200);
                fill(r_, g_, b_);
                ellipse(x, y, w / 2, 15); //bird body one - ellipse
                noStroke();
                fill("blue");
                triangle(
                    x,
                    y,
                    x + 58 + r,
                    y + 20 + r,
                    x + 86 + r,
                    y + 75 + r
                );
                fill("#5B4B49");
                triangle(
                    x,
                    y,
                    x - 58 + r,
                    y - 20 + r,
                    x - 86 + r,
                    y - 75 + r
                );






            } else if (randomChoice > 1) {

                stroke('black');
                strokeWeight(2);
                line(x + width, y, x, y); //hor-grid
                line(x, y + height, x, y); //vert-grid
                ellipse(x, y, w / 14);
                noFill();
                noStroke();
                var r_ = random(0, x);
                var g_ = random(0, y);
                var b_ = random(100, 200);
                fill(r_, g_, b_);
                ellipse(x, y, w / 2, 15); //bird body one - ellipse
            } else {

                //wings - ellipse-set

                noStroke();
                fill("blue");
                triangle(
                    x,
                    y,
                    x + 58 + r,
                    y + 20 + r,
                    x + 86 + r,
                    y + 75 + r
                );
                fill("#5B4B49");
                triangle(
                    x,
                    y,
                    x - 58 + r,
                    y - 20 + r,
                    x - 86 + r,
                    y - 75 + r
                );

                fill("#4A7B9D");

                line(x + width / 4, y, x, y); //hor-grid
                line(x, y + height / 4, x, y); //vert-grid


                var r_ = random(0, x);
                var g_ = random(0, y);
                var b_ = random(255);

                fill(r_, g_, b_);
                rect(x - 14, y - 20, w / 4, h / 4, 20); //bird body two 


                //wings - rect-set

                fill("#C0D6DF");
                triangle(
                    x,
                    y,
                    x - 58 + r,
                    y - 20 + r,
                    x - 86 + r,
                    y - 75 + r
                );
                fill("#9AA899");
                triangle(
                    x,
                    y,
                    x + 58 + r,
                    y + 20 + r,
                    x + 86 + r,
                    y + 75 + r
                );
            }
        }
    }
}



//function mouseClicked() {
//
//    save('pattern-1.png');
//
//}