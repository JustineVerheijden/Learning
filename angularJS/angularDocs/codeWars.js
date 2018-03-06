/*function findNb(m) {
    var mResult = 0;
    var n = 0;
    //console.log(m);
    while (mResult <= m){
      n++;
      mResult = mResult+(Math.pow(n,3));
      //console.log(n);
      //console.log(mResult);
      if (mResult >= m){
          break;
      }
    }
    if (mResult == m) {
        return n;
    }
    else {
        return (-1); 
    }  
}

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);*/
/*var countBits = function(n) {
    var binNumber = n.toString(2);
    return((binNumber.match(/1/g) || []).length);
  };

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);*/
/*
function maskify(cc) {
    var secretCC = void(null);
    //console.log(cc.length);
    if (cc.length < 4)
    {
        return cc;
    } else {
        var ccToReplace = cc.substring(0,cc.length -4);
        secretCC = ccToReplace.replace(/[0-9]/g, '#');
        secretCC = secretCC + cc.substring(cc.length-4,cc.length);
        return secretCC;
    }
}


console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');*/
/*
function nbYear(p0, percent, aug, p) {
    var calcPop=p0;
    var years = 0;
    while (calcPop<p){
        years ++;
        calcPop = calcPop + (calcPop*percent/100) + aug;
    }
    return years;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);*/
/*
function GetSum( a,b )
{
   //Good luck!
   var calcNumber = 0;
   if (a>b){
       var c = b;
       b = a;
       a = c;
   }
   for (var x=a; x<=b; x++){
       calcNumber+=x;
   }
   return calcNumber
}

console.log(GetSum(0,-1),-1);
console.log(GetSum(0,1),1);*/
/*function divisors(integer) {
    var divArray=[];
  for (var i=2; i<=integer/2; i++){
    if (integer%i==0){
      divArray.push(i);
    }
  }
  if (divArray.length>0) {
    return divArray.sort(function(a, b){return a-b});;
  }
  else 
  {
    return integer+' is prime';
  }
};

console.log(divisors(24), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");*/
/*function iqTest(numbers){
    numbers = numbers.split(' ');
    var numberEven = true;
    var isItEven = [];
    for (var x=0;x<3;x++){
        if (isItEven.indexOf(numbers[x]%2==0)!=-1){
            numberEven=numbers[x]%2==0;
            break;
        }
        isItEven.push(numbers[x]%2==0);
    }
    for(var i=0;i<numbers.length; i++){
        if (!((numberEven && (numbers[i]%2==0)) || ((!numberEven) && (numbers[i]%2!=0))))
        {
                return i+1;//Want the number in the array, not the index
        }
    }
}

console.log(iqTest("2 4 7 8 10"),3);
console.log(iqTest("1 2 2"), 1);
*/
/*function iqTest(numbers){
    numbers = numbers.split(" ");
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  }
  console.log(iqTest("2 4 7 8 10"),3);
  console.log(iqTest("1 2 2"), 1);*/
  /*function towerBuilder(nFloors) {
    var towerBlock = [];
    var floorString='';
    for (var i=0;i<nFloors;i++){
        var floorXs = ((i+1)*2)-1;
        var padding = ((nFloors*2)-1-floorXs)/2;
        floorString = ' '.repeat(padding)+'*'.repeat(floorXs)+' '.repeat(padding);
        towerBlock.push(floorString);
    }
    return towerBlock;
  }

console.log(JSON.stringify(towerBuilder(1)), JSON.stringify(["*"]));
console.log(JSON.stringify(towerBuilder(2)), JSON.stringify([" * ","***"]));
console.log(JSON.stringify(towerBuilder(3)), JSON.stringify(["  *  "," *** ","*****"]));
*/
/*var moveZeros = function (arr) {
    var countMoves=0;
    while (arr.indexOf(0)!=-1){
        if (arr.indexOf(0)+countMoves==arr.length){
            break;
        }
        arr.splice(arr.indexOf(0),1);
        arr.push(0);
        countMoves++;
    }
    return arr;
  }
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]) );*/
/*var moveZeros = function (arr) {
    var noZeros = arr.filter(function(a){return a!==0;});
    var zeros = arr.filter(function(a){return a===0;});
    return noZeros.concat(zeros);
  }
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]) );*/
/*function diamond(n){
    var diam='';
    var endDiam='';
    var noOfLevels = ((n+1)/2);

    if(n<3||n%2!=1){
        return null;
    }
    for (var i=0;i<noOfLevels;i++){
        var stars = ((i+1)*2)-1;
        var spaces = noOfLevels-(i+1);
        var addToDiams = ' '.repeat(spaces)+'*'.repeat(stars)+'\n';
        diam=diam+ addToDiams;
        if (i<noOfLevels-1){
            endDiam =addToDiams + endDiam;
        }
    }
    diam= diam+endDiam;
    return diam;
  }

  console.log(diamond(3), " *\n***\n *\n")
  console.log(diamond(2), null)
  console.log(diamond(-3), null)
  console.log(diamond(0), null)*/
