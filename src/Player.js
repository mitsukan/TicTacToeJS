Player = function() {};

Player.prototype.X = function(board, array, subarray) {
  board[array][subarray] = "X";
};

Player.prototype.O = function(board, array, subarray) {
  board[array][subarray] = "O";
};
