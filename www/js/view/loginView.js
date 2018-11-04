/*
    test url: www.404not-found.com
    git url :https://github.com/xinheng1993/comp4711lab6
*/
var view = {
    // init:(uiConfig)=>{
    //     let ui = new firebaseui.auth.AuthUI(firebase.auth());
    //     ui.start('#firebaseui-auth-container', uiConfig);
    // }，
    init:()=>{
        $('.buttons').remove();
        $('.enter').remove();
        $(".info").remove();
        $('.inputarea').append(view.inputs());
        $('.buttongroup').append(view.buttons());
    },
    inputs:()=>{
        return '<input type="text" class="form-control enter email" placeholder="email">'+
                '<input type="text" class="form-control enter password" placeholder="password">'
    },
    signup_inputs:()=>{
        return  '<input type="text" class="form-control enter username" placeholder="username">'+
                '<input type="text" class="form-control enter password" placeholder="password">'+
                '<input type="text" class="form-control enter confirm" placeholder="enter same password">'                
    },
    buttons:()=>{
        return '<button type="button" class="btn btn-success buttons login">login</button>\
                <button type="button" class="btn btn-info buttons signup">sign up</button>'
    },
    submitButton:()=>{
        return '<button type="button" class="btn btn-success buttons Go">Go</button>'
    },
    backButton:()=>{
        return '<button type="button" class="btn btn-info buttons back">back to login</button>'
    },
    error :function(selector1,selector2){
        $(selector1,selector2).css("background-color", "pink");
    },
    checked:function(selector1,selector2){
        $(selector1,selector2).css("background-color", "");
    },
    changeTosignup:()=>{
        $(".info").remove();
        $('.password').remove();
        $('.inputarea').append(view.signup_inputs());
        $('.buttons').remove();
        $('.buttongroup').append(view.submitButton());
        $('.buttongroup').append(view.backButton());
    },
    differentpassword:()=>{
        $(".info").remove();
        $(".notify").append("<div class='info fail'>please input same password</div>")
    },
    error_message:(error)=>{
        $(".info").remove();
        $(".notify").append("<div class='info fail'>"+error+"</div>")
    },
    signup_success:()=>{
        $(".info").remove();
        $(".notify").append("<div class='info sucess'>sucess</div>")
        $('.buttons').remove();
        $('.enter').remove();
        $('.buttongroup').append(view.backButton());
    }
}