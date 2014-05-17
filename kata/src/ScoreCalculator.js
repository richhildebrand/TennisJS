define([],
function () {

   ScoreCalculator = function() { }

   ScoreCalculator.prototype._playerOnePoints = undefined;
   ScoreCalculator.prototype._playerTwoPoints = undefined

   ScoreCalculator.prototype.PrintScore = function(playerOnePoints, playerTwoPoints) {
      if (this.IsAdvancedScore(playerOnePoints, playerTwoPoints)) {
         return this.GetAdvancedScore();
      }

      var playerOnePrintablePoints = this.GetBasicScore(playerOnePoints);
      var playerTwoPrintablePoints = this.GetBasicScore(playerTwoPoints);
      return playerOnePrintablePoints + ' to ' + playerTwoPrintablePoints;
   };

   ScoreCalculator.prototype.IsAdvancedScore = function(playerOnePoints, playerTwoPoints) {
      var deuceScoring = 3;
      return playerOnePoints >= deuceScoring 
          && playerTwoPoints >= deuceScoring;
   };

   ScoreCalculator.prototype.GetAdvancedScore = function(playerOnePoints) {
      return 'Deuce';
   };

   ScoreCalculator.prototype.GetBasicScore = function(score) {
      switch (score) {
         case 0: return 0;
         case 1: return 15;
         case 2: return 30;
         case 3: return 40;
      }
   }

   return ScoreCalculator;
});