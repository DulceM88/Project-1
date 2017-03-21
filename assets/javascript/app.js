<<<<<<< HEAD
// Example direction and places api with api key
/*
var directionsQueryURL = https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=AIzaSyDegJxVf_X3LfYHpbD6xnUJiy-3NXit8hI

var placesQueryURL = https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyATyZWwhsd6B4zceXSDcl2bdQ-dJh0aFrk*/
=======
 function init_map() {
		var var_location = new google.maps.LatLng(45.430817,12.331516);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 14
        };
 
		var var_marker = new google.maps.Marker({
			position: var_location,
			map: var_map,
			title:"Venice"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
		var_marker.setMap(var_map);	
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);
>>>>>>> 182eb0cfde0781dd2d1c42606e64eddf8e6a6400
