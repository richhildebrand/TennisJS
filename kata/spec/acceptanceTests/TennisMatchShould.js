define(['Squire'], function(Squire) {
   describe('Tennis Match Should', function() {
      'use strict';

      var _tennisMatch = undefined;

      beforeEach(function(done) {
         var testContext = new Squire();

         testContext.require(['TennisMatch'], function(TennisMatch) {
            _tennisMatch = new TennisMatch();
            done();
         });
      });

      it('start with a score of 0 to 0', function() {
         expect(_tennisMatch.PlayerOne.Points).to.equal(0);
         expect(_tennisMatch.PlayerTwo.Points).to.equal(0);
      });

      it('go to 15 to 0 when player one scores the first point', function() {
         _tennisMatch.PlayerOneScores();

         expect(_tennisMatch.PlayerOne.Points).to.equal(15);
         expect(_tennisMatch.PlayerTwo.Points).to.equal(0);
      });

      it('go to 30 to 0 when player one scores the first two points', function() {
         _tennisMatch.PlayerOneScores();
         _tennisMatch.PlayerOneScores();

         expect(_tennisMatch.PlayerOne.Points).to.equal(30);
         expect(_tennisMatch.PlayerTwo.Points).to.equal(0);
      });

      it('go to 30 to 15 when player one scores two points and player two scores one point', function() {
         _tennisMatch.PlayerOneScores();
         _tennisMatch.PlayerTwoScores();
         _tennisMatch.PlayerOneScores();

         expect(_tennisMatch.PlayerOne.Points).to.equal(30);
         expect(_tennisMatch.PlayerTwo.Points).to.equal(15);
      });

      it('end if a player scores the first four points', function() {
         _tennisMatch.PlayerOneScores();
         _tennisMatch.PlayerOneScores();
         _tennisMatch.PlayerOneScores();
         _tennisMatch.PlayerOneScores();

         expect(_tennisMatch.Winner).to.equal(_tennisMatch.PlayerOne);
      });

      it('end if a player scores the first four points', function() {
         _tennisMatch.PlayerTwoScores();
         _tennisMatch.PlayerTwoScores();
         _tennisMatch.PlayerTwoScores();
         _tennisMatch.PlayerTwoScores();

         expect(_tennisMatch.Winner).to.equal(_tennisMatch.PlayerTwo);
      });
   });
});