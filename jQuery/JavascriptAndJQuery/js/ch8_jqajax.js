$("nav a").on("click",function (e){
    if (e.preventDefault()){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    var url = this.href;

    $('nav a.current').removeClass("current");
    $(this).addClass("current");

    $("#container").remove();
    $("#content").load(url+ " #content").hide().fadeIn("slow");


});

