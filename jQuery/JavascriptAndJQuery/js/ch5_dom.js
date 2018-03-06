
var newLastEl = document.createElement("li");
newLastEl.setAttribute("id","test");
newLastEl.setAttribute("class","hot");
var newText = document.createTextNode("pumpkin");
newLastEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newLastEl);


var newFirstEl = document.createElement("li");
newFirstEl.setAttribute("id","first");
newFirstEl.setAttribute("class","cool");
var newFirstText = document.createTextNode("ice cream");
newFirstEl.appendChild(newFirstText);
position.insertBefore(newFirstEl,position.firstChild);


var hotList = document.querySelectorAll("li.hot");

for (var i=0;i<hotList.length;i++){
    hotList[i].className ="cool";
} 

var shopList = document.querySelectorAll("li").length;
var heading = document.querySelector("h2");
var headNode = heading.firstChild.nodeValue;
heading.textContent=headNode+" "+shopList;
