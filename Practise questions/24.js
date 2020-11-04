// Write a JavaScript function to check whether an `input` is a string or not.
function test(inp){
    if (typeof(inp)==="string"){
        return true
    }
    else{
        return false
    }

}
console.log(test(5))
console.log(test('str'))