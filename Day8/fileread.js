const fs = require('fs');
fs.readFile('ex.txt',(err,data)=>{
    if(err){
        console.log("err",err)
    }
    console.log(data.toString())
})

fs.readFile()
//////////////////////


// fs.readFile(file,callback) 

//     console.log("started filereading")
//     callback("err","data")


// fs.readFile('ex.txt',function(err,data){
//     if(err){
//         console.log("err",err)
//     }
//     console.log("data")
// })