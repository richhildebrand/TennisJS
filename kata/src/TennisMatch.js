define(['ScoreCalculator', 'Player'],
function(ScoreCalculator, Player) {
   'use strict';

   var TennisMatch = function() { };

   TennisMatch.prototype.ScoreCalculator = new ScoreCalculator();

   TennisMatch.prototype.PlayerOne = new Player();
   TennisMatch.prototype.PlayerTwo = new Player();

   TennisMatch.prototype.PlayerOneScores = function() {
      this.ScorePoint(this.PlayerOne);
   }

   TennisMatch.prototype.PlayerTwoScores = function() {
      this.ScorePoint(this.PlayerTwo);
   }

   TennisMatch.prototype.ScorePoint = function(player) {
      this.ScoreCalculator.GainPoint(player);

      if (player.Points == 'Game') {
         this.Winner = player;
      }
   }

   TennisMatch.prototype.Winner = undefined;

   return TennisMatch;
});