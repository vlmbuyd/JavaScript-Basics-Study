let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(400, 200);
    p.background(220, 32, 145);
  };

  p.draw = function () {
    p.stroke(255);
    p.ellipse(p.mouseX, p.mouseY, 80);
  };
};
new p5(sketch, "sketch-1");

let sketch2 = function (p) {
  p.setup = function () {
    p.createCanvas(400, 200);
    p.background(67, 250, 32);
  };

  p.draw = function () {
    p.fill(0);
    p.ellipse(p.mouseX, p.mouseY, 5);
  };
};
new p5(sketch2, "sketch-2");
