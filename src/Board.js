Board = function(){
  this.grid = [["","",""],["","",""],["","",""]]
};

Board.prototype.MoveX = function(array, subarray) {
  this.grid[array][subarray] = "X";
};

Board.prototype.MoveO = function(array, subarray) {
  this.grid[array][subarray] = "O";
};
