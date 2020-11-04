const fs = require('fs')

// fs.writeFile("asd.txt", "New to nodejs", function (err) {
//     if (err){
//         console.log("err")
//     }
//     console.log("new file created location")
// })

// fs.appendFile("asd.txt", "Welcome to js", function (err) {
//     if (err){
//         console.log("err")
//     }
//     console.log("new file created location")
// })

fs.unlink("asd.txt", "Welcome to js", function (err) {
    if (err){
        console.log("err")
        return
    }
    console.log("successfully deleted")
})