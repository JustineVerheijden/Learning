/*function solution(number){
    var value = 0;
    var romanStr = "";
    var  roman = [{M:1000},{CM:900}, {D:500},{CD:400},{C:100},{XC:90},{L:50},{XL:40},{X:10},{IX:9},{V:5},{IV:4},{I:1} ];
    for(var i = 0; i < roman.length; i++){
        console.log(roman[i]);
      for(var key in roman[i]){
          console.log(key+' key');
        while(value + roman[i][key] <= number){
            console.log(value+' value');
           value += roman[i][key];
           romanStr += key;
           console.log(romanStr+' romanStr')
        }
      }
     }
    return romanStr;
   }
   
   
   
   
console.log(solution(1), '1 should == "I"')*/
/*console.log(solution(4), '4 should == "IV"')
console.log(solution(1000), '1000 should == "M"')
console.log(solution(1990), '1990 should == "MCMXC"')
console.log(solution(2007), '2007 should == "MMVII"')
*/
/*

  console.log(calc(""), 0, "Should work with empty string");
console.log(calc("1 2 3"), 3, "Should parse numbers");
console.log(calc("1 2 3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");
console.log(calc("10000 123 +"), 10123, "Should work with numbers longer than 1 digit");
console.log(calc("5 1 2 + 4 * + 3 -"), 14, "Should work with complex expressions");
console.log(calc("15 7 1 1 + - / 3 * 2 1 1 + + -",5,'good one'));
/*
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

  console.log(calc(""), 0, "Should work with empty string");
console.log(calc("1 2 3"), 3, "Should parse numbers");
console.log(calc("1 2 3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");
console.log(calc("10000 123 +"), 10123, "Should work with numbers longer than 1 digit");
console.log(calc("5 1 2 + 4 * + 3 -"), 14, "Should work with complex expressions");




  function validParentheses(parens){
    if (parens[0]==")"||parens[parens.length-1]=="("){
        return false;
    }
    if (parens.match(/\(/g ).length !== (parens.match(/\)/g ).length )){
        return false;
    }
    return true;
  }

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

  var findMissing = function (list) {  
    const difference = Math.abs(list[1]-list[0])<Math.abs(list[2]-list[1])?Math.abs(list[1]-list[0]):Math.abs(list[2]-list[1]);
    var directionUp = list[0]<list[1]?true:false;
    console.log(difference);
    var copyArray = list;
    var missingArray = [];
    var newArray= list.map(function(a, i) { if (Math.abs(copyArray[i+1]-a)!==difference){missingArray.push(directionUp?a+difference:a-difference)}});
    return missingArray [0] ;
  }

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

function solution(input, markers){
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

function removeNb (n) {
    var sumOfNumbers =0;
    var newArray=[];

    sumOfNumbers= (n*(n+1))/2;//same as 1+2+3+...n

    for (var b=1;b<n;b++){
        //(a*b)==(sumOfNumbers-a-b)
        var a = (sumOfNumbers-b)/(b+1);
        if ((a.toString().indexOf('.')<0)&&(a<n)){
            var innerArray=[]
            innerArray.push(b,a);
            newArray.push(innerArray);
        }
    }

    return newArray;
}   

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

  var uniqueInOrder=function(iterable){
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

  function expandedForm(num) {
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

  function solution(number){
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

function diamond(n){
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

  var moveZeros = function (arr) {
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

  function towerBuilder(nFloors) {
    var towerBlock = [];
    var floorString='';
    for (var i=0;i<nFloors;i++){
        for (var x=0;x<=(nFloors*2)-2; x++) {
            var floorXs = ((i+1)*2)-1;
            var padding = ((nFloors*2)-1-floorXs)/2;
            if (floorString.length< padding)
                floorString = floorString+' ';
            else if (floorString.length < padding+floorXs){
                floorString = floorString+'*';
            }
            else {
                floorString = floorString+' ';
            }
        }
        //console.log(floorString);
        towerBlock.push(floorString);
        floorString='';
    }
    return towerBlock;
  }

  function iqTest(numbers){
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

function divisors(integer) {
    var divArray=[];
  for (var i=2; i<integer; i++){
    if (integer%i==0){
        if (divArray.indexOf(i)>0){
            break;
        }
        divArray.push(i,integer/i);
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

function nbYear(p0, percent, aug, p) {
    var calcPop=p0;
    var years = 0;
    while (calcPop<p){
        years ++;
        calcPop = calcPop + (calcPop*percent/100) + aug;
    }
    return years;
}

function maskify(cc) {
    var secretCC = void(null);
    if (cc.length < 4)
    {
        return cc;
    } else {
        var ccToReplace = cc.substring(0,cc.length -4);
        secretCC = ccToReplace.replace(/[a-z0-9]/ig, '#');
        secretCC = secretCC + cc.substring(cc.length-4,cc.length);
        return secretCC;
    }
}

var countBits = function(n) {
    var binNumber = n.toString(2);
    return((binNumber.match(/1/g) || []).length);
  };

  function findNb(m) {
    var mResult = 0;
    var n = 0;
    while (mResult <= m){
      n++;
      mResult = mResult+(Math.pow(n,3));
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

function addBinary(a,b) {
  var toConvert = a+b;
  return toConvert.toString(2);
}

function multiply(a, b){
  return (a * b)
}*/

