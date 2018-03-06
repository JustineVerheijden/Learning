/* This script displays the cost for a custom sign
   It is an example from the JavaScript and jQuery book*/
var price;
var quantity;
var total;

price = 5;

quantity = 14;

total = price * quantity;

var e1 = document.getElementById("cost");
e1.textContent = "$" + total;