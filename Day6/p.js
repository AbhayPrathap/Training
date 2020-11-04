var fetch = require('node-fetch')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

async function getdata() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')

    let user = await response.json()
    return user
}

getdata().then(res => {
    // let s = res.filter(r => r.userId == 1)
    console.log(res)
}).catch(err => console.log(err))