/*

function solution(number){
    var romanObject = { "M": '1000', "CM":"900", "D": "500", "CD":"400", "C":"100","XC":"90", "L":"50", "XL":"40", "X":"10", "IX":"9", "V":"5", "IV": "4", "I":'1'};
    romanNumber = '';

    for (var key in romanObject) {
        if (romanObject.hasOwnProperty(key)) {
            while (number >= romanObject[key]){
                number = number -romanObject[key];
                romanNumber+=key;
            }
        }
    }
    
    return romanNumber;
  }

  console.log(solution(1), '1 should == "I"')
console.log(solution(4), '4 should == "IV"')
console.log(solution(1444), '1444 should == "MCDXLIV"')
console.log(solution(1990), '1990 should == "MCMXC"')
console.log(solution(2007), '2007 should == "MMVII"')
console.log(solution(1666), '1666 should == "MDCLXVI"')

*/
/*function randomCase(sentence){
    var newSentence='';
    var randomUpper;
    for (var i=0;i<sentence.length;i++){
        if (Math.random()>0.5 && sentence[i].match(/[a-z]/g)){
            randomUpper = String.fromCharCode(sentence[i].charCodeAt(0)-32);
        }
        newSentence+=randomUpper?randomUpper:sentence[i];
        randomUpper=void(null);
    }
    return newSentence;
}


console.log(randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit"));

console.log(randomCase("Donec eleifend cursus lobortis") );
*/
/*
function mixedFraction(s){
    var splitNumbers = s.split('/');
    var negativeNumber;
    if (Number(splitNumbers[1])===0){
        throw "ZeroDivisionError";
    }
    
    if ( (splitNumbers[0]<0 && splitNumbers[1]>0) || (splitNumbers[1]<0 && splitNumbers[0]>0)){
        negativeNumber = true;
    }
    var absSplitNumbers = [Math.abs(splitNumbers[0]),Math.abs(splitNumbers[1])];
    var wholeNumber =  Math.floor(absSplitNumbers[0]/absSplitNumbers[1]);
    var fractionPart;
    if (wholeNumber !== absSplitNumbers[0]/absSplitNumbers[1]) {
        var topNumber = absSplitNumbers[0]-wholeNumber*absSplitNumbers[1];
        for (var i=0; i<topNumber;i++)
        {
            if ((topNumber%(i+1)===0) && (absSplitNumbers[1]%(i+1)===0)){
                fractionPart = topNumber/(i+1)+'/'+absSplitNumbers[1]/(i+1);
            }
        }
        if (!fractionPart){
        fractionPart = topNumber+'/'+absSplitNumbers[1];
        }
        wholeNumber = (wholeNumber===0?"":wholeNumber+' ')+fractionPart;
    }

    return (negativeNumber?'-':"")+wholeNumber.toString();
}

console.log(mixedFraction('42/9'), '4 2/3');
console.log(mixedFraction('6/3'), '2');
console.log(mixedFraction('1/1'), '1');
console.log(mixedFraction('11/11'), '1');
console.log(mixedFraction('4/6'), '2/3');
console.log(mixedFraction('0/18891'), '0');
console.log(mixedFraction('-10/7'), '-1 3/7');
console.log(mixedFraction('-22/-7'), '3 1/7');
console.log(mixedFraction('0/0'), "Must raise ZeroDivisionError");
console.log(mixedFraction('3/0'), "Must raise ZeroDivisionError");
console.log(mixedFraction('-6/1'), '-6');
*/
var numberToPrice = function(number) {
  var priceString='';
  var splitNumber = parseFloat(Math.floor(number * 100) / 100).toFixed(2).split('.');
  var sign = number<0?'-':'';
  if (isNaN(splitNumber[0])){
    return 'NaN';
  }
  var separatedNumber= splitNumber[0];
  while (separatedNumber.length>3){
      priceString = ','+separatedNumber.substring(separatedNumber.length-3,separatedNumber.length)+priceString;
      separatedNumber = separatedNumber.substring(0,separatedNumber.length-3);
  }
  if (separatedNumber.length!==0){
    priceString = separatedNumber+priceString;      
  }
  return((priceString.length>1?priceString:'0')+'.'+splitNumber[1]);
}

console.log(numberToPrice(1500.129),   '1,500.12');
console.log(numberToPrice(-5),         '-5.00');
console.log(numberToPrice(1000000.5),  '1,000,000.50');
console.log(numberToPrice('@'),        'NaN');