function negativeInParens(num) {
  if (num < 0) return '('+num+')'; else return num;
}

neg = negativeInParens;

function getRanges(array) {
  var ranges = [], rstart, rend;
  for (var i = 0; i < array.length; i++) {
    rstart = array[i];
    rend = rstart;
    while (array[i + 1] - array[i] == 1) {
      rend = array[i + 1]; // increment the index if the numbers sequential
      i++;
    }

    ranges.push(rstart == rend ? neg(rstart)+'' : neg(rstart) + '-' + neg(rend));
  }
  return ranges;
}

module.exports = getRanges;
