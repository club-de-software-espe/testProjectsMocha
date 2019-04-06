const {
    calculateIVA
} = require ("../../functions2/function");

const  assert = require('assert');

describe('funcion', function() {

    describe('#calculateIVA()', function() {
  
    it('should return IVA of 145 = 17.4', function() {
      assert.equal(calculateIVA(145),17.4);
    });
  
    it('should return IVA of 321 = 38.52', function() {
        assert.equal(calculateIVA(321), 38.52);
      });
  
      
  });
});
