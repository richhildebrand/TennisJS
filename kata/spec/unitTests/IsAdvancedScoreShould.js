define(['Squire'], function(Squire) {
   describe('Unit Test', function() {
      describe('Is Advanced Score Should', function() {
         'use strict';

         var _scoreCalculator = undefined;

         beforeEach(function(done) {
            var testContext = new Squire();

            testContext.require(['ScoreCalculator', 'Player'], function(ScoreCalculator, Player) {
               _scoreCalculator = new ScoreCalculator();
               done();
            });
         });

         it('return false when either score is under three', function() {
            var isAdvancedScore = _scoreCalculator.IsAdvancedScore(2, 7);
            expect(isAdvancedScore).to.be.false;
         });

         it('return false when both scores are under three', function() {
            var isAdvancedScore = _scoreCalculator.IsAdvancedScore(2, 2);
            expect(isAdvancedScore).to.be.false;
         });

         it('return true when both scores are equal to three', function() {
            var isAdvancedScore = _scoreCalculator.IsAdvancedScore(3, 3);
            expect(isAdvancedScore).to.be.true;
         });

         it('return true when both scores are above three', function() {
            var isAdvancedScore = _scoreCalculator.IsAdvancedScore(7, 7);
            expect(isAdvancedScore).to.be.true;
         });
      });
   });
});