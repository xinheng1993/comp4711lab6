/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
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
    $('body').on('click','#logout',()=>{
        let firebase = app_firebase;
        firebase.auth().signOut();
    })     
})

var controller ={
    check_login:()=>{
        let firebase = app_firebase;
        firebase.auth().onAuthStateChanged((user)=> {
            if (!user) {
                window.location.replace("login.html"); 
            }
          });
    },
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