$(document).ready(function(){
    $('#content').hide();
    $('#menu').hide();
    $('#mouse-div').click(function(evt){
        evt.preventDefault();
        if (evt.which == 1){
            $('#content').slideToggle();
        }
        else if (evt.which == 2){
            $('#menu').slideToggle();
        }
    });
});