//Falling Leaves[2022] by Cheryl Hui
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
 for(let x =0;x<width;x+=100){
  drawTree(100+x,height);}
}

function drawTree(x,y){
  push();
  translate(x,y);
  branch(200,160,-PI);
  pop();
}

function branch(len,wid,ang){
  if(len <24.0) return;
  let newLen = len*map(mouseX,0,width,0.4,0.8);
  strokeWeight(2);
  push();
  rotate(ang);
  noFill();
  arc(70,50,40,40,PI/2,PI,OPEN);
  arc(50,70,40,40,-PI/2,0,OPEN);
  // arc(280,280,160,160,-PI,-PI/2,PIE);
  translate(0,newLen);
  let newAng=map(mouseY,0,height,0,PI/4,PI);
  let newWid= map(mouseY,0,height,100,height);
  branch(newLen,newWid,newAng);
  branch(newLen,newWid,-newAng);
  pop();
}

function keyPressed(){
   if (key === 's') {
  save("Leaves.png");  }
}