$(document).ready(()=>{
    model.init();
});

let firebase = app_firebase;
var model = {
    init:()=>{
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                name = user.displayName;
                uid = user.uid;
                email = user.email;
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