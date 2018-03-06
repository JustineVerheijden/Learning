(function(){
    var $imgs = $('#gallery img');
    var $search = $("#filter-search");
    var $cache = [];

    $imgs.each(function(){
        $cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });

    function filter(){
        var query = this.value.trim().toLowerCase();
        $cache.forEach(function(img){
            var index=0;
            if (query) {
                index=img.text.indexOf(query);    
            }
        img.element.style.display = index === -1 ? 'none':'';
        });
    }

    if ('oninput' in $search[0]){
        $search.on('input',filter);
    } else{
        $search.on('keyup',filter);
    }

    var prices = [1,2,125,2,19,14];
    prices.sort(function(a,b){
        return 0.5-Math.random();
        //return a-b;
        //return b-a;

    });

    var holidays = ['2014-12-25','2014-01-01','2014-07-04','2014-11-28'];
    console.log(holidays);
        holidays.sort(function(a,b){
            var dateA=new Date(a);
            var dateB=new Date(b);

            return dateA-dateB;
        });
    console.log(holidays);
}());