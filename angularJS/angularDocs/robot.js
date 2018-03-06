$(document).ready(function(){
    var $robot = $('#robot');
    $robot.parent().css({position:'relative'});
    
    $('#up').click(function(){
        moveUpDown('up');
    });
    $('#down').on('click',function(){
        moveUpDown('down');
    });
    $('#left').on('click',function(){
        moveRightLeft('right')
    });
    $('#right').on('click',function(){
        moveRightLeft('left')
    });
    

    function moveUpDown(direction){
        var oldPos = $robot.offset().top;
        var newPos = (direction === 'up' ? oldPos-10-27 : oldPos+10-27);
        $robot.css({top:newPos+'px'});
    }

    function moveRightLeft(direction){
        var oldPos = $robot.offset().left;
        var newPos = (direction === 'left' ? oldPos+10-8 : oldPos-10-8);
        $robot.css({left:newPos+'px'});
    }
});