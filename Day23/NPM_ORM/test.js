var seq = require('sequelize')

var sequelize = new seq('hotel','root','Mission2022@qatar',{
    host: 'localhost',
    dialect:'mysql'
})

var User = sequelize.define('user',{
    username:seq.STRING,
    birthday:seq.DATE
})

// sequelize.sync().then(function(){
//     return User.create({
//         username:"george",
//         birthday: new Date(1997,07,24)
//     })
// })

User.findOne({where:{id:[1,3]},attributes:['username','birthday']}).then(function(data){
    console.log(JSON.stringify(data))
})

