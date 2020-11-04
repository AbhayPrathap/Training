const os = require('os')

console.log("free memory",os.freemem())
console.log("home directory",os.homedir())
//console.log("hostname,os.hostname()")

console.log("release",os.release())
console.log("release",os.tmpdir())
console.log("release",os.totalmem())
console.log("release",os.type())