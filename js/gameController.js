(function() {
  'use strict';

  function GameController() {

    function Game() {
    	this.players = _.range(2)
    	this.board = _.map(_.range(3), function(){ 
    		return new Row();
    	}.bind(this));
    }

    function Row() {
    	this.tiles = _.map(_.range(3), function(){ 
    		return new Tile();
    	}.bind(this));
    }

    function Tile() {
    	this.checkedID = null;
    }

    this.game = new Game();
  };

  GameController.$inject = [];
  angular.module('xmas').controller('GameController', GameController);
})();