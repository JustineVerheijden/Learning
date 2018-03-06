var inStock;
var shipping;
inStock = true;
shipping = false;

inStock = false;
shipping = true;

var elStock = document.getElementById("stock");
elStock.className = inStock;

var elShip = document.getElementById("shipping");
elShip.className = shipping;

var colors;
colors = ['white','black','custom'];

colors[2] = 'beige';

var el = document.getElementById("colors");
el.textContent = colors[2];


var subtotal = (13+1) * 5;
var nShipping = 0.5* (13-1);
var total = subtotal + nShipping;

var elSub = document.getElementById("subtotal");
elSub.textContent = subtotal;
var elNShip = document.getElementById("nShip");
elNShip.textContent =nShipping;
var elTotal = document.getElementById("total");
elTotal.textContent = total;
