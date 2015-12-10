var NC = {};

(function() {
  'use strict';

  NC.Game = function(gameOverCallBack) {
    this.gameOverCallBack = gameOverCallBack;
    this.currentPlayerTurnIndex = 0;
    this.turns = 0;
    this.winner = null;

    var playerNames = ['Red Santa', 'Green Santa'];

    this.players = _.map(_.range(2), function(i){ 
      return new NC.Player(playerNames[i]);
    });

    this.board = _.map(_.range(3), function(){ 
      return new NC.Row();
    });
  };

  NC.Game.prototype.makeMove = function(rowIndex, tileIndex) {
    if (!this._canClickTile(rowIndex, tileIndex)) {
      return;
    }
    this.board[rowIndex].tiles[tileIndex].checkedID = this.currentPlayerTurnIndex;
    this._moveToNextPlayer();

  };

  NC.Game.prototype._moveToNextPlayer = function() {
    this.turns += 1;
    var current = this.currentPlayerTurnIndex;
    this.currentPlayerTurnIndex = current == 0 ? 1 : 0;
    this.winner = this._checkForWinner();
    
    if (this.winner || this._hasGameDrawn()) {
      this.gameOverCallBack();
    }
  };

  NC.Game.prototype.resetBoard = function() {
    _.each(this.board, function(row) {
      _.each(row.tiles, function(tile){
        tile.checkedID = null;
      });
    });

    this.turns = 0;
    this.currentPlayerTurnIndex = 0;
    this.winner = null;
  };

  NC.Game.prototype.resetScore = function() {
    this.resetBoard();
    _.each(this.players, function(player){
      player.wins = 0;
    });
  };

  NC.Row = function () {
    this.tiles = _.map(_.range(3), function(){ 
      return new NC.Tile();
    });
  };

  NC.Tile = function() {
    this.checkedID = null;
  };

  NC.Player = function(name) {
    this.wins = 0;
    this.name = name;
  };

  NC.Game.prototype._hasGameDrawn = function() {
    return this.turns >= 9;
  };

  NC.Game.prototype._checkForWinner = function() {
    var winnerID = null;
    _.each(this.players, function(player, index){
      if (this._hasPlayerWon(index)) {
        player.wins += 1;
        winnerID = index;
      }
    }.bind(this));

    return this.players[winnerID];
  };

  NC.Game.prototype._hasPlayerWon = function(id) {
    return (this._checkForHorizontalWin(id) || 
            this._checkForVerticalWin(id) ||
            this._checkForDiagonalWin(id));
  };

  NC.Game.prototype._checkForHorizontalWin = function(id) {
    return _.any(this.board, function(row) {
      return this._doesAllTilesMatchPlayerID(row.tiles, id);
    }.bind(this));
  };

  NC.Game.prototype._checkForVerticalWin = function(id) {
    return _.any(this._getTilesInColumns(), function(column) {
      return this._doesAllTilesMatchPlayerID(column, id);
    }.bind(this));
  };

  NC.Game.prototype._checkForDiagonalWin = function(id) {
    var rows = [this._getTilesRightDiagonally(), this._getTilesLeftDiagonally()];
    return _.any(rows, function(row) {
      return this._doesAllTilesMatchPlayerID(row, id);
    }.bind(this));
  };

  NC.Game.prototype._getTilesInColumns = function() {
    return _.map(_.range(3), function(i){ 
      return _.map(this.board, function(row) {
        return row.tiles[i];
      })
    }.bind(this));
  };

  NC.Game.prototype._getTilesLeftDiagonally = function() {
    return _.map(_.range(3), function(i){ 
      return this.board[i].tiles[i]
    }.bind(this));
  };

  NC.Game.prototype._getTilesRightDiagonally = function() {
    return _.map(_.range(3).reverse(), function(value, index){ 
      return this.board[index].tiles[value];
    }.bind(this));
  };

  NC.Game.prototype._doesAllTilesMatchPlayerID = function(tiles, id) {
    return _.all(tiles, function(tile){
      return tile.checkedID === id;
    });
  };

  NC.Game.prototype._canClickTile = function(rowIndex, tileIndex) {
    if (!!this.winner || !!this.board[rowIndex].tiles[tileIndex].checkedID) {
      //tile already checked or game over
      return false;
    }
    return true;
  };

})();