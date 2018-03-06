var elNote = document.createElement('div');
elNote.setAttribute('id','note');
    

function getTarget(e) {
    if(!e){
        e=window.event;
    }
    return e.target||e.srcElement;
}

function itemDone(e) {
    var target, elParent, elGrandparent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);

    if (e.preventDefault){
        e.preventDefault();
    }
    else {
        e.returnValue = false;
    }
}

function windowLoaded() {
    var el = document.getElementById("shoppingList");
    if (el.addEventListener) {
        el.addEventListener("click", function(e){
            itemDone(e);
        },false);
    }
    else {
        el.attachEvent("onclick",function(e) {
            itemDone(e);
        });
    }

    var msg ='<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
    msg +="<div><h2>System Maintenance</h2>";
    msg+="Our servers are being updated between 3 and 4 a.m. ";
    msg+="During this time, there may be minor disruptions to service.</div>";

    elNote.innerHTML=msg;
    document.body.appendChild(elNote);

    var elClose=document.getElementById('close');
    elClose.addEventListener('click',dismissNote,false);

}

function dismissNote() {
    document.body.removeChild(elNote);
}

window.addEventListener("load",windowLoaded,false);

