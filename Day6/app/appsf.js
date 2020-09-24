var fetch = require('node-fetch')

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
async function getApiData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')

    let user = await response.json()
    return user
}

// getApiData().then(
//     res => {if(res.userId ==1)
//         for (var i = 0; i < res.length; i++) { console.log(res[i].title) }
//         // console.log(res[0].title)
//     }).catch(err => console.log(err))

    // getApiData().then(
    //     res => {
    //         res.forEach(element=>{
    //             console.log(element.title)
    //         })
    //     }).catch(err => console.log(err))
    
    getApiData().then(
        // res => {let us = res.filter(r=> r.userId == 1)
        let extr=  res.filter(r => r.userId == 1 )
            (console.log(us))
        }).catch(err => console.log(err))