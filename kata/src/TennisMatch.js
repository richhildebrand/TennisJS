define(['TennisMatch', 'Player'],
function(TennisMatch, Player) {
   'use strict';

   var TennisMatch = function()  {  };

   TennisMatch.prototype.PlayerOne = new Player();

   TennisMatch.prototype.PlayerTwo = new Player();

   return TennisMatch;
});