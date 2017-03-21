
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
  	var password = $("#password").val().trim();
  	//var favoritePlaces = $("#addStop").val().trim();

  var newUser = {
  	name: userName,
  	password: password,
  	//favorites: favoritePlaces

  };

  database.ref().push(newUser);

  	console.log(newUser.name);
  	console.log(newUser.password);
  	//console.log(newUser.favoritePlaces);


  });


