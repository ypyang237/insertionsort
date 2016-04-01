var chai = require('chai'); // pulls in the 'chai' package installed through NPM
var expect = chai.expect;   // this is how we use chai's `expect` assertion
chai.should();              // this is how we use chai's `should` assertion

// please be sure to update the argument for `require` to point to the right file
// the example here the `insertionSort.js` is one directory "up" from test/
var insertionSort = require('../public/app');


describe('insertionSort function', function() {

  it('should be a function', function(){
    expect(insertionSort).to.be.a('function');
  });

  it('should swap two numbers if the previous is larger than the current', function() {
    var myArray = [5, 3, 6];
    // insertionSort(myArray);
    expect(insertionSort(myArray)).to.deep.equal([3, 5, 6]);
  });
    var nextArray = [1, 0, 75, 34, 2, 5, 7, 25, 56, 78, 12];
    expect(insertionSort(nextArray)).to.deep.equal([ 0, 1, 2, 5, 7, 12, 25, 34, 56, 75, 78 ]);
});



describe('insertionSort function', function() {
  it('should sort numbers from low to high', function() {

    var messyArr = [2,5,1,9,4];

    expect(insertionSort(messyArr)).to.deep.equal([1,2,4,5,9]);

  });
});