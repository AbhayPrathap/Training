var fetch = require('node-fetch')

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

async function email() {
    let Url = await fetch('https://jsonplaceholder.typicode.com/comments')
    let data = await Url.json()
    return data
}
email().then(res => {
    res.map(x => {
        x.postId += 10
    })
    var an = res.forEach(r=>{
        console.log("postId="+ r.postId,"name="+ r.name)
    })

    
    
}).catch(err => console.log(err))








// for (i=0;i<res.length;i++)
//     console.log(res[i].postId += 10)
//     console
// email().then(res=>{
//     res.(postId=>{
//         postId = postId+10
//     } )


// email().then(res=>{
//     res.map(x=>{
//         x.postId += 10
//     })
//     console.log(res)
//     } ).catch(err=>console.log(err))


