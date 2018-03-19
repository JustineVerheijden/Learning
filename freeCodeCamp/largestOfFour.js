
function largestOfFour(arr) {
    return reducedArray = arr.map(function(a){ return a.reduce(function(previousVal,currentVal){return previousVal<currentVal?currentVal:previousVal;})});
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);