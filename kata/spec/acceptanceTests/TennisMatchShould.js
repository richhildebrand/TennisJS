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

      it('Should start with a score of 0 to 0', function() {
         expect(_tennisMatch.PlayerOne.Points).to.equal(0);
         expect(_tennisMatch.PlayerTwo.Points).to.equal(0);
      });
   });
});