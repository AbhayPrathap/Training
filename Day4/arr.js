var students = { name: "abhay", age: 20, libid: { class: 6, slno: 15 } }

var college = [{ name: "abhay", age: 20, libid: { class: 6, slno: 15 } },
{ name: "aja", age: 22, libid: { class: 6, slno: 15 } }]

// console.log(students.libid.slno)
// console.log(college[0])
// var as = college.filter(x=> x.age==20)
// console.log(as)

var as = college.map(x=> {
    x.age+=10

}
)
console.log(college)
