(function($){
    $.fn.accordion=function(speed){
        this.on('click', '.accordion-control', function(e){                        
            if (e.preventDefault()){
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            $(this)
                .next('.accordion-panel')
                .not(':animated')
                .slideToggle(speed);            
        });
        return this;
    }
})(jQuery);