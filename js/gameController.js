(function() {
  'use strict';

  function GameController() {
    console.log('loaded m8');
  };

  GameController.$inject = [];
  angular.module('xmas').controller('GameController', GameController);
})();