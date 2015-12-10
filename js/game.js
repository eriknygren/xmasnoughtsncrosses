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
  }

  NC.Row = function () {
    this.tiles = _.map(_.range(3), function(){ 
      return new NC.Tile();
    });
  }

  NC.Tile = function() {
    this.checkedID = null;
  }

  NC.Player = function() {
    this.wins = 0;
  }

})();