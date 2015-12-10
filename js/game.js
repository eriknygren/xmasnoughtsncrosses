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
    this._checkForWinner();
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

  NC.Game.prototype._checkForWinner = function() {
    var winnerID = null;
    _.each(this.players, function(player, index){
      if (this._hasPlayerWon(index)) {
        player.wins += 1;
        winnerID = index;
      }
    }.bind(this));
    console.log('winner')
    console.log(winnerID)

    return winnerID;
  }

  NC.Game.prototype._hasPlayerWon = function(id) {
    return this._checkForHorizontalWin(id);
  }

  NC.Game.prototype._checkForHorizontalWin = function(id) {
    return _.any(this.board, function(row) {
      return _.all(row.tiles, function(tile){
        return tile.checkedID === id;
      });
    });
  }

  NC.Game.prototype._checkForVerticalWin = function(id) {
    
  }

  NC.Game.prototype._checkForDiagonalWin = function(id) {
    
  }

})();