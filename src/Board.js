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

Board.prototype.wipe = function() {
  var array;
  var subarray;
  //iterations through array
  for (array=0; array <= 2; array++){
    //iterations through subarray
    for (subarray = 0; subarray <=2; subarray++){
      this.grid[array][subarray] = ""
    }
  }
};

// Board.prototype.CheckForWin = function(){};
