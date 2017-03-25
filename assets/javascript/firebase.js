
  //<script src="https://www.gstatic.com/firebasejs/3.7.2/firebase.js"></script> 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAUg1plSkJn11Oq01PNfhWTDUjfzO2GJoc",
    authDomain: "along-the-way-161918.firebaseapp.com",
    databaseURL: "https://along-the-way-161918.firebaseio.com",
    storageBucket: "along-the-way-161918.appspot.com",
    messagingSenderId: "250257772204"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //listener for capturing user input
  $("#submit").on("click", function(event){
  	event.preventDefault();

  	var userName = $("#userName").val().trim();
  	var favoritePlaces = $("#pac-input").val().trim();

  var newUser = {
  	name: userName,
  	favorites: [favoritePlaces]

  };

  database.ref().push(newUser);

  	console.log(newUser.name);
  	
  	console.log(newUser.favoritePlaces);


  });

//event listener for updating favorites
 $("#update").on("click", function(event){
    event.preventDefault(); 

    var userName = $("#userName").val().trim();
    var favoritePlaces = $("#pac-input").val().trim();

    var theKey = "";
    database.ref().once("value", function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var childData = childSnapshot.val();
        for (var prop in childData) {
          if (childData [prop] === userName){
            console.log("found it!");
            console.log(childSnapshot.key)
            theKey = childSnapshot.key;
          }
        }
      });
    });

    var updateRef= database.ref().child(theKey);
    updateRef.update({
      "favorites": favoritePlaces.push();
    });


   
});



