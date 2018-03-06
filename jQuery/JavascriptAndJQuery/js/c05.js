//document.getElementById("one").className = "cool";

var tag = document.getElementsByTagName("h1");

var tag1 = document.getElementsByTagName("li");

var className = document.getElementsByClassName("hot");
if (className.length > 1 ){
    var cold = className[1];
    cold.className = "cool";
}

var selectorAll = document.querySelectorAll("li[id]");


var liHot = document.querySelector("li.hot");
liHot.className = "cool";

var els = document.querySelectorAll("li.hot");
if (els.length > 0) {
    els[0].className = "cool";
}

var startItem = document.getElementById("two");
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

prevItem.className = "hot";
nextItem.className = "hot";

var itemTwo = document.getElementById("two");
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace("pine nuts", "kale");
itemTwo.firstChild.nodeValue = elText;

var firstItem = document.getElementById("one");
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

/*var msg = '<p>textContent: ' + showTextContent +"</p>";
msg += '<p>innerText: ' + showInnerText + "</p>";
firstItem.innerHTML = msg;
*/
var itemContent = firstItem.innerHTML;

firstItem.innerHTML = "<a href=\"http://example.org\">" + itemContent + "</a>";

var newEl = document.createElement("li");
newEl.setAttribute("id","twenty");
var newText = document.createTextNode("quinoa");


newEl.appendChild(newText);
var position = document.getElementsByTagName("ul")[0];

position.appendChild(newEl);

var removeEl = document.getElementsByTagName("li")[3];
var containerEl = removeEl.parentNode;

containerEl.removeChild(removeEl);

firstItem.className ="complete";

var fourthItem = document.getElementsByTagName("li").item(5);
fourthItem.setAttribute("class","cool");