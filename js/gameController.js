(function() {
  'use strict';

  function GameController() {

    this.game = new NC.Game(onGameOver);

    function onGameOver(winner) {
      console.log('gg', winner);
    };
    console.log(this.game);
  };

  GameController.$inject = [];
  angular.module('xmas').controller('GameController', GameController);
})();