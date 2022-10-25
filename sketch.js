let r, g, b; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  slider = createSlider(0, 151, 0);
  slider.position(width / 2, height / 1.03);
  slider.style("width", "300px");
  noFill();
}

function draw() {
  background(0);
 
  let val = slider.value();
  let x = random (255);
  
  push();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      stroke(1.2 * val);
      strokeWeight(2);
      let gapW = width * 0.2;
      let gapH = height * 0.1;
      let ix = width * 0.1;
      let iy = height * 0.1;
      let x = ix + gapW * i;
      let y = iy + gapH * j;
      strokeWeight(4);
      circle (x, y, 3 * val);
      strokeWeight(3);
      circle(x, y, 2 * val);
      strokeWeight(2);
      circle(x, y, val);
      strokeWeight(1);
      circle(x, y, val/2)
    }
  }
  pop();
  
  push();
  translate(width / 2, height / 2);
  noStroke();
  fill(r, g, b);
  rotate(val / 2);
  textSize(val * 3);
  textFont("blenny");
  textAlign(CENTER, CENTER);
  text("disco", 5, 10);
  pop();
  
  if (val > 0){
   r = random (255)
   g = random (255)
   b = random (255)
   stroke(x)
    
  }
 

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
