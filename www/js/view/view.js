var view={
    //init all componts of the game
    init:function(definition,name){
        $(".letter_hide").remove();
        $(".deftext").remove();
        $(".letterbtn").remove();
        console.log("answer:",answer);
        for(let i = 0; i<answer.length;i++){
            $(".word").append("<h1 id='"+i+"' class='letter_hide'>*</h1>");
        }
        for (let i = 65; i <= 90; i++) {
            $(".btn-group-lg").append("<button type='button' id = '"+String.fromCharCode(i)+"' class='letterbtn btn btn-primary'>"+String.fromCharCode(i)+"</button>");
        }
        $(".definition").append("<h7 class='deftext'>Definition:   "+definition+"</h7>");
        $("#chance").html(7);
        $("#score").html(0);
        view.setuser(name);
        console.log("user:");
    },
    //reset the game
    reload:function(definition){
        $(".letter_hide").remove();
        $(".deftext").remove();
        console.log(answer)
        for(let i = 0; i<answer.length;i++){
            $(".word").append("<h1 id='"+i+"' class='letter_hide'>*</h1>");
        }
        $(".letterbtn").css({backgroundColor: '','border-color':''});
        $(".letterbtn").prop('disabled',false);
        $(".definition").append("<h7 class='deftext'>Definition:   "+definition+"</h7>");
        $("#chance").html(7);
    },
    //if cannot find the letter in the word, chance - 1 change btn status
    find_false:function(word){
        $("#chance").html($("#chance").html()-1);
        $("#"+word).prop('disabled',true);
        $("#"+word).css({backgroundColor: 'red','border-color':'red'});
        $("#score").html(parseInt($("#score").html())-1);
    },
    //if find the letter in the word, score + 1 change btn status
    find_sucess:function(word,get_score){
        $("#"+word).prop('disabled',true);
        $("#"+word).css({backgroundColor: 'green','border-color':'green'});
        $("#score").html(parseInt($("#score").html())+get_score);     
    },
    //show game over
    game_over:function(){
        $(".letter_hide").remove();
        $(".deftext").remove();
        $(".definition").append("<div class='deftext'>Answer: " + answer+"</div>");
        $(".word").append("<h1 class='letter_hide'>GAME OVER</h1>");
        $(".letterbtn").prop('disabled',true);        
    },
    //show sucess
    game_sucess:function(){
        $(".letter_hide").remove();
        $(".deftext").remove();
        $(".definition").append("<div class='deftext'>Answer: " + answer+"</div>");
        $(".word").append("<h1 class='letter_hide'>WINNER</h1>");
        $(".letterbtn").prop('disabled',true);        
    },
    setuser:function(name){
        $(".user").html(name)
    }  
}