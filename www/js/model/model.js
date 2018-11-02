
$(document).ready(function(){
    model.init()

});
//the words collection
let dictionary=[
    {word:"Tattoo",def:"a form of body modification where a design is made by inserting ink"},
    {word:"electricity",def:"is the set of physical phenomena associated with the presence and motion of electric charge."},
    {word:"Apple",def:"iphon,ipad"},
    {word:"red",def:"any of various colors resembling the color of blood"},
    {word:"ability",def:"The word is a noun that refers to the skills that a person has"},
    {word:"welter",def:"turmoil a bewildering jumble"},
    {word:"Catch",def:"seize, grasp"},
    {word:"abandon",def:"forsake, desert, to cast off"},
    {word:"abject",def:"mean, degraded, miserable"},
    {word:"above ",def:"on the upside, higher than, more than"}
];

let answer;
let hit;
//let firebase = app_firebase;
//model object which contains all model functions
var model={
    //initial the game
    init:function(){
        let choose;
        // let user = firebase.auth().currentUser;
        // let name;
        // if (user != null) {
        //     name = user.displayName;
        //     uid = user.uid;
        // }
        hit = 0;
        choose = Math.floor(Math.random() * (dictionary.length - 1));
        answer = dictionary[choose].word;
        view.init(dictionary[choose].def,name);
    },
    //check if the letter user choosed is contained by the word
    check_word:function(word){
        let find = false;
        let get_score = 0;
        for(var i = 0; i<answer.length;i++){
            if(answer[i].toLowerCase() === word.toLowerCase()){
                $("#"+i).html(word)
                hit++;
                find = true;
                get_score++;
            }
        }
        if(find === false){
            view.find_false(word)
        }else{
            view.find_sucess(word,get_score)
        }
        controller.check_game_over();
    },
    reload:function(){
        let choose;
        hit = 0;
        choose = Math.floor(Math.random() * (dictionary.length - 1));
        answer = dictionary[choose].word;
        view.reload(dictionary[choose].def);
    }
}
