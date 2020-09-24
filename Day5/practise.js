var a = 20
var b = 30
var c = 40

function total(callback){
    setTimeout(function(){
        callback(a+c+b),2000
    })
}

function average(){
    total(function(total){
        console.log(total/3)
    })
}

average()