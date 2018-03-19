
function bouncer(arr) {
    var newArray = arr.filter(function(a){return a?a:false;});
    return newArray;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));