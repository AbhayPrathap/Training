//Write a JavaScript program to dcapitalize the first letter of a string

function decap(txt)
{
 return txt.charAt(0).toLowerCase() + txt.substr(1)}
console.log(decap('Test'));

