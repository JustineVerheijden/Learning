$('nav a').on("click", function(e){ 
    if (e.preventDefault()){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    var url = this.href;
    var $content = $("#content");

    $('nav a.current').removeClass("current");
    $(this).addClass("current");
    $("#container").remove();

    $.ajax({
        type:"POST",
        url:url,
        timeout:2000,
        beforeSend: function() {
            $content.append('<div id="loading">Loading</div>');
        },
        complete: function (){
            $('loading').remove();
        },
        success: function(data) {
            $content.html($(data).find('#container')).hide().fadeIn(400);
        },
        fail: function(){
            console.log('asdf');
            $("#panel").html('<div class="loading">Please try again soon.</div>');
        }
    });
});