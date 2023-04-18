function drawMediumPerson(x,y,word) {
  ellipse(x,y,100,100);
  line(x,y+50,x,y+200);
  line(x+20,y+50,x,y+100);
  line(x-20,y+50,x,y+100);
  line(x+20,y+250,x,y+200);
  line(x-20,y+250,x,y+200);
    text(word,x,y-90)
    
}
function drawSmallPerson(x,y,word) {
     ellipse(x+50,y-50,26,26);
        line(x+50,y-10,x+50,y-37);
        line(x+40,y-35,x+50,y-27);
        line(x+60,y-35,x+50,y-27);
        line(x+60,y,x+50,y-12);
        line(x+40,y,x+50,y-12);
  text(word,x, y+ 30);

}
