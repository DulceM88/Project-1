$("#place").hide();
    // CREATE MAP
var map;
var directionsDisplay;
var directionsService;

function initMap() {
  var myOptions = {
    zoom: 11,
    center: {lat: 34.0522, lng: -118.2437}
  },
  map = new google.maps.Map(document.getElementById('map'), myOptions);
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer(
  // {
  //   map: map
  // }
  );
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));
};

$("#submitButton").on("click", function(){
  $(".userNav").hide();
  $("#place").show();
        var startPoint = $("#startPoint").val().trim();
        console.log(startPoint);
        var endPoint = $("#endPoint").val().trim();
        var place = $("#place").val().trim();
    calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint);
    // displayDirections(startPoint, endPoint);

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
            console.log(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
};


/*function displayDirections(startPoint, endPoint) {
  // var queryURL = "https://maps.googleapis.com/maps/api/directions/json?origin="+startPoint+"&destination="+endPoint+"&key=AIzaSyDegJxVf_X3LfYHpbD6xnUJiy-3NXit8hI";
  var queryURL = "https://maps.googleapis.com/maps/api/directions/json?origin=ucla&destination=usc&key=AIzaSyCa6UbdkpS7nDN751ZkOWIYdfG1Rk7tmuE";
  // var queryURL ="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa6UbdkpS7nDN751ZkOWIYdfG1Rk7tmuE&callback=initMap";
  
  $.ajax({
      url: queryURL,
      method: "GET",
    })
        .done(function(response) {
          var directionsData = response.data;
          console.log(directionsData);
          });
};




$.ajax({
            url: Auto_Complete_Link, 
            type: "GET",   
            dataType: 'jsonp',
            cache: false,
            success: function(response){                          
                alert(response);                   
            }           
        });    */

      var input = document.getElementById('startPoint');
      var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});
      google.maps.event.addListener(autocomplete, 'place_changed', function(){
         var place = autocomplete.getPlace();
      });
    