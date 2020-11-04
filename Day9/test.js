var 
var reversedNumber = 0;
function rev(n){
while(n > 0) {
    remainder = n % 10;
    reversedNumber = reversedNumber*10 + remainder;
    n /= 10;
}}
console.log(rev(243))