"use strict"
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 300;

var bankAccountBalance = 201;
var amountSpent = 0;


while (amountSpent < SPENDING_THRESHOLD) {
    if (SPENDING_THRESHOLD - (amountSpent + PHONE_PRICE + addTax(PHONE_PRICE))> 0){
        amountSpent = amountSpent + (PHONE_PRICE + addTax(PHONE_PRICE));
    } 
    else
    {
        break;
    }  
    if (SPENDING_THRESHOLD - (amountSpent + ACCESSORY_PRICE + addTax(ACCESSORY_PRICE))> 0){
        amountSpent = amountSpent + (ACCESSORY_PRICE + addTax(ACCESSORY_PRICE));
    }  
    else
    {
        break;
    }   
    //amountSpent 
}

console.log(formatPrice(amountSpent));
if (amountSpent < bankAccountBalance){
    console.log('BUY BUY BUY');
}
else
{
    console.log('Cant afford it!');
}

function addTax(amount) {
    return amount * TAX_RATE;
}

function formatPrice(amount) {
    return ("$"+(amount.toFixed(2)));
}