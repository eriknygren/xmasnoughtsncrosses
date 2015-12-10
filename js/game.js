var NC = {};

(function() {
  'use strict';

  NC.Game = function() {
    this.currentPlayerTurnIndex = 0;

    this.players = _.map(_.range(2), function(){ 
      return new NC.Player();
    });

    this.board = _.map(_.range(3), function(){ 
      return new NC.Row();
    });
  };

  NC.Game.prototype.makeMove = function(rowIndex, tileIndex) {
    if (!!this.board[rowIndex].tiles[tileIndex].checkedID) {
      //tile already checked
      return;
    }
    this.board[rowIndex].tiles[tileIndex].checkedID = this.currentPlayerTurnIndex;
    this.moveToNextPlayer();
  };

  NC.Game.prototype.moveToNextPlayer = function() {
    var current = this.currentPlayerTurnIndex;
    this.currentPlayerTurnIndex = current == 0 ? 1 : 0;
  };

  NC.Game.prototype.reset = function() {
    _.each(this.board, function(row) {
      _.each(row.tiles, function(tile){
        tile.checkedID = null;
      });
    });

    this.currentPlayerTurnIndex = 0;
  };

  NC.Row = function () {
    this.tiles = _.map(_.range(3), function(){ 
      return new NC.Tile();
    });
  };

  NC.Tile = function() {
    this.checkedID = null;
  };

  NC.Player = function() {
    this.wins = 0;
  };

})();