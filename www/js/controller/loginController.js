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