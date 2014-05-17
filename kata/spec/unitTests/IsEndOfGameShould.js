define(['Squire'], function(Squire) {
   describe('Unit Test', function() {
      describe('Is End Of Game Should', function() {
         'use strict';

         var _scoreCalculator = undefined;

         beforeEach(function(done) {
            var testContext = new Squire();

            testContext.require(['ScoreCalculator', 'Player'], function(ScoreCalculator, Player) {
               _scoreCalculator = new ScoreCalculator();
               done();
            });
         });

         it('return false when both scores are under four', function() {
            var isEndOfGame = _scoreCalculator.IsEndOfGame(0, 3);
            expect(isEndOfGame).to.be.false;
         });

         it('return true when player one has 2 points and player two has 4 points', function() {
            var isEndOfGame = _scoreCalculator.IsEndOfGame(2, 4);
            expect(isEndOfGame).to.be.true;
         });

         it('return false when player one has 4 points and player two has 3 points', function() {
            var isEndOfGame = _scoreCalculator.IsEndOfGame(4, 3);
            expect(isEndOfGame).to.be.false;
         });
      });
   });
});