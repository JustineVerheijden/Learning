$(document).ready(function(){
    $("#highlight").click(function(evt){
        evt.preventDefault();
        $("#imp-text").toggleClass("highlight");
    });
    $('#make-bold').click(function(evt){
        evt.preventDefault();
        $('#more-info').css("font-weight","bold");
    });
});