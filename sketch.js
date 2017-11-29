var colorList = ['#ffc4c8','#5e5e5e','#3aa3ff','#121212']; //Pink,Grey,Blue,BlackBeast
var beastHitLeft=false;
var beastHitRight=false;
function setup() {
  createCanvas(innerWidth,innerHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
}

function draw() {
  collideDebug(true);
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
    textSize(32);

    //HELP text
    push();
    fill(235);
    textSize(36);
    text("help!",width/1.9,115);
    pop();

    //The Black Beast
    Beast(colorList[3]);

    var spikeList = [350,300,200,160,85,35];
    var spikePosition=[990,770,660,550,440];

    //Teeth, left row
    for(i=0;i<1330;i+=110) {
    fill(235);
    var spikeLeft=0;
    if(i==770) {spikeLeft=spikeList[1];}
    if(i==440) {spikeLeft=spikeList[2];}
    triangle(map(beastBetaX,45,-60,1,width/2),0+i,map(beastBetaX,45,-60,1,width/2),100+i,map(beastBetaX,45,-60,1,width/2)+50+spikeLeft,50+i);

    var triPolyTeethLeft = [];
    var trisL = [];

    trisL[i] = [
    triPolyTeethLeft[0] = createVector((beastBetaX,45,-60,1,width/2),0+i),
    triPolyTeethLeft[1] = createVector(map(beastBetaX,45,-60,1,width/2),100+i),
    triPolyTeethLeft[2] = createVector(map(beastBetaX,45,-60,1,width/2)+50+spikeLeft,50+i),
  ];
    var hitTeethLeft = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,trisL[i]);
  }

  //Teeth, Right row
    for(o=0;o<1440;o+=110) {
    fill(235);
    var spikeRight=0;
    if(o==990) {spikeRight=spikeList[1];}
    if(o==770) {spikeRight=spikeList[2];}
    if(o==660) {spikeRight=spikeList[0];}
    if(o==550) {spikeRight=spikeList[4];}
    if(o==440) {spikeRight=spikeList[5];}
    triangle(map(beastBetaX,45,-60,width,width/2),0+o-50,map(beastBetaX,45,-60,width,width/2),100+o-50,map(beastBetaX,45,-60,width,width/2)-50-spikeRight,o);

    var triPolyTeethRight = [];
    var trisR = [];
    trisR[o] = [
    triPolyTeethRight[0] = createVector((beastBetaX,45,-60,1,width/2),0+o),
    triPolyTeethRight[1] = createVector(map(beastBetaX,45,-60,1,width/2),100+o),
    triPolyTeethRight[2] = createVector(map(beastBetaX,45,-60,1,width/2)+50+spikeRight,50+o),
  ];
    var hitTeethRight = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,trisR[o]);
  }

  //RIGHT-COLLISIONS

  var hitbox = 42;

  var hit990=false;
  var hit770R=false;
  var hit770L=false;
  var hit660=false;
  var hit550=false;
  var hit440R=false;
  var hit440L=false;
  var hitTeethLeft=false;
  var hitTeethRight=false;
  var beastHitLeft=false;
  var beastHitRight=false;

  var triPoly990 = [];

  triPoly990[0] = createVector(map(beastBetaX,45,-60,width,width/2),0+990-50);
  triPoly990[1] = createVector(map(beastBetaX,45,-60,width,width/2),100+990-50);
  triPoly990[2] = createVector(map(beastBetaX,45,-60,width,width/2)-50-spikeList[1],990);

  var hit990 = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,triPoly990);

  var triPoly770R = [];

  triPoly770R[0] = createVector(map(beastBetaX,45,-60,width,width/2),0+770-50);
  triPoly770R[1] = createVector(map(beastBetaX,45,-60,width,width/2),100+770-50);
  triPoly770R[2] = createVector(map(beastBetaX,45,-60,width,width/2)-50-spikeList[2],770);

  var hit770R = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,triPoly770R);

  var triPoly550 = [];

  triPoly550[0] = createVector(map(beastBetaX,45,-60,width,width/2),0+550-50);
  triPoly550[1] = createVector(map(beastBetaX,45,-60,width,width/2),100+550-50);
  triPoly550[2] = createVector(map(beastBetaX,45,-60,width,width/2)-50-spikeList[4],7550);

  var hit550 = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,triPoly550);

  var triPoly660 = [];

  triPoly660[0] = createVector(map(beastBetaX,45,-60,width,width/2),0+660-50);
  triPoly660[1] = createVector(map(beastBetaX,45,-60,width,width/2),100+660-50);
  triPoly660[2] = createVector(map(beastBetaX,45,-60,width,width/2)-50-spikeList[0],660);

  var hit660 = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,triPoly660);

  var triPoly440R = [];

  triPoly440R[0] = createVector(map(beastBetaX,45,-60,width,width/2),0+440-50);
  triPoly440R[1] = createVector(map(beastBetaX,45,-60,width,width/2),100+440-50);
  triPoly440R[2] = createVector(map(beastBetaX,45,-60,width,width/2)-50-spikeList[5],440);

  var hit440R = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,triPoly440R);

  //LEFT-COLLISIONS

  var triPoly770L = [];

  triPoly770L[0] = createVector(map(beastBetaX,45,-60,1,width/2),0+770);
  triPoly770L[1] = createVector(map(beastBetaX,45,-60,1,width/2),100+770);
  triPoly770L[2] = createVector(map(beastBetaX,45,-60,1,width/2)+50+spikeList[1],50+770);

  var hit770R = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,triPoly770L);

  var triPoly440L = [];

  triPoly440L[0] = createVector(map(beastBetaX,45,-60,1,width/2),0+440);
  triPoly440L[1] = createVector(map(beastBetaX,45,-60,1,width/2),100+440);
  triPoly440L[2] = createVector(map(beastBetaX,45,-60,1,width/2)+50+spikeList[2],50+440);

  var hit440L = collideCirclePoly(map(rGammaY,-20,20,1,width/2),map(rBetaX,-60,60,1,height),hitbox,triPoly440L);
  }

  var beastHitLeft = collideRectCircle(this.beastX_L,this.beastY_L,this.beastW_L,this.beastH_L,this.rGammaY,-20,20,1,width/2,this.playerSize);
  var beastHitRight = collideRectCircle(this.beastX_R,this.beastY_R,this.beastW_R,this.beastH_R,this.rGammaY,-20,20,1,width/2,this.playerSize);

//GAMEOVER/VICTORY EVENTS
if(
  hit990==true
  || hit770R==true
  || hit550==true
  || hit660==true
  || hit440R==true
  || hit770L==true
  || hit440L==true
  || hitTeethLeft==true
  || hitTeethRight==true
  || beastHitLeft==true
  || beastHitRight==true
  ) {
  textAlign(CENTER);
  background('red')
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

  background(235);
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
