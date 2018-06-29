describe("Board", function() {

  var board;

  beforeEach(function() {
    board = new Board();
  });

  describe("Board functions", function() {

    it("Should have 3 subarrays in an array to represent a grid", function() {
      expect(board.grid).toEqual([["","",""],["","",""],["","",""]]);
    });

    // it("PlayerX can add a X", function() {
    //   board.playerX(1,1)
    //   expect(board.grid).toEqual([["","",""],["","X",""],["","",""]]);
    // });
    //
    // it("PlayerO can add an O", function() {
    //   board.playerO(1,1)
    //   expect(board.grid).toEqual([["","",""],["","O",""],["","",""]]);
    // });

  });

});
