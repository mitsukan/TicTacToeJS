describe("Board", function() {

  var board;

  beforeEach(function() {
    board = new Board();
  });

  describe("Board functions", function() {

    it("Should have 3 subarrays in an array to represent a grid", function() {
      expect(board.grid).toEqual([["","",""],["","",""],["","",""]]);
    });

    it("Player X can add a X", function() {
      board.MoveX(1,1);
      expect(board.grid).toEqual([["","",""],["","X",""],["","",""]]);
    });

    it("Player O can add an O", function() {
      board.MoveO(1,1);
      expect(board.grid).toEqual([["","",""],["","O",""],["","",""]]);
    });

    it("Player X cannot overwrite Player O's move", function() {
      board.MoveO(1,1);
      board.MoveX(1,1);
      expect(board.grid).toEqual([["","",""],["","O",""],["","",""]]);
    });

    it("Player O cannot overwrite Player X's move", function() {
      board.MoveX(1,1);
      board.MoveO(1,1);
      expect(board.grid).toEqual([["","",""],["","X",""],["","",""]]);
    });

  });

});
