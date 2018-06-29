Board = function(){
  this.grid = [["","",""],["","",""],["","",""]]
};

Board.prototype.playerX = function(array, subarray){
  this.grid[array][subarray] = "X"
};
