/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
$(()=>{
    $('body').on('click','.signup',()=>{
        controller.signup()
    })
    $('body').on('click','.Go',()=>{
        controller.submit()
    })
    $('body').on('click','.back',()=>{
        view.init()
    })
    $('body').on('click','.login',()=>{
        controller.login()
    })
})
var controller ={
    check_login:()=>{
        let firebase = app_firebase;
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                window.location.replace("index.html");
            }
          });
    },
    signup:()=>{
        view.changeTosignup()
    },
    submit:()=>{
        model.signup_user();
    },
    login:()=>{
        let email = $('.email').val()
        let password = $('.password').val()       
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            controller.check_login()
        })
        .catch((error)=> {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            view.error_message(errorMessage)
          });
    }
}