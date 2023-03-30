function drawMediumPerson(x) {
  ellipse(x,100,100,100);
  line(x,300,x,350);
  line(x+20,150,x,200);
  line(x-20,150,x,200);
  line(x+20,350,x,300);
  line(x-20,350,x,300);
    text("desserts",x,350)
    x = x + 1;
}
