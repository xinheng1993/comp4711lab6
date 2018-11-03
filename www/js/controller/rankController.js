/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
$(()=>{
    //go back to game
    $('body').on('click','#back',()=>{
        window.location.replace("index.html");
    })
    $('body').on('click','#logout',()=>{
        let firebase = app_firebase;
        firebase.auth().signOut();
    })
    controller.check_login();
})

var controller = {
    check_login:()=>{
        let firebase = app_firebase;
        firebase.auth().onAuthStateChanged((user)=> {
            if (!user) {
                window.location.replace("login.html"); 
            }
          });
    }
}