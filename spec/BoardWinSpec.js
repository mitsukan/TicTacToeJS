describe("Board", function() {

  var board;

  beforeEach(function() {
    board = new Board();
  });

  describe("Player X Win Conditions", function() {

    it("X top row", function() {
      board.MoveX(0,0);
      board.MoveX(0,1);
      board.MoveX(0,2);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });

    it("X mid row", function() {
      board.MoveX(1,0);
      board.MoveX(1,1);
      board.MoveX(1,2);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });

    it("X bottom row", function() {
      board.MoveX(2,0);
      board.MoveX(2,1);
      board.MoveX(2,2);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });

    it("X left column", function() {
      board.MoveX(0,0);
      board.MoveX(1,0);
      board.MoveX(2,0);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });

    it("X mid column", function() {
      board.MoveX(0,1);
      board.MoveX(1,1);
      board.MoveX(2,1);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });

    it("X right column", function() {
      board.MoveX(0,2);
      board.MoveX(1,2);
      board.MoveX(2,2);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });

    it("X diag 1", function() {
      board.MoveX(0,0);
      board.MoveX(1,1);
      board.MoveX(2,2);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });

    it("X diag 2", function() {
      board.MoveX(0,2);
      board.MoveX(1,1);
      board.MoveX(2,0);
      board.WinCheckX();
      expect(board.winCondition).toEqual(true);
    });


  });

});
