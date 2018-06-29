describe("Board", function() {

  var board;

  beforeEach(function() {
    board = new Board();
  });

  describe("Board functions", function() {

    it("Should have 3 subarrays in an array to represent a grid", function() {
      expect(board.grid).toEqual([["","",""],["","",""],["","",""]]);
    });

    it("Change empty box to X", function() {
      board.playerX(1,1)
      expect(board.grid).toEqual([["","",""],["","X",""],["","",""]]);
    });

  });

});
