$(document).ready(function(){
    $('#add').click(function(evt){
        evt.preventDefault();
        $('.summary').append("<p>Article by Me!</p>");
    });
});