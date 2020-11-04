// Write a JavaScript function to capitalize the first letter of each word in a string.

var str = "hi abhay"
var str1
var str2
function f1(str){
    for (i=0;i<str.length;i++){
        str1 = str.charAt(0).toUpperCase() + str.substr(1)
        if(str1[i]==" "){
            str2= str1.substr(i)+str1.charAt(i+1).toUpperCase()+str1.substr((str1.length-(i+2)))
        }
    }
    return str2
}

f1(str)
console.log(str2)

// var str = "hi abhay"
// function f1(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// console.log(f1(str))
