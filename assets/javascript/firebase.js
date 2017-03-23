
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
  	// console.log(newUser.favoritePlaces);


  });

//event listener for sign in button
 $("#sign-in").on("click", function(event){
    event.preventDefault(); 

    var userName = $("#userName").val().trim();

    dataRef.ref().once("value", function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var childData = childSnapshot.val();
        for (var prop in childData) {
          if (childData [prop] === userName){
            console.log(childSnapshot.key)
          }
        }
      });
    });



    /*var query = firebase.database().ref("users").orderByKey();
    query.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();

      console.log(key);
      console.log(childData);
  });*/
});



