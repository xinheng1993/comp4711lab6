/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
var controller ={
    check_login:()=>{
        let firebase = app_firebase;
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                window.location.replace("index.html");
            }
          });
    }
}