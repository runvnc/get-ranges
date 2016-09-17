var assert = require('assert');
var getRanges = require('./index.js');

console.log('Running tests.  No output == success, otherwise prints error message.');

assert.deepEqual(getRanges([2,3,4,5,10,18,19,20]),['2-5','10','18-20']);
assert.deepEqual(getRanges([1,2,3,5,7,9,10,11,12,14 ]),["1-3", "5", "7", "9-12", "14"]);
var needSort = [2,1,4,3,5,6,7,8,9,10];
assert.deepEqual(getRanges(require('sort-numbers')(needSort)), ["1-10"]);
assert.deepEqual(needSort, [1,2,3,4,5,6,7,8,9,10]);

assert.deepEqual(getRanges([-3,-2,-1,0,1,3,4,5]),['(-3)-1','3-5']);

console.log('Done.');

