// Written by Andrew Sink, August 2020
// Come say hi! 
// https://twitter.com/AndrewASink
// https://github.com/AndrewSink
//
//
// Original inspiration from Dan Shiffman's Pointillism Demo
// https://p5js.org/examples/image-pointillism.html
// 
// Cose released under the Creative Commons NonCommercial license (CC BY-NC)




let img; // this block defines the 
let smallPoint, largePoint;
let slider;
let slider2;

let triangles = false // this block sets the boolean variables for the buttons
let squares = false
let circles = false
let rcircles = false
let rtriangles = false
let rrect = false

let imageresize = false



function preload() { // loads initial image
  img = loadImage('virgie.jpg');
}



function setup() {

  img.loadPixels(); // load pixels


  if (img.width >= 501) { // if picture is wider than 500 px, will resize to 500 px
    img.resize(500, 0);
  }

  if (img.width <= 500) { // if picture is wider than 500 px, will resize to 500 px
    img.resize(500, 0);
  }

  createCanvas(img.width, img.height + 250); // sets canvas size to img size
  noStroke(); // removes element outline
  background(255); // sets background as white

  fill(204); // sets grey color for GUI
  rect(0, img.height + 50, img.width, img.height); // defines GUI space

  loadScreen()
}


function draw() {

  let circleSize = sizeSlider.value(); // sets circle diameter from size slider
  let speed = speedSlider.value(); // set FPS from speed slider
  frameRate(speed); // assigns speed slider value to FPS
  let trans = transSlider.value(); // set transparency from speed slider
  let x = floor(random(img.width)); // picks random x value
  let y = floor(random(img.height)); // picks random y value
  let pix = img.get(x, y); // picks random pixel using xy values
  fill(red(pix), green(pix), blue(pix), trans); //assigns color to pixel, sets transparency


  if (squares == true) { // checks square boolean
    rect(x, y, circleSize, circleSize); // draws square
  }

  if (triangles == true) { // checks triangle boolean
    triangle(x, y, x + circleSize, y, x + circleSize / 2, y - circleSize); // draws isocolese triangles
  }

  if (circles == true) { // checks circle boolean
    circle(x, y, circleSize); // draws circle
  }

  if (rcircles == true) { // checks random circle boolean
    ellipse(x, y, circleSize + random(0, 15), circleSize + random(0, 15)); // draws ellipse
  }

  if (rtriangles == true) { // checks random triangle boolean
    triangle(x, y + (random(0, 10)), x + circleSize, y + (random(0, 10)), x + circleSize / 2, y - circleSize + (random(0, 10))); // draws random triangles
  }

  if (rrect == true) { // checks random rectangle boolean
    rect(x, y, circleSize + (random(2, 15)), circleSize + (random(2, 15))); // draws square
  }

}


function setCircle() { // before each function, set all other boolean flags to false
  let triangles = false
  let squares = false
  let rcircles = false
  let rtriangles = false
  let rrect = false

  if (circles == false) { // if function is false at call, mark true and turn button green
    circles = true
    circleButton.style("background-color", "#03c03c");
  } else {
    circles = false // if function is true at call, mark false and turn button red
    circleButton.style("background-color", "#ff6961");
  }
}


function setTriangle() {
  let squares = false
  let circles = false
  let rcircles = false
  let rtriangles = false
  let rrect = false

  if (triangles == false) {
    triangles = true
    triangleButton.style("background-color", "#03c03c");
  } else {
    triangles = false
    triangleButton.style("background-color", "#ff6961");
  }
}


function setSquare() {
  let triangles = false
  let circles = false
  let rcircles = false
  let rtriangles = false
  let rrect = false

  if (squares == false) {
    squares = true
    squareButton.style("background-color", "#03c03c");

  } else {
    squares = false
    squareButton.style("background-color", "#ff6961");
  }
}


