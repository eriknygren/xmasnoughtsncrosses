(function() {
  'use strict';

  function GameController() {

    this.game = new NC.Game(onGameOver);

    function onGameOver() {
      $('#myModal').modal()
    };
  };

  GameController.$inject = [];
  angular.module('xmas').controller('GameController', GameController);
})();