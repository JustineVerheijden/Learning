$(document).ready(function() {
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    updateHeading();

    $('#showForm').on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(e){
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        var newText = $('input:text').val();
        $('li:last').after('<li>'+newText+'</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
        updateHeading();
        clicking();
    });

    clicking();
    function clicking () {
    $('li').on('click', function() {
        if ($(this).hasClass("complete")) {
            $(this).fadeOut(700);
        } else {
            $(this).addClass('complete');
        }
        updateHeading();
    });
    }

    function updateHeading() {
        var $listItems = $('li').length;
        $h2Heading = $('#h2Heading');
        if ($h2Heading.text().indexOf('(')>0) {
            var newText = $h2Heading.text().substring(0,$h2Heading.text().indexOf('('));
            $h2Heading.text(newText+" ("+ $listItems+")");   
        } else {
            $h2Heading.append(" ("+ $listItems+")");
        }
    }
});