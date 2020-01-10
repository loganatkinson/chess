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

//$(function(){
//  var message = $("#message")
//  var username = $("#username")
//  var send_message  = $("#send_message")
//  var send_username = $("#send_username")
//  var chat = $("#chat")
//
//  send.message.click(function(){
//    socket.emit('new_message', {message: message.val()})
//  })
//
//socket.on("new_message", (data) {
//    console.log(data)
//    chat.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
//  })
//
//  send_username.click(function(){
//    console.log(username.val())
//    socket.emit('change_username', {username : username.val()})
//  })
//});
