// console.log(__dirname)
// console.log(__filename)


// if  (process.argv[2]=='dev'){
//     console.log("you are in development mode")
// }
// else if (process.argv[2]=='prod'){
//     console.log("you are in production")
// }
// else{
//     console.log("Default mode")
// }
//////////////////////////////////////////////////////////////////
// function a(){
//     console.log(process.argv)
//     switch(process.argv[2]){
//         case 'dev':
//             {
//                 console.log("you are in development mode") 
//             }
//             break
//         case 'prod':
//             {
//                 console.log("you are in production") 
//             }
//             break
//         default:
//             {
//                 console.log("Default mode") 
//             }
//     }

// }
// a()

//////////////////////////////////////////////////////////////

console.log(process.execPath)
console.log(process.platform)

console.log(process.cwd())
console.log(process.version)
console.log(process.memoryUsage())
console.log(process.config)