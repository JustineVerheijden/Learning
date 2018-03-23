$(document).ready(function(){
    var celciusOrFahr = 'C';
    var $temp = $('.temp');   
    var currentTemp; 
    getLocation();

    $temp.on('click','a',function(event){
        event.preventDefault();
        var newTemp;
        if (celciusOrFahr ==='C'){
            newTemp = (currentTemp*9/5) + 32;
            celciusOrFahr = 'F';
        } else {
            newTemp = currentTemp;
            celciusOrFahr = 'C';
        }
        $temp.html(newTemp+'<a href="">'+celciusOrFahr+'</a>');

    });

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            $('.location').text("Can't give you your temp without knowing your location!");
        }
    }
    function showPosition(position) {
        
        $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat='+Math.floor(position.coords.latitude)+'&lon='+Math.floor(position.coords.longitude), function(data){
            $('.location').text(data.name+', '+data.sys.country);
            currentTemp = data.main.temp;
            $temp.html(currentTemp+'<a href="">'+celciusOrFahr+'</a>');
            $('.weather').text(data.weather[0].main);
            $('.image').html('<img src='+data.weather[0].icon+' alt=icon>');
        })
    }
});