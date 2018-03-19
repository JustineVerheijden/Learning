
var count = 0;

function cc(card) {
  // Only change code below this line
  var lower = [2,3,4,5,6];
  var upper = [10,'J','Q','K','A'];
  //console.log(lower.indexOf(card));
  if (lower.indexOf(card)>=0){
    count ++;
  } else if (upper.indexOf(card)>=0){
    count --;
  }
  if (count<1){
    return count+" Hold";
  }
  
  return count+" Bet";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
//cc(2); cc(3); cc(7); cc('K'); cc('A');
cc(10);cc('J');cc('Q');cc('K');cc('A');