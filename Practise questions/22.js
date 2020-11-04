// Write a JavaScript function to merge two arrays and removes all duplicates elements.
// Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
    var com = array1.concat(array2)
    function dup(arr){
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

console.log(dup(com))