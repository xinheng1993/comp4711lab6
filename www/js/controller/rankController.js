var mainApp = {};
(()=>{
    let firebase = app_firebase;
    var uid = null;
    firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else{
            uid = null;
            window.location.replace("login.html"); 
        }
      });
      function logout(){
          firebase.auth().signOut();
      }
      mainApp.logOut = logout;
})()

$(()=>{
    //go back to game
    $('body').on('click','#back',()=>{
        window.location.replace("index.html");
    })
})