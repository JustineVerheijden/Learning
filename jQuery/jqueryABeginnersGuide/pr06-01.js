$(document).ready(function(){
    $('#more').hide();
    $('#show-more').click(function(evt){
        evt.preventDefault();
        $('#more').slideDown('slow');
    })
});