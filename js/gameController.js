(function() {
  'use strict';

  function GameController() {

    this.game = new NC.Game(onGameOver);

    function onGameOver() {
      $('#myModal').modal()
      playApplause();
    };

    function playApplause() {
      var sample = document.getElementById('applause');
      sample.load();
      sample.play();
    }
  };

  GameController.$inject = [];
  angular.module('xmas').controller('GameController', GameController);
})();