var $elMap = $('#loc');

var msg = "Sorry, we were unable to get your location.";


if (Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success,fail);
    $elMap.html("Checking location");
}
else
{
    $elMap.html(msg);
}

function success(position){
    msg="<h3>Longitude:<br>";
    msg += position.coords.longitude + "</h3>";
    msg += "<h3>Latitude:<br>";
    msg += position.coords.latitude + "</h3>";
    $elMap.html(msg);
}

function fail(msg){
    $elMap.html(msg);
}