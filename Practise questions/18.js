// Write a JavaScript program to remove duplicate items from an array

function dup(arr) {
    var i;
    ans = [];
    arra = {}

    for (i = 0; i < arr.length; i++) {
        arra[arr[i]] =0

    }
    for (i in arra) {
        ans.push(i)
    }
    return ans;
}

var ar = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(dup(ar))





