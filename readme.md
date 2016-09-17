Extracts contiguous ranges from a pre-sorted array of numbers.

From this stackoverflow.com question: 
"How to convert sequence of numbers in an array to range of numbers"

http://stackoverflow.com/questions/2270910/how-to-convert-sequence-of-numbers-in-an-array-to-range-of-numbers

This is CMS's answer, except negative numbers are in parenthesis.
**NOTE: you may need to sort the array beforehand.**  One way is `npm i --save sort-numbers` then 
`require('sort-numbers')(array);`

```javascript
var getRanges = require('get-ranges');
getRanges([2,3,4,5,10,18,19,20]);
// returns ["2-5", "10", "18-20"]
```
