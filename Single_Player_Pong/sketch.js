let xBall = Math.floor(Math.random() * 300) + 50;
let yBall = 50;
let diameter = 12;
let xBallChange = 6;
let yBallChange = 4;
let xPaddle;
let yPaddle;
let paddleWidth = 15;
let paddleHeight = 100;
let yObs = 125; //"Obs" står for obstical
let obsWidth = 15;
let obsHeight = 250;
let yObsChange = 1;
let started = false;
let score = 0;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(50,100,255);
  
  //Bakgrunn
  fill(255,255,255,50)
  rect(470,0,30,400)
  
  fill(255,255,255,150)
  rect(494,0,6,400)
  
  fill(0,0,0,50)
  rect(0,0,30,400)
  
  fill(0,0,0, 150)
  rect(0,0,6,400)
  
  fill(255,255,255)
  rect(10,10,10,380)
  rect(10,10,480,10)
  rect(10,380,480,10)
  rect(480,10,10,380)
  rect(10,10,130,30)
 
  //Ball
  fill(0,0,0)
  noStroke();
  ellipse(xBall,yBall,diameter,diameter)
  
  xBall += xBallChange;
  yBall += yBallChange;
  
  if (xBall < diameter/2 || xBall > 500 - 0.5*diameter) {
    xBallChange *= -1;
  }
  
  if (yBall < diameter/2 || yBall > 410 - diameter) {
    yBallChange *= -1;
  }
 
  //Paddle plasering
  if (!started) {
    xPaddle = 10;
    yPaddle = 400/ 2;
    started = true;
  }
  
  //Rect (paddle)
  fill(0, 0, 0);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
 
  //Kolisjon med paddle
  if ((xBall + diameter/2 > xPaddle && xBall - diameter/2 < xPaddle + paddleWidth) &&
  (yBall - diameter/2 > yPaddle && yBall + diameter/2 < yPaddle + paddleHeight)) {
    xBallChange = Math.abs(xBallChange);
    score = score + 1;
  }
  
  //Score
  fill(0, 0, 0);
  textSize(24);
  text("Score: " + score, 13, 33);
  
  //Kontroll av paddle
  if (keyIsDown(UP_ARROW)) {
    yPaddle = yPaddle - 6;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yPaddle = yPaddle + 6;
  }
  
  if (yPaddle <= 1) {
    yPaddle = 3
  }
  
  if (yPaddle >= 295 ) {
    yPaddle = 297
  }
  
  //Obstical
  fill(0, 0, 0)
  rect(475,yObs,obsWidth,obsHeight)
 
  yObs += yObsChange;
      
  if (yObs < 0 || 
  yObs > 150) {
    yObsChange *= -1;
  }
  
  if ((xBall + diameter/2 > 475 && xBall - diameter/2 < 475 + obsWidth) &&
  (yBall - diameter/2 > yObs && yBall + diameter/2 < yObs + obsHeight)) {
    xBallChange *= -1;
  }
  
  //5 poeng bak obstical
  if (xBall > 494) {
    score = score + 5;
  }
  
  //Game Over screen
  if (xBall < 10) {
    fill(0,0,0,150)
    rect(0,0,500,400)
    fill(255,255,255)
    textSize(50);
    text("lol ded", 170, 220);
    noLoop ()
  }
}