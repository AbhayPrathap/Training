// Write a JavaScript function to insert a string within a string at a particular position 

function f1(originalString,stringInsert, position) {
    if(typeof(position) == "undefined") {
     position = 0;
   }
    if(typeof(stringInsert) == "undefined") {
     stringInsert = '';
   }
    return originalString.slice(0, position) + stringInsert + originalString.slice(position);
     }

     console.log(f1('Abhay Prathap','P ',6))