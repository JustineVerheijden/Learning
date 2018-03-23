$(document).ready(function(){
    var $quoteAuthor = $('#person');
    var colors=["#ff0000","#ff4000","#ff8000","#ffbf00","#ffff00","#bfff00","#80ff00","#40ff00","#00ff00","#00ff40","#00ff80",
                "#00ffbf","#00ffff","#00bfff","#0080ff","#0040ff","#0000ff","#4000ff","#8000ff","#bf00ff","#ff00ff","#ff00bf",
                "#ff0080","#ff0040","#ff0000"]

    $('#buttons').on('click',function(event){
        if (event.target.id.indexOf('tumblr')>=0) {
            console.log('do tumblr');
        } else if (event.target.id.indexOf('twitter')>=0) {
            var twitterStuff = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
            twitterStuff += encodeURIComponent('"'+$('#quote').text()+'" '+$quoteAuthor.text());
            var win = window.open(twitterStuff, '_blank');
            win.focus();        
        } else if (event.target.id.indexOf('newQuote')>=0) {
            randomQuote();
        } 
    });    

    randomQuote();
    function randomQuote(){
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
            var quote=a[0].content;
            var quoteArray=quote.replace(/\//g,'').replace(/&#8211;/g,'-').replace(/&#8217;/g,"'").replace(/&#8220;/g, '"').replace(/&#8221;/g,'"').replace(/&#8230;/g,'...').replace(/&#8216;/g,"'").split('<p>');

            $('#quote').text(quoteArray[1]);
            $quoteAuthor.text('-'+a[0].title);
            var newColor = colors[Math.floor(Math.random()*colors.length)];
            $('#background').animate({'background-color': newColor},100);
            $('.buttons').animate({'background-color':newColor},100);
            $('.quotes').css('color',newColor);
        });    
    }
        
});
