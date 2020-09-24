async function example(){
    return "Hi! How r u?"
}
example().then(
    res => console.log(res)
)


function getdata(){
    return new Promise(
        resolve => {
            setTimeout(()=> {
                resolve("Resoved Data"), 
                1000});
            }
    )
}

async function getAsyncData(){
    console.log("Reached")
    const result = await getdata()
    console.log(result)
}
getAsyncData()