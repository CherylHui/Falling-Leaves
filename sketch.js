//Falling Leaves[2022] by Cheryl Hui
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element
}

function draw() {
  background(255);
  
 for(let x =0;x<height;x+=200){
  drawTree(100+x,width);}
}

function drawTree(x,y){
  push();
  translate(x,y);
  branch(200,160,-PI);
  pop();
}

function branch(len,wid,ang){
  if(len <50.0) return;
  let newLen = len*map(mouseX,0,h,0.4,0.8);
  strokeWeight(2);
  push();
  rotate(ang);
  noFill();
  arc(70,50,40,40,PI/2,PI,OPEN);
  arc(50,70,40,40,-PI/2,0,OPEN);
  translate(0,newLen);
  let newAng=map(mouseY,0,width,0,PI/4,PI);
  let newWid= map(mouseY,0,height,100,k);
  branch(newLen,newWid,newAng);
  branch(newLen,newWid,-newAng);
  pop();
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
   if (key === 's') {
  save("Leaves.png");  }
}