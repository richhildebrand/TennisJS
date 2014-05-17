define(['Squire'], function(Squire) {
   describe('Unit Test', function() {
      describe('Get Basic Score Should', function() {
         'use strict';

         var _scoreCalculator = undefined;

         beforeEach(function(done) {
            var testContext = new Squire();

            testContext.require(['ScoreCalculator', 'Player'], function(ScoreCalculator, Player) {
               _scoreCalculator = new ScoreCalculator();
               done();
            });
         });

         it('return 0 when given no points', function() {
            var score = _scoreCalculator.GetBasicScore(0);
            expect(score).to.equal(0);
         });

         it('return 15 when given 1 point', function() {
            var score = _scoreCalculator.GetBasicScore(1);
            expect(score).to.equal(15);
         });

         it('return 30 when given 2 points', function() {
            var score = _scoreCalculator.GetBasicScore(2);
            expect(score).to.equal(30);
         });

         it('return 40 when given 3 points', function() {
            var score = _scoreCalculator.GetBasicScore(3);
            expect(score).to.equal(40);
         });
      });
   });
});