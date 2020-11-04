// Write a JavaScript function that generates all combinations of a string
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// var mystring = 'dog'
// var n = mystring.length
// var arr = []
// for (i = 0; i < n; i++) {
//     arr[i] = mystring.charAt(i)
// }

// for (j = 0; j < arr.length; j++) {
//     for (k = j + 1; k <= n + 1; k++) {
//         arr.push(mystring.slice(j,k))
//     }

// }
// console.log(arr);


function f1 (x) {
    arr = new Array();
    for(i=0;i<x.length;i++) {
        for(j=i+1;j<x.length+1;j++) {
            arr.push(x.slice(i, j));
        }
    }
    return arr;
 }

console.log(f1("dog"))