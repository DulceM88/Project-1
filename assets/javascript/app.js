<<<<<<< HEAD

// This example requires the Places library. Include the libraries=places
     // parameter when you first load the API. For example:
     // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

     function initMap() {
       var map = new google.maps.Map(document.getElementById('map'), {
         mapTypeControl: false,
         center: {lat: 34.0522, lng: -118.2437},
         zoom: 12
       });

       new AutocompleteDirectionsHandler(map);
     }

      /**
       * @constructor
      */
     function AutocompleteDirectionsHandler(map) {
       this.map = map;
       this.originPlaceId = null;
       this.destinationPlaceId = null;
       this.travelMode = 'DRIVING';
       var originInput = document.getElementById('startPoint');
       var destinationInput = document.getElementById('endPoint');
       var modeSelector = document.getElementById('mode-selector');
       this.directionsService = new google.maps.DirectionsService;
       this.directionsDisplay = new google.maps.DirectionsRenderer;
       this.directionsDisplay.setMap(map);
       // Show step by step directions
       this.directionsDisplay.setPanel(document.getElementById('directionsText'));

       var originAutocomplete = new google.maps.places.Autocomplete(
           originInput, {placeIdOnly: true});
       var destinationAutocomplete = new google.maps.places.Autocomplete(
           destinationInput, {placeIdOnly: true});

       this.setupClickListener('changemode-driving', 'DRIVING');
       this.setupClickListener('changemode-walking', 'WALKING');
       this.setupClickListener('changemode-transit', 'TRANSIT');

       this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
       this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

       this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
       this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
       this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
     }

     // Sets a listener on a radio button to change the filter type on Places
     // Autocomplete.
     AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
       var radioButton = document.getElementById(id);
       var me = this;
       radioButton.addEventListener('click', function() {
         me.travelMode = mode;
         me.route();
       });
     };

     AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
       var me = this;
       autocomplete.bindTo('bounds', this.map);
       autocomplete.addListener('place_changed', function() {
         var place = autocomplete.getPlace();
         if (!place.place_id) {
           window.alert("Please select an option from the dropdown list.");
           return;
         }
         if (mode === 'ORIG') {
           me.originPlaceId = place.place_id;
         } else {
           me.destinationPlaceId = place.place_id;
         }
         me.route();
       });

     };

     AutocompleteDirectionsHandler.prototype.route = function() {
       if (!this.originPlaceId || !this.destinationPlaceId) {
         return;
       }
       var me = this;

       this.directionsService.route({
         origin: {'placeId': this.originPlaceId},
         destination: {'placeId': this.destinationPlaceId},
         travelMode: this.travelMode
       }, function(response, status) {
         if (status === 'OK') {
           me.directionsDisplay.setDirections(response);
         } else {
           window.alert('Directions request failed due to ' + status);
         }
       });
     };

=======
var latitude;
var longitude;

