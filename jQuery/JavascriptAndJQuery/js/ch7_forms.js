$(document).ready(function(){
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function () {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function () {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        var newText = $('input:text').val();
        
        $('li:last').after('<li>' +newText+"</li>");
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });


    var $p = $('p');
    var $clonedQuote = $p.clone();
    $p.remove();
    $clonedQuote.insertAfter('h2');

    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');

    var listHeight = $('#page').height();
    $('ul').append('<p>Height: '+ listHeight + 'px</p>');
    $('li').width('50%');
    $('li#one').width(125);
    $('li#two').width('75%');

});