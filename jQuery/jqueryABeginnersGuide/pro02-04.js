$(document).ready(function(){
    $('#make-bold').click(function(evt){
        evt.preventDefault();
        $('#imp-text').addClass("bold-text");
    });

    $('#sim-make-bold').hover(function(){
        $('#make-bold').trigger("click");
    });
});