var express = require('express');
var chessNode = express();
chessNode.use(express.static('chess'));
var http = require('http').Server(chessNode);
var port = process.env.PORT || 3000;
var io = require('socket.io')(http);

chessNode.get('/', function(req, res){
  res.sendFile(__dirname + '/chess/chess.html');
});

http.listen(port, function(){
  console.log('listening on port ' + port);
});

io.on('connection', function(socket){
    console.log('New Connection');
    //socket.username = "Anon"
    //socket.on('change_username', (data){
      //socket.username = data.username
    //})
    //socket.on('new_message', (data){
    //  io.sockets.emit('new_message', {message : data.message, username : socket.username})
    //})
    socket.on('move', function(msg){
      socket.broadcast.emit('move', msg);
    });
});
