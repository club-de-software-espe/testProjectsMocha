const {
  length,
  evenList
} = require ("../../../functions/list/list");

const  assert = require('assert');


describe('List', function() {

  describe('#length(array)', function() {

  it('should return the length of array [1,2,3,4] = 4', function() {
    assert.equal(length([1,2,3,4]),4);
  });

  it('should return the length of array [] = 0', function() {
      assert.equal(length([]), 0);
    });

});


describe('#evenList()', function() {
  
  it('should return evenList [2,4,6]', function() {
    array = [1,2,3,4,5,6]
    assert.deepEqual(evenList(array),[2,4,6]);
  });

  it('should return evenList []', function() {
      assert.deepEqual(evenList([1,3,5]),[]);
    });

});

});