const {
    multiplication,
    multiplication2
} = require ("../../../../functions/arithmetic/multiplication/multiplication");

const  assert = require('assert');


describe('Multiplication', function() {
  
    describe('#multiplication()', function() {

    it('should return the multiplication 1 * 2 = 3', function() {
      assert.equal(multiplication(1,2), 2);
    });

    it('should return the multiplication 3 * 0 = 0', function() {
        assert.equal(multiplication(3,0), 0);
      });

  });

  describe('#multiplication2()', function() {
    
    it('should return the multiplication2 3  = 5', function() {
      assert.equal(multiplication2(3), 6);
    });

    it('should return the multiplication2 1 = 2', function() {
        assert.equal(multiplication2(1), 2);
      });

  });

});