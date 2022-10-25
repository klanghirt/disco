let r, g, b; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  slider = createSlider(0, 151, 0);
  slider.position(width/2, height/1.08);
  slider.style("width", "300px");
  noFill();
}

function draw() {
  background(0);
  let val = slider.value();
  
  push();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      stroke(170);
      let gapW = width * 0.2;
      let gapH = height * 0.1;
      let ix = width * 0.1;
      let iy = height * 0.1;
      let x = ix + gapW * i;
      let y = iy + gapH * j;
      circle(x, y, val);
    }
  }
  pop();
  
  push();
  translate(width / 2, height / 2);
  fill(r, g, b);
  rotate(val / 2);
  textSize(val * 1.4);
  textFont("blenny");
  textAlign(CENTER, CENTER);
  text("disco", 5, 10);
  pop();
  
  if (val > 0){
   r = random (255)
   g = random (255)
   b = random (255)
    
  }
 

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
