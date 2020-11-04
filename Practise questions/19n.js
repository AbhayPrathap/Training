// Write a JavaScript program to find duplicate values in a JavaScript array.


function dup(arr) {
    ans = []
    arr1 = {}
    arr.forEach(function (num) {
        if (!arr1[num])
            arr1[num] = 0
        // console.log(arr1[num])
        arr1[num] += 1

    })
    for (var i in arr1) {
        // console.log(i)
        if (arr1[i] >= 2) {
            console.log(arr1[i])
            ans.push(i)
        }

    }
    return ans;

}
console.log(dup([10, 15, 10, 1, 2, 8, 3, 9, 8, 2, 3]));