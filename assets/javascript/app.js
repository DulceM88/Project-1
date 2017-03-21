      var map;
      function initMap() {
        var pointA = new google.maps.LatLng(34.0522, -118.2437),
          pointB = new google.maps.LatLng(34.0430, -118.2673),
      myOptions = {
              zoom: 7,
              center: pointA
            },

        map = new google.maps.Map(document.getElementById('map'), myOptions),
          // Put in coordinates for Los Angeles
          // center: {lat: 34.0522, lng: -118.2437},
          // Higher numbers zoom in more
          // zoom: 10
        // }),

        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
  //       }),
    // markerA = new google.maps.Marker({
  //           position: pointA,
  //           title: "point A",
  //           label: "A",
  //           map: map
  //       }),
  //       markerB = new google.maps.Marker({
  //           position: pointB,
  //           title: "point B",
  //           label: "B",
  //           map: map
        });
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

}



function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
        destination: pointB,
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
}

initMap();
/*    // CREATE TEST MARKER
        var losAngeles = {lat: 34.0522, lng: -118.2437};
        var marker = new google.maps.Marker({
          position: losAngeles,
          map: map,
          title: 'test'
        });
    // SHOW INFO WHEN MARKER IS CLICKED
      var markerInfo = new google.maps.InfoWindow({
        content: 'A'
      });
      marker.addListener('click', function() {
        markerInfo.open(map, marker);
      })*/
      // }