// Write a JavaScript function to extract unique characters from a string
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"


function f1(mystring)
{
 var str=mystring;
 var letter="";
 for (i =0;i < str.length;i++)
 {

 if(letter.indexOf(str.charAt(i))==-1)
  {
  letter += str[i];  
  
   }
  }
  return letter;  
}  
console.log(f1("thequickbrownfoxjumpsoverthelazydog"));