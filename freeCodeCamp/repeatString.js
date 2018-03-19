
function repeatStringNumTimes(str, num) {
    var newString = str;
    for (var i=1;i<num;i++){
        newString += str;
    }
    // repeat after me
    console.log(newString);
    return newString;
  }
  
  repeatStringNumTimes("abc", 3);