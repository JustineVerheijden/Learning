function rot13(str) { // LBH QVQ VG!
    var strArray=str.split('');
    var newArray = strArray.map(function(a){
        if (a.match(/[A-Z]/g)){
            if (a.charCodeAt()<="M".charCodeAt()){
                return String.fromCharCode(a.charCodeAt()+13);
            }
            return String.fromCharCode(a.charCodeAt()-13);
        }
        return a;
    });
    var stringAgain = newArray.join('');
    console.log(stringAgain);
    return stringAgain;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");