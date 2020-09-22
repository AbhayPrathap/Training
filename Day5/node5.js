// function f1(){
//     setTimeout(function(){
//         console.log("F1"),2000
//     })
    
// }
// function f2(){
//     console.log("F2")
// }
// function f3(){
//     console.log("F3")
// }

// f1()
// f2()
// f3()
/////////////////////////////////////////////

// function f1(callback){
//     setTimeout(function(){ 
//         console.log("F1")
//         callback()
//     },2000)
    
// }
// function f2(){
//     console.log("F2")
// }
// function f3(){
//     console.log("F3")
// }

// f1(function(){
//     f2()
//     f3()
// })


///////////////////////////////////////////////

var sub1=30
var sub2 = 40
var sub3 = 45

function total(callback){
    setTimeout(()=>{
        callback(sub1+sub2+sub3)
    }, 2000)
}

function average (){
    total(function(total){
        console.log(total/3)

    })
}
average()