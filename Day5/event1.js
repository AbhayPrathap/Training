var ev = require('events');
var em=new ev.EventEmitter();


var f1 = () =>{
    console.log('function1')
}

var f2 = () =>{
    console.log('function2')
    em.emit("first")
}
em.on("first",f1)
em.on("second",f2)

em.emit("second")


