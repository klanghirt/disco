let r, g, b; 
var wait;

let disco = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  time = millis();
  colorMode(RGB);
  slider = createSlider(0, 151, 0);
  slider.style("width", "300px");
  noFill();
  
  button = createButton("Click to Continue");
  button.mousePressed(() => disco = true);
  button.style("background-color", "200")
  background(255);
  
  //slider can't be customized. I've had problems with it since the beginning of this unit. the color is always green, regardless of what files I open. I copy/pasted the code in the html file from w3Schools and it works for the button, but not the slider. very lost and confused
  slider.style("background-color", "pink")
}

function draw() {
  background(0);
 
  let val = slider.value();
  let wait = 200
  
  button.position(windowWidth / 2 - 58, windowHeight / 2 - 2);
  slider.position(width / 2 - 150, height / 1.2);
  
  if (disco) {
    slider.style ('display', 'block');
    button.style ('display', 'none');
  if ((millis() - time) >= wait) {
    fill(r, g, b);
    time = millis();
  if (val > 0){
   r = random (255)
   g = random (255)
   b = random (255)
 }
  }
 } else {
   slider.style ('display', 'none');
   fill (255);
    textAlign(CENTER);
  textFont("trebuchet MS");
    textSize(50);
   text ("FLASH WARNING", width / 2 + 5, height / 2 - 100)
  }
  
  
  translate(width / 2, height / 2);
  noStroke();
  fill(r, g, b);
  rotate(val / 2);
  textSize(val * 2.5);
  textFont("blenny");
  textAlign(CENTER, CENTER);
  text("disco", 5, 10);
  
  
  
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
