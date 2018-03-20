
function getIndexToIns(arr, num) {
    var idx=-500;
    arr.sort(function(a,b){return (a-b);});
    arr.some(function(a,b){
        if (a>=num){
            idx=b;
            return true
        }
        return false;})
    return (idx<0?arr.length:idx);
  }
  
  getIndexToIns([10, 20, 30, 40, 50], 1);