function drawMediumPerson(x,word) {
  ellipse(x,100,100,100);
  line(x,150,x,300);
  line(x+20,150,x,200);
  line(x-20,150,x,200);
  line(x+20,350,x,300);
  line(x-20,350,x,300);
    text(word,x,350)
    x = x + 1;
}
