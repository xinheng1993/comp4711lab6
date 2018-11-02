(function(){
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
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
    ui.start('#firebaseui-auth-container', uiConfig);
})()
var view = {
    init:function(){
        $('.buttons').remove();
        $('.enter').remove();
        $(".info").remove();
        $('.inputarea').append(view.inputs());
        $('.buttongroup').append(view.buttons());
    },
    inputs:function(){
        return '<input type="text" class="form-control enter username" placeholder="username">'+
                '<input type="text" class="form-control enter password" placeholder="password">'
    },
    confirmpass:function(){
        return '<input type="text" class="form-control enter confirm" placeholder="enter same password">'
    },
    buttons:function(){
        return '<button type="button" class="btn btn-success buttons login">login</button>\
                <button type="button" class="btn btn-info buttons signup">sign up</button>'
    },
    submitButton:function(){
        return '<button type="button" class="btn btn-success buttons submit">submit</button>'
    },
    backButton:function(){
        return '<button type="button" class="btn btn-info buttons back">back to login</button>'
    },
    error :function(selector1,selector2){
        $(selector1,selector2).css("background-color", "pink");
    },
    checked:function(selector1,selector2){
        $(selector1,selector2).css("background-color", "");
    },
    changeTosignup:function(){
        $('.inputarea').append(view.confirmpass());
        $('.buttons').remove();
        $('.buttongroup').append(view.submitButton());
        $('.buttongroup').append(view.backButton());
    },
    differentpassword:function(){
        $(".info").remove();
        $(".notify").append("<div class='info fail'>please input same password</div>")
    },
    samepassword:function(){
        $(".info").remove();
        $(".notify").append("<div class='info sucess'>sucess</div>")
        $('.buttons').remove();
        $('.enter').remove();
        $('.buttongroup').append(view.backButton());
    }
}