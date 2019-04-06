const {
    addition,
    addition2
} = require ("../../../../functions/arithmetic/addition/addition");

const  assert = require('assert');


describe('Addition', function() {
  
    describe('#addition()', function() {

    it('should return the addition 1 + 2 = 3', function() {
      assert.equal(addition(1,2), 3);
    });

    it('should return the addition 3 + 0 = 3', function() {
        assert.equal(addition(3,0), 3);
      });

  });

  describe('#addition2()', function() {
    
    it('should return the addition 3 + 2 = 5', function() {
      assert.equal(addition2(3), 5);
    });

    it('should return the addition 0 + 2 = 2', function() {
        assert.equal(addition2(0), 2);
      });

  });

});