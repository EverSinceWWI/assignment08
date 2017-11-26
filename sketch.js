var colorList = ['#ffc4c8','#5e5e5e','#3aa3ff']; //Pink,Grey,Blue
var Y_AXIS = 1;
var X_AXIS = 2;

function setup() {
  createCanvas(innerWidth,innerHeight);
  angleMode(DEGREES);
}

function draw() {

  var alphaZ=rotationZ;
  var betaX=rotationX;
  var gammaY=rotationY;

  background(colorList[1]);
  noStroke();

  if(innerWidth>innerHeight) {
    console.log('landscape mode');
    ellipse(map(betaX,0,50,1,width),height/2,25)

  }
  else{
    console.log('portrait mode');
    var rGammaY = Math.round((gammaY+20 + 0.00001) * 1000) / 1000;
    console.log(rGammaY);
    fill(colorList[2]);
    ellipse(map(rGammaY,-20,20,1,width/2),map(betaX,-60,60,1,height),50);

    push();
    fill(colorList[0]);
    ellipse(random(width/2,width/2+5),random(45,50),60);
    fill(235);
    textSize(36);
    text("help!",width/1.9,115);
    pop();

    fill(18);
    rect(0,0,map(betaX,45,-60,1,width/2),height);
    rect(width,0,map(betaX,45,-60,1,-width/2),height);
    push();
    for(i=0;i<1330;i+=110) {
    fill(235);
    triangle(map(betaX,45,-60,1,width/2),0+i,map(betaX,45,-60,1,width/2),100+i,map(betaX,45,-60,1,width/2)+50,50+i);
  }
    for(i=0;i<1440;i+=110) {
    fill(235);
    triangle(map(betaX,45,-60,width,width/2),0+i-50,map(betaX,45,-60,width,width/2),100+i-50,map(betaX,45,-60,width,width/2)-50,i);
  }

  //SURPRISE TRIANGLES
  var a=300;
  triangle(map(betaX,45,-60,1,width/2),0+770,map(betaX,45,-60,1,width/2),100+770,map(betaX,45,-60,1,width/2)+50+a,50+770);
  triangle(map(betaX,45,-60,width,width/2),0+990-50,map(betaX,45,-60,width,width/2),100+990-50,map(betaX,45,-60,width,width/2)-50-a,990);
  var b=200;
  triangle(map(betaX,45,-60,1,width/2),0+440,map(betaX,45,-60,1,width/2),100+440,map(betaX,45,-60,1,width/2)+50+b,50+440);

  var c=160;
  triangle(map(betaX,45,-60,width,width/2),0+770-50,map(betaX,45,-60,width,width/2),100+770-50,map(betaX,45,-60,width,width/2)-50-c,770);

  var d=380;
  triangle(map(betaX,45,-60,width,width/2),0+660-50,map(betaX,45,-60,width,width/2),100+660-50,map(betaX,45,-60,width,width/2)-50-d,660);
  var e=85;
  triangle(map(betaX,45,-60,width,width/2),0+550-50,map(betaX,45,-60,width,width/2),100+550-50,map(betaX,45,-60,width,width/2)-50-e,550);

  var f=35;
  triangle(map(betaX,45,-60,width,width/2),0+440-50,map(betaX,45,-60,width,width/2),100+440-50,map(betaX,45,-60,width,width/2)-50-f,440);
    pop();
    textSize(21);
    text(rGammaY,width/2,height/2)
  }

//eye
push();

fill('#212121');
arc(map(betaX,45,-60,1,width/2)-width/5,height/5,180,180,-110,70);
fill('#b52238');
arc(map(betaX,45,-60,1,width/2)-width/5,height/5,150,150,-110,70);
fill('#e80b2c');
arc(map(betaX,45,-60,1,width/2)-width/5,height/5,140,140,-110,70);
fill('#ff4f0a');
arc(map(betaX,45,-60,1,width/2)-width/5,height/5,70,70,-110,70);


pop();

}

function windowResized() {resizeCanvas(innerWidth,innerHeight);}
