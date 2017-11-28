var colorList = ['#ffc4c8','#5e5e5e','#3aa3ff','#121212']; //Pink,Grey,Blue,BlackBeast

function setup() {
  createCanvas(innerWidth,innerHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
}

function draw() {

  var alphaZ=rotationZ;
  var betaX=rotationX;
  var gammaY=rotationY;

  background(colorList[1]);
  noStroke();

var playerRadius=25;

  if(innerWidth>innerHeight) {
    textAlign(CENTER);
    textSize(32);
    text('please rotate your phone to portrait mode to continue',width/2,height/2);
  }
  else{
    var beastBetaX=betaX;
    if(beastBetaX<-45) {beastBetaX=-45};

    //Characters
    Player(50);
    Princess(60,5);

    //
    var winCollide=false;
    winCollide=collideCircleCircle(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),50,width/2,47,80);

    //HELP text
    push();
    fill(235);
    textSize(36);
    text("help!",width/1.9,115);
    pop();

    //The Black Beast
    Beast(colorList[3]);

    for(i=0;i<1330;i+=110) {
    fill(235);
    triangle(map(beastBetaX,45,-60,1,width/2),0+i,map(beastBetaX,45,-60,1,width/2),100+i,map(beastBetaX,45,-60,1,width/2)+50,50+i);
  }
    for(i=0;i<1440;i+=110) {
    fill(235);
    triangle(map(beastBetaX,45,-60,width,width/2),0+i-50,map(beastBetaX,45,-60,width,width/2),100+i-50,map(beastBetaX,45,-60,width,width/2)-50,i);
  }

  //SPECIAL TRIANGLES
  var a=300;
  triangle(map(beastBetaX,45,-60,1,width/2),0+770,map(beastBetaX,45,-60,1,width/2),100+770,map(beastBetaX,45,-60,1,width/2)+50+a,50+770);

  triangle(map(beastBetaX,45,-60,width,width/2),0+990-50,map(beastBetaX,45,-60,width,width/2),100+990-50,map(beastBetaX,45,-60,width,width/2)-50-a,990);

  var hit=false;

  var triPoly = [];

  triPoly[0] = createVector(map(beastBetaX,45,-60,width,width/2),0+990-50);
  triPoly[1] = createVector(map(beastBetaX,45,-60,width,width/2),100+990-50);
  triPoly[2] = createVector(map(beastBetaX,45,-60,width,width/2)-50-a,990);

  hit = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(beastBetaX,-60,60,1,height),40,triPoly);

  var b=200;
  triangle(map(beastBetaX,45,-60,1,width/2),0+440,map(beastBetaX,45,-60,1,width/2),100+440,map(beastBetaX,45,-60,1,width/2)+50+b,50+440);

  var c=160;
  triangle(map(beastBetaX,45,-60,width,width/2),0+770-50,map(beastBetaX,45,-60,width,width/2),100+770-50,map(beastBetaX,45,-60,width,width/2)-50-c,770);

  var d=380;
  triangle(map(beastBetaX,45,-60,width,width/2),0+660-50,map(beastBetaX,45,-60,width,width/2),100+660-50,map(beastBetaX,45,-60,width,width/2)-50-d,660);
  var e=85;
  triangle(map(beastBetaX,45,-60,width,width/2),0+550-50,map(beastBetaX,45,-60,width,width/2),100+550-50,map(beastBetaX,45,-60,width,width/2)-50-e,550);

  var f=35;
  triangle(map(beastBetaX,45,-60,width,width/2),0+440-50,map(beastBetaX,45,-60,width,width/2),100+440-50,map(beastBetaX,45,-60,width,width/2)-50-f,440);
    pop();
  }

//GAMEOVER/VICTORY EVENTS
if(hit==true) {
  textAlign(CENTER);
  fill('red');
  rect(0,0,width,height);
  fill(18);
  textSize(150);
  push();
  translate(0,-150);
  text("GAME OVER",width/2,height/2);
  textSize(46);
  text("You and your beloved one have died.",width/2,height/1.8);
  text(" Forever.",width/2,height/1.68);
  textSize(32);
  text("Swipe down to reload the page and change your faith",width/2,height/1.5);
  pop();
  noLoop();
}

if(winCollide==true) {
  push();

  fill(235);
  rect(0,0,width,height);
  fill(18);
  translate(0,-150);
  textAlign(CENTER);
  textSize(70);
  text('You saved your beloved one!',width/2,height/2);
  fill(colorList[2]);
  ellipse(width/2.4,height/1.5,90);
  fill(colorList[0]);
  ellipse(width/1.7,height/1.5,90);

  push();
  fill('red');
  translate(width/2,height/1.55);
  rotate(-135);
  rect(0,0,30,30);
  ellipse(30,15,30);
  ellipse(15,30,30);
  noLoop();
  pop();
  pop();
}

}

function Player(playerSize) {
  this.alphaZ=rotationZ;
  this.betaX=rotationX;
  this.gammaY=rotationY;

  this.playerSize=50;

  this.rGammaY=Math.round((gammaY+20 + 0.00001) * 1000) / 1000;
  this.rBetaX=Math.round((betaX + 0.00001) * 1000) / 1000;

  this.movX=map(rGammaY,-20,20,1,width/2);
  this.movY=map(rBetaX,-60,60,1,height);
  fill(colorList[2]);
  ellipse(movX,movY,playerSize);
}

function Princess(princessSize,ShakeRange) {
  this.ShakeRange=5;

  this.posX=random(width/2,width/2+ShakeRange);
  this.posY=random(45,45+ShakeRange);

  this.princessSize=60;
  fill(colorList[0]);
  ellipse(posX,posY,princessSize);
}

function Beast(beastColor) {

this.beastBetaX=betaX;
if(beastBetaX<-45) {beastBetaX=-45};

  this.beastX_L=0;
  this.beastY_L=0;
  this.beastW_L=map(beastBetaX,45,-60,1,width/2);
  this.beastH_L=height;

  this.beastX_R=width;
  this.beastY_R=0;
  this.beastW_R=map(beastBetaX,45,-60,1,-width/2);
  this.beastH_R=height;

  this.beastColor=colorList[3];
  fill(beastColor);
  rect(beastX_L,beastY_L,beastW_L,beastH_L);
  rect(beastX_R,beastY_R,beastW_R,beastH_R);

  fill('#212121');
  arc(map(beastBetaX,45,-60,1,width/2)-width/5,height/5,180,180,-110,70);
  fill('#b52238');
  arc(map(beastBetaX,45,-60,1,width/2)-width/5,height/5,150,150,-110,70);
  fill('#e80b2c');
  arc(map(beastBetaX,45,-60,1,width/2)-width/5,height/5,140,140,-110,70);
  fill('#ff4f0a');
  arc(map(beastBetaX,45,-60,1,width/2)-width/5,height/5,70,70,-110,70);

}

function windowResized() {resizeCanvas(innerWidth,innerHeight);}
