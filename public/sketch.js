var socket;
var weight,eraser,pencil,colorChooser;
let greeting;
let button;
var currentWidth = 36;
var currentColor;
var colors = ['green','red','orange','purple','blue','cyan','pink','maroon','brown'];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  socket = io.connect('http://localhost:8080/');
  socket.on('mouse', newDrawing);

  colorChooser = select("#colorChooser");
  currentColor = colorChooser.value();
  weight = select("#width");
  eraser = select('#eraser');
  pencil = select('#draw');
  weight.changed(() => {currentWidth = weight.value();})
  eraser.mousePressed(() => {currentColor=51});
  pencil.mousePressed(()=>{currentColor=colorChooser.value()});
  
  colorChooser.changed(()=>{currentColor=colorChooser.value()});

  textAlign(CENTER);
  textSize(50);


}

function erase(){
  console.log('inside erase method');
}

function newDrawing(data){
  noStroke();
  // log.console("cONNECTION nUMBER"+io.sockets.socket.client.conn.server.clientsCount);
  fill(data.color);
  ellipse(data.x,data.y,data.size,data.size);
  }

function mouseDragged(){
  console.log(mouseX+','+mouseY);
  console.log(weight.value());
  var data = {
    x:mouseX,
    y:mouseY,
    color:currentColor,
    size:currentWidth
  }

  socket.emit('mouse', data);

  noStroke();

  fill(currentColor);
  ellipse(mouseX,mouseY,currentWidth,currentWidth);
}

function draw() {
  
}