// CREATE MAP
function initMap() {
 var map = new google.maps.Map(document.getElementById('map'), {
   // So you can't change to satellite view
   mapTypeControl: false,
   // Sets Los Angeles as the map center
   center: {lat: 34.0522, lng: -118.2437},
   // Higher number, more zoomed in
   zoom: 11,
   // Creates map button to toggle full screen
   fullscreenControl: true
 });

 // Creates a constructor for an object constructor function?
 new AutocompleteDirectionsHandler(map);

 // ================================= ADD PLACES TO THE MAP =================================
 // For the places input
 var input = document.getElementById('pac-input');
 // google.maps.places.SearchBox class provides query predictions based on text entry listeners
 var searchBox = new google.maps.places.SearchBox(input);
 // Positions the search box to the top left of map
 map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

 // Bias the SearchBox results towards current map's viewport.
 map.addListener('bounds_changed', function() {
   searchBox.setBounds(map.getBounds());
 });

 var markers = [];
 // Listen for the event fired when the user selects a prediction and retrieve
 // more details for that place.
 searchBox.addListener('places_changed', function() {
   var places = searchBox.getPlaces();
   var placeName = places[0].name;
   // console.log(places[0].name);

   if (places.length == 0) {
     return;
   }

   // Clear out the old markers.
   markers.forEach(function(marker) {
     marker.setMap(null);
   });
   markers = [];

   // For each place, get the icon, name and location.
   var bounds = new google.maps.LatLngBounds();
   places.forEach(function(place) {
     // console.log(place);
     if (!place.geometry) {
       console.log("Returned place contains no geometry");
       return;
     }
     var icon = {
       url: place.icon,
       size: new google.maps.Size(71, 71),
       origin: new google.maps.Point(0, 0),
       anchor: new google.maps.Point(17, 34),
       scaledSize: new google.maps.Size(25, 25)
     };

     // Create a marker for each place.
     var marker = new google.maps.Marker({
       map: map,
       icon: icon,
       title: place.name,
       // JSON
       position: place.geometry.location
     });
     markers.push(marker);

   // ---------------------------- CLICK MARKERS TO GET LAT/LNG ----------------------------
   marker.addListener('click', function(event) {
     latitude = event.latLng.lat();
     longitude = event.latLng.lng();
     // console.log( latitude + ', ' + longitude );

   });
   // --------------------------------------------------------------------------------------
     if (place.geometry.viewport) {
       // Only geocodes have viewport.
       bounds.union(place.geometry.viewport);
     } else {
       bounds.extend(place.geometry.location);
     }
   });
   map.fitBounds(bounds);
 });
// ================================= End of add places =================================
}
// ======================== End of initMap(); Start directions =========================
// Object constructor function
function AutocompleteDirectionsHandler(map) {
 this.map = map;
 this.originPlaceId = null;
 this.destinationPlaceId = null;
 this.travelMode = 'DRIVING';
 var originInput = document.getElementById('startPoint');
 var destinationInput = document.getElementById('endPoint');
 var modeSelector = document.getElementById('mode-selector');
 this.directionsService = new google.maps.DirectionsService;
 this.directionsDisplay = new google.maps.DirectionsRenderer;
 this.directionsDisplay.setMap(map);
 // Show step by step directions
 this.directionsDisplay.setPanel(document.getElementById('directionsText'));

 var originAutocomplete = new google.maps.places.Autocomplete(
     originInput, {placeIdOnly: true});
 var destinationAutocomplete = new google.maps.places.Autocomplete(
     destinationInput, {placeIdOnly: true});

 this.setupClickListener('changemode-driving', 'DRIVING');
 this.setupClickListener('changemode-walking', 'WALKING');
 this.setupClickListener('changemode-transit', 'TRANSIT');

 this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
 this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

 this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
 this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
 this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.

// Every JavaScript object has a prototype. The prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.
AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
 var radioButton = document.getElementById(id);
 var me = this;
 // console.log(me);
 radioButton.addEventListener('click', function() {
   me.travelMode = mode;
   me.route();
 });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
 var me = this;
 autocomplete.bindTo('bounds', this.map);
 autocomplete.addListener('place_changed', function() {
   var place = autocomplete.getPlace();
   console.log(place);
   if (!place.place_id) {
     window.alert("Please select an option from the dropdown list.");
     return;
   }
   if (mode === 'ORIG') {
     me.originPlaceId = place.place_id;
   } else {
     me.destinationPlaceId = place.place_id;
   }
   me.route();
 });

};

AutocompleteDirectionsHandler.prototype.route = function() {
 if (!this.originPlaceId || !this.destinationPlaceId) {
   return;
 }
 var me = this;
 var waypts = [];
     waypts.push({
       location: new google.maps.LatLng(latitude,longitude),
       stopover: true
     });

// =======================CLEAN THIS UP
 if (latitude === undefined) {
   this.directionsService.route({
     origin: {'placeId': this.originPlaceId},
     destination: {'placeId': this.destinationPlaceId},
     travelMode: this.travelMode
   }, function(response, status) {
     if (status === 'OK') {
       me.directionsDisplay.setDirections(response);
     } else {
       window.alert('Directions request failed due to ' + status);
     }
   });
 }
 else {
 this.directionsService.route({
   origin: {'placeId': this.originPlaceId},
   waypoints: waypts,
   destination: {'placeId': this.destinationPlaceId},
   travelMode: this.travelMode
 }, function(response, status) {
   if (status === 'OK') {
     me.directionsDisplay.setDirections(response);
   } else {
     window.alert('Directions request failed due to ' + status);
   }
 });
 }
};
>>>>>>> master
