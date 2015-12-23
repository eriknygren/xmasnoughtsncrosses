# xmasnoughtsncrosses

[Play here!](http://eriknygren.github.io/xmasnoughtsncrosses/)

A noughts and crosses game, with an xmassy vibe to it. Preferrably to be enjoyed on devices  990+ pixel devices, there are some mobile support, but it aint great.

## Softwary things

The game engine is glued together with the view using angular.js, reasoning behind the choice was it's simplicity, as it is a good technology choice for simple renders and getting going rapidly.


In this app, angularjs is not doing much, feel free to have a look in the `js/gameController.js` file to see what it's up to. Pretty much showing a modal on game over, showing a popup and exposing the game enginge to the HTML.


The good stuff is in `js/game.js`. Which has the actual game engine. It's written in ecmascript 5 OO syntax, seasoned with lodash to make it easier to do some functional mapping of arrays to help with things such as checking for winners.


## Shoutouts

Thanks to Yannick Lemieux for the sound FX

Thanks to this youtube video and uploader for the sweet background grooves https://www.youtube.com/watch?v=Hgnu8Q3sSkM

## Hope you enjoy the game!