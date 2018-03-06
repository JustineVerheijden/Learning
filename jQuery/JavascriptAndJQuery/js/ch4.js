/*var pass = 50;
var score = 90;

var hasPassed = score >= pass;

var el = document.getElementById("answer");
el.textContent = hasPassed;*/

var number = 3;

var operator = "addition";
var msg = "";
var i = 1

if (operator == "addition"){
    while (i<11) {
    //for (var i = 0; i<11;i++) {
        msg += i+" + "+number+" = "+ (i+number)+"<br>";
        i++;
    }
} else {
    for (var i=0;i<11;i++){
        msg += i+" x "+number+" = "+ (i*number)+"<br>";
    }
}
var el = document.getElementById("blackboard");
el.innerHTML = msg;