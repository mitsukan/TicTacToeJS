Board = function(){
  this.grid = [["","",""],["","",""],["","",""]]
};

Board.prototype.MoveX = function(array, subarray) {
  if(this.grid[array][subarray] == "X" || this.grid[array][subarray] == "O"){
    console.log("cannot overwrite");
  } else{this.grid[array][subarray] = "X";
}

};

Board.prototype.MoveO = function(array, subarray) {
  if(this.grid[array][subarray] == "X" || this.grid[array][subarray] == "O"){
    console.log("cannot overwrite");
  } else{this.grid[array][subarray] = "O";
}
};
