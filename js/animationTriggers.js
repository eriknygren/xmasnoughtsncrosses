(function() {
  'use strict';
  var elements = document.getElementsByClassName('player-info-turn-text');
  function timeout() {
    setTimeout(function () {
      _.each(elements, function(element){
        setFontSize(element);
      });
      timeout();
    }, 500);
  }
  timeout();

  function setFontSize(element) {
    var currentSize = element.style.fontSize;
    element.style.fontSize = currentSize == "2rem" ? "3.8rem" : "2rem";
  };


  // HELL YEAH
  $(document.body).snowfall();
})();