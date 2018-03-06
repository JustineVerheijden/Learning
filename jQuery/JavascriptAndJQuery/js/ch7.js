/*window.addEventListener("load",setup,false);

function setup(){
    $(':header').addClass('headline');
    $('li:lt(3)').hide().fadeIn(1500);
    $('li').on('click',function(){
        $(this).remove();
    });
    $('li em').addClass('seasonal');
    $('li.hot').addClass('favorite');
    $('li[id!="one"]')
        .hide()
        .delay(500)
        .fadeIn(1400);
}
*/
$(document).ready(function(){
    $(':header').addClass('headline');
 //   $('li:lt(3)').hide().fadeIn(1500);
    $('li em').addClass('seasonal');
 /*   $('li[id!="one"]')
        .hide()
        .delay(500)

   */ 
    var $listHTML = $('ul').html();
 //   $('ul').append($listHTML);

    var $listText = $('ul').text();
    $('ul').append('<p>' + $listText + '</p>');
    
    var $listItemHTML = $('li').html();
    //$('li').append('<i>' + $listItemHTML + '</i>');

    var $listItemText = $('li').text();
//    $('li').append('<i>' + $listItemText + '</i>');

    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();

    $('ul').before('<p class="notice">Just Updated</p>');
 //   $('li.hot').prepend('+ ');
    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);

    $('li#three').removeClass('hot');
    $('li.hot').addClass('favorite');
    $('ul').attr('id','group');
/*
    var backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was: ' + backgroundColor +'</p>');
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75'
    });
*/
    $('li').each(function () {
        var ids = this.id;
        $(this).append(' <span class="order">' + ids + '</span>')
        
    });


    /*$('li').on('click',function(){
        $(this).remove();
    });
    */ids = "";
    var $listItems = $('li');

    $listItems.on('mouseover click', function(){
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');

    });
    $listItems.on('mouseout',function() {
        $(this).children('span').remove();        
    });

    $('li').on('click', function (e){
        $('li span').remove();
        var date = new Date();
        date.setTime(e.timeStamp);
        var clicked = date.toDateString();
        $(this).append('<span class="date">' +clicked+ ' ' + e.type+'</span>');    
    });

    var listItem, itemStatus, eventType;

    $('ul').on('click mouseover',':not(#four)',{status:'important'},
    function (e){
        listItem = 'Item:' + e.target.textContent + '<br />';
        itemStatus = 'Status: '+ e.data.status + '<br />';
        eventType = 'Event: ' + e.type;
        $('p#notes').html(listItem+itemStatus+eventType);
    });

    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700);
    });
    $li.on('click',function () {
        $(this).fadeOut(700);
    });

    $('li').on('click', function () {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function() {
            $(this).remove();
        });
    });
// need to remove other 'children' before this works
    var $h2 = $('h2');
  //  $('ul').hide();
    $h2.append('<a>show</a>');

    $h2.on('click', function(){
        $h2.next()
            .fadeIn(500)
            .children('.hot')
            .addClass('complete');
        $h2.find('a').fadeOut();

    });

/*
    $listItems = $('li');
    $listItems.filter('.hot:last').removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $listItems.has('em').addClass('complete');

    $listItems.each(function() {
        var $this= $(this);
        if ($this.is('.cool')){
            $this.prepend('Priority item: ');
        }
    });
    $('li:contains("honey")').append(' (local)');
*/
    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool');

});