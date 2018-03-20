$(document).ready(function(){
    var aboutBtn = $('#aboutBtn');
    var portfolioBtn = $('#portfolioBtn');
    var contactMeBtn = $('#contactMeBtn');
        
    $('#navButtons').on('click', function(event){
        event.preventDefault();
        var top = event.target.hash;
        $('html, body').stop().animate({
            scrollTop: $(top).offset().top-70
        }, 2000);
        $(portfolioBtn).removeClass('active');
        $(contactMeBtn).removeClass('active');
        $(aboutBtn).removeClass('active');
        $(top+'Btn').addClass('active');    
    });
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        var sec1 = $('#about').offset().top - 70;
        var sec2 = $('#portfolio').offset().top - 70;
        var sec3 = $('#contactMe').offset().top - 75;
      
        if (windscroll >= sec1) {
            $(aboutBtn).addClass('active');
            $(portfolioBtn).removeClass('active');
            $(contactMeBtn).removeClass('active');
        } // do not remove this class
        
        if (windscroll >= sec2) {
          $(portfolioBtn).addClass('active');
          $(aboutBtn).removeClass('active');
          $(contactMeBtn).removeClass('active');}
      
        if (windscroll >= sec3) {
          $(contactMeBtn).addClass('active');
          $(aboutBtn).removeClass('active');
          $(portfolioBtn).removeClass('active');
        }
      
      }).scroll();
});