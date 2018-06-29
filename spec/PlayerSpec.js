describe("Player", function(){

  var player;
  var mockBoard;

  beforeEach(function(){
    player = new Player();
    mockBoard = [["","",""],["","",""],["","",""]];
  });

  describe("Player functions", function(){

    it("PlayerX can add a X", function() {
      player.X(mockBoard,1,1)
      expect(mockBoard).toEqual([["","",""],["","X",""],["","",""]]);
    });



  });
});
