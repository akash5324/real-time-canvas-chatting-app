var socket;
function setup()
{
  createCanvas(500, 500);
  background(51);
 socket= io.connect('http://localhost:3000');
 socket.on('mouse',newDraw);
}
function newDraw(data)
{
  noStroke();
  fill(255,0,200);
  ellipse(data.x, data.y,36, 36);
}
function mouseDragged()
{
  console.log(mouseX + ',' + mouseY);
    var data= {
      x: mouseX,
      y: mouseY
    }
  socket.emit('mouse',data)
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY,36, 36);
}
