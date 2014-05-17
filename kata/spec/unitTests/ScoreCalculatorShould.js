define(['Squire'], function(Squire) {
   describe('Unit Test', function() {
      describe('Score Calculator Should', function() {
         'use strict';

         var _scoreCalculator = undefined;
         var _playerToGainPoints = undefined;

         beforeEach(function(done) {
            var testContext = new Squire();

            testContext.require(['ScoreCalculator', 'Player'], function(ScoreCalculator, Player) {
               _scoreCalculator = new ScoreCalculator();
               _playerToGainPoints = new Player();
               done();
            });
         });

         it('go from 0 to 15', function() {
            _playerToGainPoints.Points = 0;
            _scoreCalculator.GainPoint(_playerToGainPoints);

            expect(_playerToGainPoints.Points).to.equal(15);
         });

         it('go from 15 to 30', function() {
            _playerToGainPoints.Points = 15;
            _scoreCalculator.GainPoint(_playerToGainPoints);

            expect(_playerToGainPoints.Points).to.equal(30);
         });

         it('go from 30 to 40', function() {
            _playerToGainPoints.Points = 30;
            _scoreCalculator.GainPoint(_playerToGainPoints);

            expect(_playerToGainPoints.Points).to.equal(40);
         });

         it('go from 40 to Game', function() {
            _playerToGainPoints.Points = 40;
            _scoreCalculator.GainPoint(_playerToGainPoints);

            expect(_playerToGainPoints.Points).to.equal('Game');
         });
      });
   });
});