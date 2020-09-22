// var events=require('events');

// var eventEmitter = new events.EventEmitter();


// var sample = function f1(){
//     console.log('hi welcome')
// }

// eventEmitter.on("sampleEx",sample)

// eventEmitter.emit('sampleEx')


///////////////////////////////////////////////////////

var events=require('events');

var eventEmitter = new events.EventEmitter();


var sample = function f1(){
    console.log('hi welcome')
}
var sample1 = function f1(){
    var a = 5
    var b = 6

    console.log('Sum='+ (a+b))
}
eventEmitter.on("sampleEx",sample)
eventEmitter.on("sampleEx",sample1)
eventEmitter.emit('sampleEx')
