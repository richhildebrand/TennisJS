define(['ScoreCalculator', 'Player'],
function(ScoreCalculator, Player) {
   'use strict';

   var TennisMatch = function() { };

   TennisMatch.prototype.ScoreCalculator = new ScoreCalculator();
   TennisMatch.prototype.PlayerOne = new Player();
   TennisMatch.prototype.PlayerTwo = new Player();

   TennisMatch.prototype.GetScore = function() {
      return this.ScoreCalculator.PrintScore(this.PlayerOne.Points, this.PlayerTwo.Points); 
   }



   return TennisMatch;
});