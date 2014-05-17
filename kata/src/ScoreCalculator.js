define([],
function () {

   ScoreCalculator = function() { }

   ScoreCalculator.prototype.GainPoint = function(player) {
      if (player.Points === 0) {
         player.Points = 15;
      } else if (player.Points === 15) {
         player.Points = 30;
      } else if (player.Points === 30) {
         player.Points = 40;
      } else if (player.Points === 40) {
         player.Points = 'Game';
      }
   }

   return ScoreCalculator;
});