function init() {
  var mapOptions = {                                 // Set up the map options
    zoom:14,
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // controls
    panControl:false,
    zoomControl:true,
    zoomControlOptions: {
        style:google.maps.ZoomControlStyle.SMALL,
        position:google.maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl:true,
    mapTypeControlOptions: {
        style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position:google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl:true,
    scaleControlOptions: {
        position:google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl:false,
    overviewMapControl:false
  };
  var venueMap;                                      // Map() draws a map
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // Add element to page
}

window.onload = loadScript;                          // on load call loadScript()