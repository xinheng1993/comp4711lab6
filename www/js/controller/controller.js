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
    //tell model to check the letter which user choosed is contained by the word
    $('body').on('click','.letterbtn',()=>{
        model.check_word(event.target.innerHTML)
    })
    //tell model to skip current word the game
    $('body').on('click','#next',()=>{
        model.next()
    })
    //tell model to reload the game
    $('body').on('click','#reload',()=>{
        model.reload()
    })
    //go to rank page
    $('body').on('click','#rank',()=>{
        window.location.replace("rank.html"); 
    })    
})

var controller ={
    //check if the game should close. display corresponding text
    check_game_over:()=>{
        if($("#chance").html()==0){
            view.game_over();
            
        }
        if($("#chance").html()!=0 && hit == answer.length){
            view.game_sucess()
        }
    },
    submitscore:()=>{
        model.submitscore()
    }   
}