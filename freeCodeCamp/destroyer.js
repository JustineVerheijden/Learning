function destroyer(arr) {
    var newArray = [];
    for (var i=1;i<arguments.length;i++){
        newArray.push(arguments[i]);
    }
    var newArray = arr.filter(function(a){return newArray.indexOf(a)<0?a:false;});
  return newArray;
}
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  