/* This script displays the cost for a custom sign
   It is an example from the JavaScript and jQuery book*/
var concat1 = "Howdy ";
var concat2 = "Molly";
var concat3= ", please check your order:";
var greeting;
var cost = 5;
var shipping = 7;

var sign = "Montague House";


greeting = concat1 + concat2 +concat3;

var elConcat = document.getElementById("concat");
elConcat.textContent = greeting;

var elSign = document.getElementById("sign");
elSign.textContent = sign;

var elLength =document.getElementById("totTiles");
elLength.textContent = sign.length;

var elSubtotal = document.getElementById("subtotal");
elSubtotal.textContent = "$"+ (sign.length*cost);

var elShipping = document.getElementById("shipping");
elShipping.textContent = "$" +shipping;

var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" +((sign.length*cost)+shipping);