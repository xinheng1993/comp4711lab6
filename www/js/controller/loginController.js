$(()=>{
    $('body').on('click','.signup',function(){
        controller.signup()
    })
    $('body').on('click','.submit',function(){
        controller.submit()
    })
    $('body').on('click','.back',function(){
        view.init()
    })
})

var controller ={
    signup:()=>{
        view.changeTosignup()
    },
    submit:()=>{
        let first = $('.password').val()
        let second = $('.confirm').val()
        if(first !== second || (!first||!second)){
            view.error('.password')
            view.error('.confirm')
            view.differentpassword()
        }else{
            view.samepassword()
        }
        
    }
}