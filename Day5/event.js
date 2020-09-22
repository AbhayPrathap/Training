var ev = require('events');
var em=new ev.EventEmitter();
var myString = "Welcome to kodaikkanal"

var arr = [10,25,30,45,50,65,70,85]


var sumarr=function sum(){
    var sum = 0;
    arr.forEach(x=> sum += x)
    console.log(sum)
}
var even = function filter_even(){
    var even = arr.filter(x=> x % 2==0)
    console.log(even)
}

var odd = function filter_even(){
    var odd = arr.filter(x=> x % 2 !==0)
    console.log(odd)
}

var leng = function lengt(){
    console.log(myString.length)
}

var repl = function strRepl(){
    console.log("Before replace", myString)
    console.log(myString.replace('kodaikkanal','ooty'))
}

em.on('numberFunctions',sumarr)
em.on('numberFunctions',even)
em.addListener('numberFunctions',odd)
em.emit('numberFunctions')
em.addListener('stringFunctions',leng)
em.on('stringFunctions',repl)

em.emit('stringFunctions')