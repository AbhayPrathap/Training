const http=require('http')

http.createServer(function(req,res){
    res.write("Welcome to http server abhay")

    res.end();
}).listen(8080)
