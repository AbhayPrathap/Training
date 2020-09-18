// var arr=[1,2,3,4]
// var sum =0;
// for(var i =0; i<arr.length;i++){
    
//     sum =+ arr[i]}

// document.getElementById("Ans").innerHTML= sum

// console.log(arr[3])
// console.log('length',arr.length)

var ar = new Array();
ar[0]= "Abhay";
ar[1]= "Arun";

//for(var i = 0; i<ar.length;i++){
  //  document.write('<br>' + ar[i] +'<br>')}




function pushData(){
    ar.push("A")
    printData()
}
function popData(){
    ar.pop()
    printData()
}
function printData(){
    for(var i = 0; i<ar.length;i++){
        console.log(ar[i])
}
}