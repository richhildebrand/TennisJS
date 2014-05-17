define([],
function () {

   ScoreCalculator = function() { }

   ScoreCalculator.prototype._playerOnePoints = undefined;
   ScoreCalculator.prototype._playerTwoPoints = undefined

   ScoreCalculator.prototype.PrintScore = function(playerOnePoints, playerTwoPoints) {
      if (this.IsEndOfGame()) {
         return;
      };

      if (this.IsAdvancedScore(playerOnePoints, playerTwoPoints)) {
         return this.GetAdvancedScore(playerOnePoints, playerTwoPoints);
      };

      var playerOnePrintablePoints = this.GetBasicScore(playerOnePoints);
      var playerTwoPrintablePoints = this.GetBasicScore(playerTwoPoints);
      return playerOnePrintablePoints + ' to ' + playerTwoPrintablePoints;
   };

   ScoreCalculator.prototype.IsEndOfGame = function(playerOnePoints, playerTwoPoints) {
      return this.EitherPlayerHasEnoughPointsToWin(playerOnePoints, playerTwoPoints)
          && this.EitherPlayerIsWinningByTwo(playerOnePoints, playerTwoPoints);
   }

   ScoreCalculator.prototype.EitherPlayerHasEnoughPointsToWin = function(playerOnePoints, playerTwoPoints) {
      var minPointsForVictory = 4;
      return playerOnePoints >= minPointsForVictory
          || playerTwoPoints >= minPointsForVictory;
   }

   ScoreCalculator.prototype.EitherPlayerIsWinningByTwo = function(playerOnePoints, playerTwoPoints) {
      return playerOnePoints >= playerTwoPoints + 2
         || playerTwoPoints >= playerOnePoints + 2;
   }

   ScoreCalculator.prototype.IsAdvancedScore = function(playerOnePoints, playerTwoPoints) {
      var deuceScoring = 3;
      return playerOnePoints >= deuceScoring 
          && playerTwoPoints >= deuceScoring;
   };

   ScoreCalculator.prototype.GetAdvancedScore = function(playerOnePoints, playerTwoPoints) {
      if (playerOnePoints === playerTwoPoints) {
         return 'Deuce';
      } else if (playerOnePoints > playerTwoPoints) {
         return 'Advantage Player One';
      } else if (playerTwoPoints > playerOnePoints) {
         return 'Advantage Player Two';
      }
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