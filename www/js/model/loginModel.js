$(function(){
    model.init();
})
var model = {
    init:()=>{
        controller.check_login();
        let uiConfig = {
            callbacks: {
              signInSuccessWithAuthResult: (authResult, redirectUrl)=>{
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
              },
              uiShown: ()=> {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
              }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: 'index.html',
            signInOptions: [
              // Leave the lines as is for the providers you want to offer your users.
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            // Terms of service url.
            tosUrl: 'index.html',
        };
        view.init(uiConfig);
    }
}