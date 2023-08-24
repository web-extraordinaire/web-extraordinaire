<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>
    <script src="functions.js"></script>
<script>var y = 390;
var x = 10;
var moveX = 30;
moveY = 390;
function setup() {

  createCanvas(400, 400);
}

function draw() {

  background(220);
if (mouseX < 300 & mouseX > 100 & mouseY <200 & mouseY > 100 & mouseIsPressed ) {
  draw = function( ) {
    // contrals
    if ( mouseIsPressed  ) {
       x=x+2;
    }
    if (mouseX < x) {
      x=x-1;
    }
    
    // level one
      background(220);
    rect(x,390,10,10);
    if (x>400) {
      x = 10;
      draw =  function() {
        // level 2
         // contrals
    if ( mouseIsPressed  ) {
       x=x+2;
    }
    if (mouseX < x) {
      x=x-1;
    }
  if (keyCode === UP_ARROW) {
  y = 350;
  }
    if (keyCode === DOWN_ARROW) {
      y = 390;
      
    }
                            
          background(220);
        rect(x,y,10,10)
   line (0,340,400,340);
        /* spike sprite upsidown
        
        line(200,340,210,360)
        line(220,340,210,360)
        
         spike sprite right side up
         
         line(200,400,210,380)
         line(220,400,210,380)
         
         long spike
         
          line(80,340,110,360)
        line(130,340,110,360)
         
         */
         
         
        line(200,400,210,380)
         line(220,400,210,380)

        if(x<220 & x > 200 & y > 380) {
          // death screen
          draw = function () {
                    background(220);
            textSize(100)
text("you ded", 0,100)
        }
                                      }
         line(200,400,210,380)
         line(220,400,210,380)
        if (x > 400) {
          x = 10;
          draw = function() {
            // level three
            
            if ( mouseIsPressed  ) {
       x=x+2;
    }
    if (mouseX < x) {
      x=x-1;
    }
  if (keyCode === UP_ARROW) {
  y = 350;
  }
    if (keyCode === DOWN_ARROW) {
      y = 390;
    }
            background(220);
            line (0,340,400,340);
            
            rect(x,y,10,10);
        line(80,340,110,360)
        line(130,340,110,360)
            
        line(200,400,210,380)
        line(220,400,210,380)
            
        if (x> 400) {
          x= 10;
          moveXtop = 300;
          moveX = 200;
          
          // level 4
          draw = function() {
            moveX++;
            moveXtop++;
            
               if ( mouseIsPressed  ) {
       x=x+2;
    }
    if (mouseX < x) {
      x=x-1;
    }
  if (keyCode === UP_ARROW) {
  y = 350;
  }
    if (keyCode === DOWN_ARROW) {
      y = 390;
    }
if(moveX > 390 & x> 100 & y > 380 || moveXtop > 270 & x > 100 & y < 360 ) { // ded
             draw = function( ) {
               background(220);
               textSize(100)
               text("you ded",0,100)
          }
          
            }
            
            if(moveX > 390) {
              moveX= 100;
            }
              if(moveXtop > 270) {
              moveXtop= 100;
            }
            background(220);
            rect(x,y,10,10)
            line (0,340,400,340);
            
  if (x > moveX & x < (moveX + 20) & y > 380 || x > (moveXtop + 100) & x < (moveXtop + 120) & y < 360 ) {
    // ded
    draw = function() {
        background(220);
      textSize(100);
    text("you ded", 0,100);
    }
  }
            
            line(moveX,400,moveX+10,380)
           line(moveX + 20,400,moveX+10,380)
            
            line(moveXtop + 100,350,moveXtop+110,360)
           line(moveXtop + 120,350,moveXtop+110,360)
                        
          }
        }
            
    if (x < 130 & x > 80 & y<360 || x>200 & x<210 & y > 380) {
     // death screen
      draw = function() {
        background(220);
        textSize(100)
        text("you ded", 0,200)
        
      }
    }
      
    
            
            
          }
        }

      }
 
    }
  
    
    
    
}}
  // title screen
  
  textSize(100)
           text("play",100,200) 

  rect(x,390,10,10);)</script>
  </head>
  <body></body>
  </html>


   
 
}