function setRtriangle() {
  let triangles = false
  let squares = false
  let circles = false
  let rcircles = false
  let rrect = false

  if (rtriangles == false) {
    rtriangles = true
    rtriangleButton.style("background-color", "#03c03c");
  } else {
    rtriangles = false
    rtriangleButton.style("background-color", "#ff6961");
  }
}


function setRcircle() {
  let triangles = false
  let squares = false
  let circles = false
  let rtriangles = false
  let rrect = false

  if (rcircles == false) {
    rcircles = true
    rcircleButton.style("background-color", "#03c03c");
  } else {
    rcircles = false
    rcircleButton.style("background-color", "#ff6961");
  }
}


function setRsquare() {
  let triangles = false
  let squares = false
  let circles = false
  let rcircles = false
  let rtriangles = false

  if (rrect == false) {
    rrect = true
    rrectButton.style("background-color", "#03c03c");
  } else {
    rrect = false
    rrectButton.style("background-color", "#ff6961");

  }

}


function updateImage(file) {
  if (file.type === 'image') {
    img = loadImage(file.data, updateScreen);
  } else {
    img = null;
  }
}




function freezeProgram() { // triggering this function will end the draw loop
  if (triangles == false && squares == false && circles == false && rcircles == false && rrect == false && rtriangles == false) {} else {
    noLoop();
  }
}


function grayFilter() {
  filter(GRAY); // applies gray filter
}


function loadScreen() { // initialize default canvas

  img.loadPixels(); // load pixels


  textSize(25); // speed slider text size
  fill(50); // speed slider text color
  text('Speed', 10, img.height + 105); // speed button text

  textSize(25); // size slider text size
  fill(50); // size slider text color
  text('Size', 10, img.height + 165); // size 

  textSize(15); // is anyone reading this? if so, hello!
  fill(50); // transparency slider text color
  text('Transparency', 10, img.height + 225); //size

  input = createFileInput(updateImage); // create 'choose file' file input button
  input.position(img.width - 350, img.height + 90);

  speedSlider = createSlider(10, 80, 80); //speed slider, range 10-60 FPS, default 45
  speedSlider.position(10, img.height + 60); // set speed slider position
  speedSlider.style('width', '80px'); // speed slider size

  sizeSlider = createSlider(5, 40, 15); // size slider, range 5-40 px, default 15
  sizeSlider.position(10, img.height + 120); //set size slider position
  sizeSlider.style('width', '80px'); // size slider size

  transSlider = createSlider(50, 255, 200); // transparency slider, 50-255 px, default 200
  transSlider.position(10, img.height + 180); //set transparency slider position
  transSlider.style('width', '80px'); // transparency slider size

  freezeButton = createButton('Freeze Program'); // creates a freeze button
  freezeButton.position(img.width - 110, img.height + 105); // sets button location
  freezeButton.size(100, 40); // sets button size
  freezeButton.mousePressed(freezeProgram); // calls for freeze function

  grayButton = createButton('Grayscale'); // creates a grayscale filter button
  grayButton.position(img.width - 110, img.height + 155); // sets button location
  grayButton.size(100, 40); // sets button size
  grayButton.mousePressed(grayFilter); // calls for grayscale function

  restartButton = createButton('Reset / Resize'); // creates a clear screen button
  restartButton.position(img.width - 110, img.height + 55); // sets button location
  restartButton.size(100, 40); // sets button size
  restartButton.mousePressed(updateScreen); // calls for clear function

  saveButton = createButton('Save'); // creates a save button
  saveButton.position(img.width - 110, img.height + 205); // sets save button location
  saveButton.size(100, 40); // sets save button location
  saveButton.mousePressed(saveScreen); // calls for save function

  triangleButton = createButton('Triangle'); // creates a triangle element button
  triangleButton.position(img.width - 295, img.height + 205); // sets button location
  triangleButton.size(80, 40); // sets button size
  triangleButton.mousePressed(setTriangle); // calls for set triangle element function

  squareButton = createButton('Square'); // creates a square element button
  squareButton.position(img.width - 380, img.height + 205); // sets button location
  squareButton.size(80, 40); // sets button size
  squareButton.mousePressed(setSquare); // calls for square element function

  circleButton = createButton('Circles'); // creates a circle element button
  circleButton.position(img.width - 210, img.height + 205); // sets button location
  circleButton.size(80, 40); // sets button size
  circleButton.mousePressed(setCircle); // calls for circle element function

  rcircleButton = createButton('Random Circles'); // creates a random circle element button
  rcircleButton.position(img.width - 210, img.height + 155); // sets button location
  rcircleButton.size(80, 40); // sets button size
  rcircleButton.mousePressed(setRcircle); // calls for random circle element function

  rtriangleButton = createButton('Random Triangles'); // creates a random triangle element button
  rtriangleButton.position(img.width - 295, img.height + 155); // sets button location
  rtriangleButton.size(80, 40); // sets button size
  rtriangleButton.mousePressed(setRtriangle); // calls for random triangle element function

  rrectButton = createButton('Random Rectangles'); // creates a random rectangle element button
  rrectButton.position(img.width - 380, img.height + 155); // sets button location
  rrectButton.size(80, 40); // sets button size
  rrectButton.mousePressed(setRsquare); // // calls for random rectangle element function
}


