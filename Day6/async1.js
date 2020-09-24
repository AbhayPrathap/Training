async function dummy(){
    let promise = new Promise ((resolve,reject)=>{
        setTimeout(( )=> {
            resolve("Done!")
        },2000)
    })
    let result = await promise 
    return result
}

dummy().then(res => {
    console.log(res)
})

////////////////////
//while using reject conditions , add error resolving commands

async function dummy(){
    let promise = new Promise ((resolve,reject)=>{
        setTimeout(( )=> {
            reject("Error caught")
        },2000)
    })
    let result = await promise 
    return result
}

dummy().then(res => {
    console.log(res)
}).catch(err=>console.log(err))