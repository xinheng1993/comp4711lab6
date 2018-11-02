// var mainApp = {};
// (function(){
//     let firebase = app_firebase;
//     var uid = null;
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//           uid = user.uid;
//         }else{
//             uid = null;
//             window.location.replace("login.html"); 
//         }
//       });
//       function logout(){
//           firebase.auth().signOut();
//       }
//       mainApp.logOut = logout;
// })()

//tell model to check the letter which user choosed is contained by the word
$(function(){
    $(".letterbtn").click(function(event){
        model.check_word(event.target.innerHTML)
    })
})
//tell model to reset the game
$(function(){
    $("#reload").click(function(){
        model.reload()
    })
})
var controller ={
    //check if the game should close. display corresponding text
    check_game_over:function(){
        if($("#chance").html()==0){
            view.game_over()
        }
        if($("#chance").html()!=0 && hit == answer.length){
            view.game_sucess()
        }
    }   
}