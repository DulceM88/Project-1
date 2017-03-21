$("#place").hide();
    // CREATE MAP
var map;

function initMap() {
  var myOptions = {
    zoom: 11,
    center: {lat: 34.0522, lng: -118.2437}
  },
  map = new google.maps.Map(document.getElementById('map'), myOptions);
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });
};

$("#submitButton").on("click", function(){
  $(".userNav").hide();
  $("#place").show();
        var startPoint = $("#startPoint").val().trim();
        var endPoint = $("#endPoint").val().trim();
        var place = $("#place").val().trim();
    calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint);
      });

function calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint) {
    directionsService.route({
        origin: startPoint,
        destination: endPoint,
        avoidTolls: true,
        avoidHighways: false,
        travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
};
