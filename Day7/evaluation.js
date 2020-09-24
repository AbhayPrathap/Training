var fetch = require('node-fetch')

process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0

async function email(){
    let Url = await fetch('https://jsonplaceholder.typicode.com/comments')
    let data = await Url.json()
    return data
} 

email().then(res=>{
    let sam = res.filter(r=>r.email == 'Nikita@garfield.biz')
    console.log(sam)

}).catch(err=>console.log(err))

var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}