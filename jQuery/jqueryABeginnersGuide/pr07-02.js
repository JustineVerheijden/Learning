$(document).ready(function(){
    $('div').click(function(evt){
        evt.stopPropagation();
        $(this).append("<br>You clicked me!</br>");
    });
});