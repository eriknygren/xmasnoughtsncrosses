(function() {
  'use strict';

  function GameController() {

    this.game = new NC.Game();
    console.log(this.game);
  };

  GameController.$inject = [];
  angular.module('xmas').controller('GameController', GameController);
})();