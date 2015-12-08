(function() {
  'use strict';

  function GameController() {

    function Game() {
    	this.board = _.map(_.range(4), function(){ 
    		return new Row();
    	}.bind(this));
    }

    function Row() {
    	this.tiles = _.map(_.range(4), function(){ 
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