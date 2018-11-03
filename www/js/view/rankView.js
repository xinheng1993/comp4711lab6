
var view = {
    loading:()=>{
        $(".rankborder").append('<div class="col-lg-12 loading"><div><h1>Loading</h1></div></div>')
    },
    setuser:(name)=>{
        $(".user").html(name)
    }, 
    loaddata:(rank,name,email,score)=>{
        $('.loading').remove();
        $(".rankborder").prepend(view.rankdata(rank,name,email,score));
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