define(['Squire'], function(Squire) {
   describe('Unit Test', function() {
      describe('Get Advanced Score Should', function() {
         'use strict';

         var _scoreCalculator = undefined;

         beforeEach(function(done) {
            var testContext = new Squire();

            testContext.require(['ScoreCalculator'], function(ScoreCalculator) {
               _scoreCalculator = new ScoreCalculator();
               done();
            });
         });

         it('return deuce when both values are even', function() {
            var advancedScore = _scoreCalculator.GetAdvancedScore(1, 1);
            expect(advancedScore).to.equal('Deuce');
         });
      });
   });
});