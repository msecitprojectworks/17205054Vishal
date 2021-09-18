var express=require('express')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use( express.static('public') );

io.on('connection', function(socket){
  socket.on("canvas data from client-mousedown",function(data){
    socket.broadcast.emit("canvas data from server-mousedown",data);
  });

    socket.on("canvas data from client-mousemove",function(data){
    socket.broadcast.emit("canvas data from server-mousemove",data);
  });

  socket.on("canvas data from client-mouseup",function(data){
    socket.broadcast.emit("canvas data from server-mouseup",{});
  });

});

http.listen(3010, function(){
  console.log('listening on localhost:3000');
});



