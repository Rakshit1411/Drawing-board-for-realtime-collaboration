var socket;
let input, button, greeting;
var colors = ['green','red','orange','purple','blue','cyan','pink','maroon','brown'];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  socket = io.connect('http://localhost:8080/');
  socket.on('mouse', newDrawing);



  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  //button.mousePressed(greet);

  greeting = createElement('h2', 'Enter your favourite color');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);


}

function newDrawing(data){
  noStroke();
  // log.console("cONNECTION nUMBER"+io.sockets.socket.client.conn.server.clientsCount);
  fill(colors[5]);
  ellipse(data.x,data.y,25,25);
  }

function mouseDragged(){
  console.log(mouseX+','+mouseY);

  var data = {
    x:mouseX,
    y:mouseY,
    connectionNumber:0
  }

  socket.emit('mouse', data);

  noStroke();
  fill(input.value());
  ellipse(mouseX,mouseY,25,25);
}

function draw() {
  
}