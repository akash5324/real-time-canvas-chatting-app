var express=require('express');
var app=express();
var server=app.listen(3000);
app.use(express.static('public'));

var socket=require('socket.io');
var io=socket(server);

io.sockets.on('connection',newConnection);
function newConnection(socket)
{
  console.log(' user connected with id' + socket.id);
  socket.on('mouse', mouseMsg);
  function mouseMsg(data)
  {
    socket.broadcast.emit('mouse',data);
  console.log(data);
  }
  socket.on('disconnect',function()
{
  console.log('user disconnected with id'+ socket.id);
});
}
console.log("server is running");
