define(['ScoreCalculator', 'Player'],
function(ScoreCalculator, Player) {
   'use strict';

   var TennisMatch = function() { };

   TennisMatch.prototype.ScoreCalculator = new ScoreCalculator();

   TennisMatch.prototype.PlayerOne = new Player();
   TennisMatch.prototype.PlayerTwo = new Player();

   TennisMatch.prototype.PlayerOneScores = function() {
      this.ScoreCalculator.GainPoint(this.PlayerOne);

      if (this.PlayerOne.Points == 'Game') {
         this.Winner = this.PlayerOne;
      }
   }

   TennisMatch.prototype.PlayerTwoScores = function() {
      this.ScoreCalculator.GainPoint(this.PlayerTwo);

      if (this.PlayerTwo.Points == 'Game') {
         this.Winner = this.PlayerTwo;
      }
   }

   TennisMatch.prototype.Winner = undefined;

   return TennisMatch;
});