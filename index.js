function negativeInParens(num) {
  if (num < 0) return '('+num+')'; else return num;
}

neg = negativeInParens;

function getRanges(array, opts) {
  var ranges = [], rstart, rend;
  for (var i = 0; i < array.length; i++) {
    rstart = array[i];
    rend = rstart;
    while (array[i + 1] - array[i] == 1) {
      rend = array[i + 1]; // increment the index if the numbers sequential
      i++;
    }
    if (opts && opts.array)
      ranges.push(rstart == rend ? rstart : [rstart, rend]);
    else
      ranges.push(rstart == rend ? neg(rstart)+'' : neg(rstart) + '-' + neg(rend));
  }
  return ranges;
}

module.exports = getRanges;
