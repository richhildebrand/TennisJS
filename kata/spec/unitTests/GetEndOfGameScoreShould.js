define(['Squire'], function(Squire) {
   describe('Unit Test', function() {
      describe('Get End Of Game Score Should', function() {
         'use strict';

         var _scoreCalculator = undefined;

         beforeEach(function(done) {
            var testContext = new Squire();

            testContext.require(['ScoreCalculator'], function(ScoreCalculator) {
               _scoreCalculator = new ScoreCalculator();
               done();
            });
         });

         it('return player one wins when player one is winning', function() {
            var score = _scoreCalculator.GetEndOfGameScore(3, 2);
            expect(score).to.equal('Player One Wins');
         });

         it('return player two wins when player two is winning', function() {
            var score = _scoreCalculator.GetEndOfGameScore(5, 8);
            expect(score).to.equal('Player Two Wins');
         });
      });
   });
});