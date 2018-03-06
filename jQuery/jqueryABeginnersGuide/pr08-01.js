$(document).ready(function(){
    $('#submit').click(function(evt){
        evt.preventDefault();
    });
    var testString = /^[a-z ]+$/i;
    $('#name').blur(function(evt){
        $('#err-name').empty();
        if (!testString.test($('#name').val())){
            $('#err-name').append('Only letters and spaces are allowed')
        }
    });
});