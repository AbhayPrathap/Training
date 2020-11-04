// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function p(num){
    for(i = 2; i < num/2; i++)
    {
      if(num % i == 0)
      {
        return (num +"is Prime")
      }
    
        return (num +"is Prime") 


    }}


console.log(p(37));

