var socket;
var weight;
let input, greeting;
let button;
var currentWidth = 36;
var colors = ['green','red','orange','purple','blue','cyan','pink','maroon','brown'];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  socket = io.connect('http://localhost:8080/');
  socket.on('mouse', newDrawing);

  weight = select("#width");
  weight.mousePressed(() => {currentWidth = weight.value();})
  input = createInput();
  input.position(20, 65);


  greeting = createElement('h2', 'Enter your favourite color');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);


}

function erase(){
  console.log('inside erase method');
  // console.log(mouseX+','+mouseY);
  // console.log('Weight: '+weight);
  // var data = {
  //   x:mouseX,
  //   y:mouseY,
  //   connectionNumber:0
  // }

  // socket.emit('mouse', data);

  // noStroke();
  // fill('black');
  // ellipse(mouseX,mouseY,25,25);
}

function newDrawing(data){
  noStroke();
  // log.console("cONNECTION nUMBER"+io.sockets.socket.client.conn.server.clientsCount);
  fill(colors[5]);
  ellipse(data.x,data.y,currentWidth,currentWidth);
  }

function mouseDragged(){
  console.log(mouseX+','+mouseY);
  console.log(weight.value());
  var data = {
    x:mouseX,
    y:mouseY,
    connectionNumber:0
  }

  socket.emit('mouse', data);

  noStroke();
  if(input.value() == 'eraser')
    fill(51);
  else
    fill(input.value());
  ellipse(mouseX,mouseY,currentWidth,currentWidth);
}

function draw() {
  
}