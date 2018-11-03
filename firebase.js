var app_firebase = {};

(function(){
  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyAQWntL3CzgMy0VBBDbSX9Hr55hyVqfGPY",
      authDomain: "comp4711lab6.firebaseapp.com",
      databaseURL: "https://comp4711lab6.firebaseio.com",
      projectId: "comp4711lab6",
      storageBucket: "comp4711lab6.appspot.com",
      messagingSenderId: "1055007832222"
  };
  firebase.initializeApp(config);
  app_firebase = firebase;
})()