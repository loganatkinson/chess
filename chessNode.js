var express = require('express');
var chessNode = express();
chessNode.use(express.static('public'));
var http = require('http').Server(chessNode);
var port = process.env.PORT || 3000;

chessNode.get('/', function(req, res){
  res.sendFile(__dirname + '/chess.html');
});

http.listen(port, function(){
  console.log('listening on *: ' + port);
  });
