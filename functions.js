function drawMediumPerson(x,y,word) {
  ellipse(x,y,100,100);
  line(x,y+50,x,y+200);
  line(x+20,y+50,x,y+100);
  line(x-20,y+50,x,y+100);
  line(x+20,y+250,x,y+200);
  line(x-20,y+250,x,y+200);
    text(word,x,y-90)
    
}
