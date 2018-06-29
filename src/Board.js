Board = function(){
  this.grid = [["","",""],["","",""],["","",""]]
};

Board.prototype.playerX = function(array, subarray){
  this.grid[array][subarray] = "X"
};

Board.prototype.playerO = function(array, subarray){
  this.grid[array][subarray] = "O"
};
