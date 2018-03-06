window.addEventListener("load",setup,false);
var noteName;
//var button;

function setup () {

    noteName = document.getElementById("noteName");
    //button = document.getElementById("submit");
    if (document.addEventListener){
        noteName.addEventListener("input", writeLabel, false);
        document.addEventListener("click", function (e) {changeAttribute(e);}, false);
    } else
    {
        noteName.attachEvent("onkeyup",writeLabel);
        document.attachEvent("onclick", function (e) {changeAttribute(e);});
    }

}

function writeLabel(){
    var h2 = document.getElementById("h2");
    noteName = document.getElementById("noteName");
    h2.textContent=noteName.value;
}

function changeAttribute(e){
    var target = getTarget(e);
    

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    switch (target.getAttribute("data-state")){
    case "record": 
        pause(target);
        break;
    case "pause":
        record(target);
        break;
    };
}

function pause(target){
    target.setAttribute("data-state","pause");
    target.textContent = "stop";
}

function record(target){
    target.setAttribute("data-state","record");
    target.textContent = "record";    
}

function getTarget(e) {
    if (!e){
        e=window.event;
    }
    return event.target||event.srcElement;
}