/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
$(document).ready(()=>{
    model.init();
});

let firebase = app_firebase;
var model = {
    init:()=>{
        //check login
        controller.check_login();
        view.loading
        //read user name
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                name = user.displayName;
                view.setuser(name);
            }
        });
        firebase.database().ref("/rank").orderByChild("score").once('value').then((snapshot)=> {
            console.log(snapshot.val())
            let rank = snapshot.numChildren();
            snapshot.forEach((child)=>{
                console.log(child.val().score)
                view.loaddata(rank,child.val().user,child.val().email,child.val().score)
                rank = rank - 1;
            });
            
        });
    }
}