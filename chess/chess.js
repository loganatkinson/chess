var board;
var game;

window.onload = function () {
  initGame();
};

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
};
