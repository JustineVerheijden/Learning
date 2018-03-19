
function findLongestWord(str) {
    var strArray = str.split(' ');
    var newArray = strArray.map(function(val){return val.length;});
    newArray.sort(function(a,b){return b-a;});
    return newArray[0];
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));