function updateScreen() {


  if (img.width >= 501) { // if picture is wider than 500 px, will resize to 500 px
    img.resize(500, 0);
  }

  if (img.width <= 500) { // if picture is wider than 500 px, will resize to 500 px
    img.resize(500, 0);
  }

  resizeCanvas(img.width, img.height + 250); // sets canvas size to img size
  noStroke(); // removes element outline
  background(255); // sets background as white

  fill(204); // sets grey color for GUI
  rect(0, img.height + 50, img.width, img.height); // defines GUI space

  textSize(25); // speed slider text size
  fill(50); // speed slider text color
  text('Speed', 10, img.height + 105); // speed button text

  textSize(25); // size slider text size
  fill(50); // size slider text color
  text('Size', 10, img.height + 165); // size 

  textSize(15); // is anyone reading this? if so, hello!
  fill(50); // transparency slider text color
  text('Transparency', 10, img.height + 225); //size

  input.position(img.width - 350, img.height + 90);


  speedSlider.position(10, img.height + 60); // set speed slider position
  sizeSlider.position(10, img.height + 120); //set size slider position
  transSlider.position(10, img.height + 180); //set transparency slider position
  freezeButton.position(img.width - 110, img.height + 105); // sets button location
  grayButton.position(img.width - 110, img.height + 155); // sets button location
  restartButton.position(img.width - 110, img.height + 55); // sets button location
  saveButton.position(img.width - 110, img.height + 205); // sets save button location
  triangleButton.position(img.width - 295, img.height + 205); // sets button location
  squareButton.position(img.width - 380, img.height + 205); // sets button location
  circleButton.position(img.width - 210, img.height + 205); // sets button location
  rcircleButton.position(img.width - 210, img.height + 155); // sets button location
  rtriangleButton.position(img.width - 295, img.height + 155); // sets button location
  rrectButton.position(img.width - 380, img.height + 155); // sets button location

  rrectButton.style("background-color", "");
  triangleButton.style("background-color", "");
  squareButton.style("background-color", "");
  circleButton.style("background-color", "");
  rcircleButton.style("background-color", "");
  rtriangleButton.style("background-color", "");

  triangles = false // this block resets the boolean variables for the buttons
  squares = false
  circles = false
  rcircles = false
  rtriangles = false
  rrect = false

  loop();
}


function saveScreen() { // creates a png of output, does not save GUI (hooray!)
  saveSketch = createGraphics(img.width, img.height);
  let c = get(0, 0, img.width, img.height);
  saveSketch.image(c, 0, 0);
  save(saveSketch, frameCount + ".png");
}