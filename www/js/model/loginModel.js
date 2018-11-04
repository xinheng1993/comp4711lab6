/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
$(function(){
    model.init();
})
var model = {
  init:()=>{
    view.init();
  },
  signup_user:()=>{
    let email = $('.email').val();
    let name = $('.username').val();
    let first = $('.password').val();
    let second = $('.confirm').val();
    if(first !== second || (!first||!second)){
        view.error('.password');
        view.error('.confirm');
        view.differentpassword();
    }else if(!name){
        view.error('.username');
        view.error_message("please enter you username")
    }else{
      let firebase = app_firebase;
        firebase.auth().createUserWithEmailAndPassword(email, first).then((data)=> {
            console.log("create user:",data.user);
            data.user.updateProfile({displayName:name});
                //.then(()=>{controller.check_login();});
          }).catch((error) =>{
            console.log(error);
            if(error.code == "auth/invalid-email"){
                view.error('.email');
                view.error_message("invalid-email");
            }else if(error.code == "auth/email-already-in-use"){
                view.error('.email');
                view.error_message("email-already-in-use")
            }else if(error.code == "auth/weak-password"){
                view.error('.password');
                view.error('.confirm');
                view.error_message("Password should be at least 6 characters")
            }
        });
    }
  }
}