$(document).ready(function(){
    var robotTop= parseInt($('#robot').css('top'));
    var robotLeft= parseInt($('#robot').css('left'));
    var cssChange = {};

    $('#buttons').on('click','button',function (event){
        switch (event.target.outerText) {
        case "Right":
            robotLeft += 100;
            cssChange = {"left":robotLeft+'px'};
            break;
        case "Left":    
            robotLeft -= 100;
            cssChange = {"left":robotLeft+'px'};
            break;
        case "Up":
            robotTop -= 100;
            cssChange = {"top":robotTop+'px'};
            break;
        case "Down":
            robotTop +=100;
            cssChange = {"top":robotTop+'px'};
            break;
    }
    $('#robot').animate(cssChange,1000);
    });
});