

      var map;
      function initMap() {
        // var startPoint = new google.maps.LatLng(34.0522, -118.2437),
          // endPoint = new google.maps.LatLng(34.0430, -118.2673),

        var startPoint = (34.0522, -118.2437),

          endPoint = (34.0430, -118.2673),
      myOptions = {
              zoom: 7,
              center: startPoint
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
  //           position: startPoint,
  //           title: "Starting Point",
  //           label: "Starting Point",
  //           map: map
  //       }),
  //       markerB = new google.maps.Marker({
  //           position: endPoint,
  //           title: "Ending Point",
  //           label: "Ending Point",
  //           map: map
        });
    calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint);

}



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
}

initMap();
    // CREATE TEST MARKER
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
      })
      // }




// var input = document.getElementById('place');
// var autocomplete = new google.maps.places.Autocomplete(input);
// google.maps.event.addListener(autocomplete, 'place_changed', function() {
//   var place = autocomplete.getPlace();
//   console.log(place.formatted_address);
//   console.log(place.url);
//   console.log(place.geometry.location)
// });


$(document).ready(function(){




// GOOGLE DIRECTIONS URL
function displayDirections() {
// /*var queryURL = "https://maps.googleapis.com/maps/api/directions/json?origin="+startPoint+"&destination="+endPoint+"&key=AIzaSyCa6UbdkpS7nDN751ZkOWIYdfG1Rk7tmuE"
/* $.ajax({
      url: queryURL,
      method: "GET"
    })
         .done(function(response) {
          // Removes any gifs already placed so shows one player at a time
        var directionsData = response.data;

        console.log(directionsData);*/

        // // For each data object: create a gif div and append data inside
        // for (var i = 0; i < directionsData.length; i++) {
        //   var gifDiv = $("<div class='content'>");
        //   var rating = $("<p class='rating'>").text("Rating: " + directionsData[i].rating);
        //   var stillImage = directionsData[i].images.fixed_height_still.url;
        //   var movingImage = directionsData[i].images.fixed_height.url;
        //   var image = $("<img>")
        //       image.attr({
        //         "src": stillImage, 
        //         "data-still": stillImage,
        //         "data-moving": movingImage,
        //         "data-isGifPlaying": "no"});
        //       image.addClass("playerGif");
        //     gifDiv.append(image);
        //     gifDiv.append(rating);
        // // Place gif div in html
        //   $("#placeGifs").prepend(gifDiv);
        // }
        // })
        alert("A");
        console.log("A");
       };

    // $(document).on("click", ".submitButton", displayDirections);
    $(".submitButton").on("click", displayDirections);

});