/*function solution(number){
    var multiples=[];
    var sumOfMultiples=0;
    for (var i=0;i<number;i++){
        if ((i%3==0)||(i%5==0)) {
            multiples.push(i);
        }
    }
    multiples.sort();
    for (var i=1;i<multiples.length;i++){
        if (!(multiples[i-1]==multiples[i])){
            sumOfMultiples+=multiples[i];
        }
    }
    return sumOfMultiples;
}

console.log(solution(10));*/
/*function expandedForm(num) {
    var expandedString='';
    for (var i=0; i<num.toString().length;i++){
        if (!(num.toString().substring(i,i+1)==0)){
            if (expandedString.length!=0){
                expandedString +=' + ';
            }
            expandedString += num.toString().substring(i,i+1)+'0'.repeat(num.toString().length-i-1);
        }
    }
    return expandedString
  }

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');*/
/*const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');*/
/*var uniqueInOrder=function(iterable){
    var originalToCompare = iterable;
    if (!(Array.isArray(iterable))){
        var newArray=[];
        for (var i=0;i<iterable.length;i++){
            newArray.push(iterable[i]);
        }
        iterable = newArray;
    }
    iterable = iterable.map(function(a,b){if(a==originalToCompare[b+1]){
        return '';}
        else{return a;}}).filter(function(a){return a!=='';})
    return iterable;
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD')         , ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1,2,2,3,3])       , [1,2,3]);
*/
/*
var uniqueInOrder = function (iterable)
{
    
    return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD')         , ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1,2,2,3,3])       , [1,2,3]);
*/
/*
function rot13(message){
    function add13(letter){
        var newLetter = letter.charCodeAt(0);
        if ((newLetter > 64 && newLetter < 91) || (newLetter <123 && newLetter > 96)){
            newLetter = newLetter+13;
            if ((letter.charCodeAt()>96 && newLetter>122) || (letter.charCodeAt()<96 && newLetter>90)){
                newLetter = newLetter-26;
            }
        }
        return String.fromCharCode(newLetter);
    }
    return [].map.call(message,(function (a) { return add13(a)})).join('');
  }

  console.log(rot13("Ruby is cool!"));
  console.log(rot13("10+2 is twelve."));    
*//*
function removeNb (n) {
    var sumOfNumbers =0;
    var newArray=[];

    sumOfNumbers= (n*(n+1))/2;//same as 1+2+3+...n

    for (var b=1;b<n;b++){
        //(a*b)==(sumOfNumbers-a-b)
        var a = (sumOfNumbers-b)/(b+1);
        if ((a%1===0)&&(a<n)){
            var innerArray=[]
            innerArray.push(b,a);
            newArray.push(innerArray);
        }
    }
    return newArray;
}   

console.log(removeNb(26), [[15,21], [21,15]]);
console.log(removeNb(10000), []);*/
/*function solution(input, markers){
    var newString='';
    var oldString=input;
    for (var i=0;i<=markers.length;i++){
        while (oldString.indexOf(markers[i])>0){
            var endIndex ='';
            if (oldString.indexOf('\n',oldString.indexOf(markers[i]))>0){
//                console.log('in here');
                endIndex = oldString.substring(oldString.indexOf('\n',oldString.indexOf(markers[i])))
             
  //              console.log(endIndex);
            }
            newString=oldString.substring(0,oldString.indexOf(markers[i])).trim()+endIndex;
            oldString=newString;
        }
    }
    return newString;
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#","!"]));
*/
/*
function solution(input, markers){
    var lines = input.split("\n");
    for (var i = 0; i < lines.length; ++i)
        for (var j = 0; j < markers.length; ++j)
        lines[i] = lines[i].split(markers[j])[0].trim();
        console.log(lines[i]);
        
    return lines.join("\n");
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#","!"]));
*/
/*
var maxSequence = function(arr){
    let greatestSum=0;
    let currSum=0;

    for(let i=0;i<arr.length;i++){
        if (greatestSum<arr[i]+currSum){
            currSum=currSum+arr[i];
            greatestSum=currSum;
        }else if (greatestSum<arr[i]){
            greatestSum=arr[i];
            currSum=arr[i];
        } else{
            currSum = currSum+arr[i]>0?currSum+arr[i]:0;
            if (greatestSum<currSum) {
                greatestSum = currSum;
            }
        }
    }
    return greatestSum;
  }

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4,10,-10,50]), 6);
  console.log(maxSequence([]), 0);
  console.log(maxSequence([-5,-4,-3,-2,-1]), 0);
  
*/
/*
var maxSequence = function(arr){
    var rollingMax = 0;
    var greatestNumber = 0;

    for (let i=0; i<arr.length; i++){
        if (greatestNumber<arr[i]+rollingMax){
            greatestNumber = arr[i]+rollingMax;
            rollingMax = greatestNumber;
        } else if(greatestNumber<arr[i]){
            greatestNumber = arr[i];
            rollingMax = arr[i];
        } else {
            rollingMax = arr[i]+rollingMax<0?0:arr[i]+rollingMax;
            if (greatestNumber<rollingMax){
                greatestNumber=rollingMax;
            }
        }
    }
    return greatestNumber;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4,10,-10,50]), 6);
console.log(maxSequence([]), 0);
console.log(maxSequence([-5,-4,-3,-2,-1]), 0);
*/
/*
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4,10,-10,50]), 6);
console.log(maxSequence([]), 0);
console.log(maxSequence([-5,-4,-3,-2,-1]), 0);
*/
/*
var findMissing = function (list) {  
    const difference = Math.abs(list[1]-list[0])<Math.abs(list[2]-list[1])?Math.abs(list[1]-list[0]):Math.abs(list[2]-list[1]);
    var directionUp = list[0]<list[1]?true:false;
    console.log(difference);
    var copyArray = list;
    var missingArray = [];
    var newArray= list.map(function(a, i) { if (Math.abs(copyArray[i+1]-a)!==difference){missingArray.push(directionUp?a+difference:a-difference)}});
    return missingArray [0] ;
  }

  console.log(findMissing([1, 3, 4]), 2);
  console.log(findMissing([1, 3, 5,9,11]), 7);
  console.log(findMissing([-1,-3, -5,-9,-11]), -7);
console.log(findMissing([-12,0,6]), -6);
*/
/*
function cakes(recipe, available) {
    let numberOfCakes;
    for (x in recipe) {
        if ((!numberOfCakes)||available[x]/recipe[x]<numberOfCakes) {
            numberOfCakes=Math.floor(available[x]/recipe[x]);
        }
        if (!available[x]){
            numberOfCakes = 0;
        }
    }
    return numberOfCakes;
  }
recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available), 0);
*/
/*
function validParentheses(parens){
    if ((parens[0]==")"||parens[parens.length-1]=="(") || (parens.match(/\(/g ).length !== (parens.match(/\)/g ).length ))){
        return false;
    }
    return true;
  }

  console.log(validParentheses( "()" ), true);
  console.log(validParentheses( "()" ), true);
  console.log(validParentheses( "(" ), false);
  console.log(validParentheses( "())(((()))" ), false);
console.log(validParentheses( "())" ), false);
*/
/*
function calc(expr) {
    var charsOfOperators=[8722,47,43,42,45,120,88,215]
    var polishArray = expr.split(" ");
    if (polishArray.length<=1){
        return 0;
    }
    if ((polishArray[polishArray.length-1].match(/[0-9]/g))!==null){
        return +polishArray[polishArray.length-1];
    }
    for (var i=2;i<polishArray.length;i++){
        if (charsOfOperators.indexOf(polishArray[i].toString().charCodeAt())!==-1){
            if (polishArray[i].charCodeAt() ==8722){
                var newNumber = (polishArray[i-2]-polishArray[i-1]);
            } else if (polishArray[i].charCodeAt() ==120){
                var newNumber = (polishArray[i-2]*polishArray[i-1]);
            } else
            {
                var newNumber = eval(polishArray[i-2]+polishArray[i]+polishArray[i-1]);
            }
            polishArray[i-2]=newNumber;
            polishArray.splice(i-1,2);
            i=0
        }
    }
    return +polishArray[0];
  }

console.log(calc(""), 0, "Should parse numbers");
console.log(calc("1 2 3"), 3, "Should parse numbers");
console.log(calc("1 2 3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");
console.log(calc("15 7 1 1 + − / 3 x 2 1 1 + + −"), 5, "Should support division");
*//*
function calc(expr)
{
  var stack = [];
  expr.split(" ").forEach(function(e)
  {
    if (e === "+") stack.push(stack.pop() + stack.pop());
    else if (e === "-") stack.push(-stack.pop() + stack.pop());
    else if (e === "*") stack.push(stack.pop() * stack.pop());
    else if (e === "/") stack.push(1 / stack.pop() * stack.pop());
    else stack.push(parseFloat(e));

  });
  return stack[stack.length - 1] || 0;
}
console.log(calc(""), 0, "Should parse numbers");
console.log(calc("1 2 3"), 3, "Should parse numbers");
console.log(calc("1 2 3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");
console.log(calc("15 7 1 1 + − / 3 x 2 1 1 + + −"), 5, "Should support division");
*/




/*function offerExpires(currentDate) {
    var expiryDate, month, day, daysOfWeek, monthsOfYear, expiryMsg;

    daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    monthsOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    expiryDate = new Date(currentDate.getTime() + vm.daysValid*1000*60*60*24);
    day = daysOfWeek[expiryDate.getDay()];
    month = monthsOfYear[expiryDate.getMonth()];
    expiryMsg="OFFER EXPIRES NEXT "+day+"\r\n ("+expiryDate.getDate()+" "+month.toUpperCase()+" "+expiryDate.getFullYear()+")";
    return(expiryMsg);
}
*/