var board = new Board();

var choiceX
$("#0-0").click(function(){
  $("span", this).text("X");
  board.MoveX(0,0);
  board.WinCheckX();
});
$("#0-1").click(function(){
  $("span", this).text("X");
  board.MoveX(0,1);
  board.WinCheckX();
});
$("#0-2").click(function(){
  $("span", this).text("X");
  board.MoveX(0,2);
  board.WinCheckX();
});
$("#1-0").click(function(){
  $("span", this).text("X");
  board.MoveX(1,0);
  board.WinCheckX();
});
$("#1-1").click(function(){
  $("span", this).text("X");
  board.MoveX(1,1);
  board.WinCheckX();
});
$("#1-2").click(function(){
  $("span", this).text("X");
  board.MoveX(1,2);
  board.WinCheckX();
});
$("#2-0").click(function(){
  $("span", this).text("X");
  board.MoveX(2,0);
  board.WinCheckX();
});
$("#2-1").click(function(){
  $("span", this).text("X");
  board.MoveX(2,1);
  board.WinCheckX();
});
$("#2-2").click(function(){
  $("span", this).text("X");
  board.MoveX(2,2);
  board.WinCheckX();
});
