var express = require('express');
var chessNode = express();
chessNode.use(express.static('chess'));
var http = require('http').Server(chessNode);
var port = process.env.PORT || 3000;

chessNode.get('/', function(req, res){
  res.sendFile(__dirname + '/chess/chess.html');
});

http.listen(port, function(){
  console.log('listening on port ' + port);
  });
