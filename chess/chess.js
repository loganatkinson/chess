var board;
var game;

var socket = io();

window.onload = function () {initGame();};
  var initGame = function(){
    var set = {
      draggable: true,
      position: 'start',
      onDrop: moveHandler,
    };
  board = new ChessBoard('board', set);
  game = new Chess();
};

var moveHandler = function(source, target){
  var move = game.move({from: source, to: target});

  if (move == null) return 'snapback';
  else socket.emit("move", move);
};

socket.on('move', function(msg){
  game.move(msg);
  board.position(game.fen());
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
