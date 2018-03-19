
function palindrome(str) {
  // Good luck!
  var newString = str.replace(/[!,@#\$%\^\&*\)\(+=._-\s]+/g,'');
  for (var i=0;i<Math.floor(newString.length/2);i++){
      if (newString[i].toLowerCase()!==newString[newString.length-i-1].toLowerCase()){
          return false;
      }
  }
  return true;
}



console.log(palindrome("A man, a plan, a canal. Panama"));