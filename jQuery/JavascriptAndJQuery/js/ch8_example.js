var xhr = new XMLHttpRequest();
var responseObject;

xhr.onload = function(){
    if(xhr.status ===200) {
        responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject)
    }
}  

$('div a').on('click',function(e){
    if (e.preventDefault()){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
   
    var state=this.id.toUpperCase();
    console.log(state);
    
    $('div a.current').removeClass('current');
    $(this).addClass('current');

    var newContent = '';
    for (var i=0;i<responseObject[state].length; i++){
        newContent += '<li><span class="time">' + responseObject[state][i].time+ '</span>';
        newContent += '<a href="descriptions.html#';
        newContent += responseObject[state][i].title.replace(/ /g,'-')+'">';
        newContent += responseObject[state][i].title + '</a></li>';
    }  
    $('#sessions').html(newContent);

    $('div#details').html('');
});

$('#sessions').on('click','li a', function(e){
    var url = this.href;

    var dataToFind = url.replace('#',' #');;

    if (e.preventDefault()){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    
    $('li a.current').removeClass('current');
    $(this).addClass('current');

    $('div#details').load(dataToFind).hide().fadeIn('slow');

});

xhr.open("GET","data/example.json",true);
xhr.send(null);
