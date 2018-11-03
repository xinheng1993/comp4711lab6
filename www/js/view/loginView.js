/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
var view = {
    init:(uiConfig)=>{
        let ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
}