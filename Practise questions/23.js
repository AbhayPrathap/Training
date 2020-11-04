// Write a JavaScript script to empty an array keeping the original.

arr = [1,23,32,40,1,51]
function f1(){
    for (i=0;i<arr.length;i++)
{
    arr.length=0
}}

var arr1=arr.every(f1)
console.log(arr1)