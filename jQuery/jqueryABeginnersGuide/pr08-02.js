$(document).ready(function(){
    var $name = $('#name');
    var $num = $('#num');
    var $errName = $('#err-name');
    var $errNum = $('#err-num');
    var $contactForm = $('#contact-form');

    $name
        .blur(function(){
            $errName.empty();
        })
        .focus(function(){
            $errName.empty().append('<p>Letters and spaces only</p>');
        });
    
    $num
        .blur(function(){
            $errNum.empty();
        })
        .focus(function(){
            $errNum.empty().append('<p>Digits 0-9 only</p>');
        });
    $('#submit').click(function(evt){
        var testName = /^[a-z ]+$/i;
        var testNum = /^[0-9]+$/;
        var errorColour = "#900";
        var origColour = "#FFF";
        var errors = 0;
        $('.fields').css('background-color',origColour);
        $('.err-msg').empty();
        if (!testName.test($name.val()) && $name.val().length > 0) {
            console.log('asdf');
            $name.append("Invalid Value");
            $name.css('background-color',errorColour);
            errors ++;
        }
        if (!testNum.test($num.val())) {
            $num.append("Invalid Value");
            $num.css('background-color',errorColour);
            errors ++;
        }
        if (errors > 0){
            $contactForm.prepend('Errors on form');
            evt.preventDefault();
        }
    });
});