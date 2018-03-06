$(document).ready(function(){
    $("#make-bold").click(function(evt){
        evt.preventDefault();
        $("div:first").addClass("bold-font");
    });
    $("#show-msg").on('click',function(evt){
        evt.preventDefault();
        $("#message").append("Hi, hope you liked the important text!");
    });
});