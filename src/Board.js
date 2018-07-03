Board = function(){
  this.grid = [["","",""],["","",""],["","",""]];
  this.winCondition = false;
};

Board.prototype.MoveX = function(array, subarray) {
  if(this.grid[array][subarray] == "X" || this.grid[array][subarray] == "O"){
    console.log("cannot overwrite");
    } else{this.grid[array][subarray] = "X";
  }
  console.log("X Moved.");
};

Board.prototype.MoveO = function(array, subarray) {
  if(this.grid[array][subarray] == "X" || this.grid[array][subarray] == "O"){
    console.log("cannot overwrite");
    } else{this.grid[array][subarray] = "O";
  }
  console.log("O Moved.");
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
  console.log("Board RESET!");
};

Board.prototype.WinCheckX = function() {
  var rows = [[["X","X","X"],["","",""],["","",""]],
  [["","",""],["X","X","X"],["","",""]],
  [["","",""],["","",""],["X","X","X"]]]

  var columns = [[["X","",""],["X","",""],["X","",""]],
  [["","X",""],["","X",""],["","X",""]],
  [["","","X"],["","","X"],["","","X"]]]

  var diagonals = [[["X","",""],["","X",""],["","","X"]],
  [["","","X"],["","X",""],["X","",""]]]


  for(var testArr = 0; testArr <= 2; testArr++){
    if(String(this.grid) === String(rows[testArr])) {
      this.winCondition = true;
      console.log("X WON!");
    }
    if(String(this.grid) === String(columns[testArr])) {
      this.winCondition = true;
      console.log("X WON!");
    }
  }
  for(var testArr = 0; testArr <= 1; testArr++){
    if(String(this.grid) === String(diagonals[testArr])) {
      this.winCondition = true;
      console.log("X WON!");
    }
  }

};
