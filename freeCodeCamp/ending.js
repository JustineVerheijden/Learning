
function confirmEnding(str, target) {
    return str.substring(str.length-target.length)===target;
  }
  
 console.log(confirmEnding("He has to give me a new name", "name"));
  