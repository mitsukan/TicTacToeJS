describe("Board", function() {

  beforeEach(function() {
    board = new Board();
  });

  describe("Board functions", function() {

    it("Should have 3 subarrays in an array to represent a grid", function() {
      expect(board.grid).toBe([["","",""],["","",""],["","",""]]);
    });

  });

});
