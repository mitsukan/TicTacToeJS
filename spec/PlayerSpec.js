describe("Player", function() {

  var player;
  var mockBoard;

  beforeEach(function() {
    player = new Player();
    mockBoard = [["","",""],["","",""],["","",""]];
  });

  describe("Player functions", function() {

    it("Player X can add a X", function() {
      player.X(mockBoard,1,1);
      expect(mockBoard).toEqual([["","",""],["","X",""],["","",""]]);
    });

    it("Player O can add an O", function() {
      player.O(mockBoard,1,1);
      expect(mockBoard).toEqual([["","",""],["","O",""],["","",""]]);
    });

  });
});
