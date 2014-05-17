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
         var score = _tennisMatch.GetScore();

         expect(score).to.equal('0 to 0');
      });

      it('go to 15 to 0 when player one scores the first point', function() {
         _tennisMatch.PlayerOne.Points += 1;

         var score = _tennisMatch.GetScore();

         expect(score).to.equal('15 to 0');
      });

      it('go to 30 to 0 when player one scores the first two points', function() {
         _tennisMatch.PlayerOne.Points += 1;
         _tennisMatch.PlayerOne.Points += 1;

         var score = _tennisMatch.GetScore();

         expect(score).to.equal('30 to 0');
      });

      it('go to 30 to 15 when player one scores two points and player two scores one point', function() {
         _tennisMatch.PlayerOne.Points += 1;
         _tennisMatch.PlayerTwo.Points += 1;
         _tennisMatch.PlayerOne.Points += 1;

         var score = _tennisMatch.GetScore();
         
         expect(score).to.equal('30 to 15');
      });

      it('go to 30 to 30 when both players have scored two points', function() {
         _tennisMatch.PlayerOne.Points = 2;
         _tennisMatch.PlayerTwo.Points = 2;

         var score = _tennisMatch.GetScore();
         
         expect(score).to.equal('30 to 30');
      });

      it('be deuce when both players have scored three points', function() {
         _tennisMatch.PlayerOne.Points = 3;
         _tennisMatch.PlayerTwo.Points = 3;

         var score = _tennisMatch.GetScore();
         
         expect(score).to.equal('Deuce');
      });

      it('be advantage player one when it is 4 to 3', function() {
         _tennisMatch.PlayerOne.Points = 4;
         _tennisMatch.PlayerTwo.Points = 3;

         var score = _tennisMatch.GetScore();
         
         expect(score).to.equal('Advantage Player One');
      });

      it('be advantage player one when it is 6 to 7', function() {
         _tennisMatch.PlayerOne.Points = 6;
         _tennisMatch.PlayerTwo.Points = 7;

         var score = _tennisMatch.GetScore();
         
         expect(score).to.equal('Advantage Player Two');
      });

      it('name player one the winner', function() {
         _tennisMatch.PlayerOne.Points = 4;
         _tennisMatch.PlayerTwo.Points = 2;

         var score = _tennisMatch.GetScore();
         
         expect(score).to.equal('Player One Wins');
      });

      it('name player two the winner', function() {
         _tennisMatch.PlayerOne.Points = 8;
         _tennisMatch.PlayerTwo.Points = 10;

         var score = _tennisMatch.GetScore();
         
         expect(score).to.equal('Player Two Wins');
      });
   });
});