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

    socket.on('move', function(msg){
      socket.broadcast.emit('move', msg);

      socket.on('disconnect', function(){
  console.log('Connection lost');
        });
    });
});
