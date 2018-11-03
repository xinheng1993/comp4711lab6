
var view = {
    setuser:(name)=>{
        $(".user").html(name)
    }, 
    loaddata:(rank,name,email,score)=>{
        $(".rankborder").prepend(view.rankdata(rank,name,email,score))
    },
    rankdata:(rank,name,email,score)=>{
        return '<div class="rankdata">\
        <div class="col-lg-3 rankfront rankIndex">'+rank+'</div>\
        <div class="col-lg-3 rankfront name">'+name+'</div>\
        <div class="col-lg-3 rankfront email">'+email+'</div>\
        <div class="col-lg-3 rankfront score">'+score+'</div>\
        </div>'
    }
}