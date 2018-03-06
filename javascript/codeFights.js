/*function firstDuplicate(a) {
  var duplicateVal = -1;
  var alreadyUsed = [];
  for (i=0; i<a.length; i++){
    if (alreadyUsed.indexOf(a[i])>=0)
    {
      duplicateVal = a[i];
      break;
    }
    alreadyUsed.push(a[i]);
  }
  return duplicateVal;
}


console.log(firstDuplicate([2, 2]));
*/

/*function checkPalindrome(inputString) {
  for (var i = 0; i<=Math.floor(inputString.length/2); i++){
    if (inputString.substring(i,i+1) != inputString.substring(inputString.length-i-1,inputString.length-i)){
      return false;
    }
  }
return true;
}

console.log(checkPalindrome("abcba"));*/
/*
function duplicate(arrayToDuplicate){

  if (true){
    var a = 3;
  }
  return a;
  
}

console.log(duplicate([1,2,3,4,5]))*/
/*function adjacentElementsProduct(inputArray) {
  var biggestOutput;
  for (var i=0;i<inputArray.length;i++){
    if (!biggestOutput ||(inputArray[i] * inputArray[i+1] > biggestOutput)){
      biggestOutput = inputArray[i] * inputArray[i+1];
    }
  }
  if (!biggestOutput){
    biggestOutput = 0;
  }
  return biggestOutput;

}
 console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]));*/
/*
function shapeArea(n) {
  
  return ((Math.pow(n,2))+(Math.pow(n-1,2))); 
}

console.log(shapeArea(1));*/
/*function makeArrayConsecutive2(statues) {
  var sortedArray;
  var numberNeeded = 0;
  
  statues.sort(function(a,b){return a-b});
  sortedArray = statues;
  
  for (var i=0; i<(sortedArray.length-1);i++){
    numberNeeded += sortedArray[i+1]-sortedArray[i]-1;
  }
  return numberNeeded;
}

console.log(makeArrayConsecutive2([4, 2, 7, 18]))*/
 var a = 'foo';
 var b = ['f','o','o'];

 var c = Array.prototype.join.call(a,"-");
 var d = Array.prototype.map.call(a,function(v){
   return v.toUpperCase() + ".";
 }).join("")x;

 console.log(c);
 console.log(d);