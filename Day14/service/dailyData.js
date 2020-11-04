var sqlConnect = require('../config/db')

var daily ={}

daily.getData=()=>{
    return new Promise((resolve,reject)=>{
        sqlConnect.query('select * from daily_list ',function(err,result){
            if(err){
                reject(err)
            }
            else{
                resolve(result)

            }

        })
    })
}

daily.postData =(no,did,quan)=>{
    return new Promise ((resolve,reject)=>{
        sqlConnect.query('insert into daily_list values(?,?,?)',[no,did,quan],function(err,result){
            if(err){
                reject(err)
            }
            else{
                resolve("done")
            }
        })
    })
}

module.exports = daily