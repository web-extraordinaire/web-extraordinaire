let x = 0;

function setup() {
  background(500);
}

function draw() {
  ellipse(x, height/2, 20, 20);
  x = x + 1;
}
