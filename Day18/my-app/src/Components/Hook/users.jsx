const users =[
    {first:"Abhay",second:"P"},
    {first:"Aja",second:"ram"},
    {first:"Adith",second:"H"}

]
export const searchUser=first=>{
    return users.filter(res=>res.first.toLowerCase().includes(first.toLowerCase()))
}