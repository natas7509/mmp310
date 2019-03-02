/*
wk5_310
v1.
by Jon Darling
grids/patterns

*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#F5D3C8");

  var columns = 12;
  var rows = 6;
  var w = width / columns; // column width
  var h = height / rows; // row height
  var wingLength = random(0, 20);

  for (let x = 0; x <= width; x += w) {
    for (let y = 0; y <= height; y += h) {
      ellipse(x, y, w / 15);
      noFill();
      noStroke();

      var randomChoice = random(2);
      if (randomChoice > 1) {
        var r = random(0, x);
        var g = random(0, y);
        var b = random(100, 200);
        fill(r, g, b);
        ellipse(x, y, w / 2, 15); //bird body one - ellipse
          
          
          //wings - ellipse-set
          
        noStroke();
        fill("blue");
        triangle(
          x,
          y,
          x + 58 + wingLength,
          y + 20 + wingLength,
          x + 86 + wingLength,
          y + 75 + wingLength
        );
        fill("#5B4B49");
        triangle(
          x,
          y,
          x - 58 + wingLength,
          y - 20 + wingLength,
          x - 86 + wingLength,
          y - 75 + wingLength
        );
      } else {
        stroke("black");
        fill("#4A7B9D");
        noStroke();

        var r = random(0, x);
        var g = random(0, y);
        var b = random(255);

        fill(r, g, b);
        rect(x - 20, y - 20, w / 4, h / 3, 20); //bird body two - rect

          //wings - rect-set
          
        fill("#C0D6DF");
        triangle(
          x,
          y,
          x - 58 + wingLength,
          y - 20 + wingLength,
          x - 86 + wingLength,
          y - 75 + wingLength
        );
        fill("#9AA899");
        triangle(
          x,
          y,
          x + 58 + wingLength,
          y + 20 + wingLength,
          x + 86 + wingLength,
          y + 75 + wingLength
        );
      }
    }
  }
}
