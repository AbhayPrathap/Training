// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"


function lonCountry(name){
    return name.reduce(function (longest,country){
        return longest.length > country.length ? longest : country;
    });
}
console.log(lonCountry(["Australia", "Germany", "United States of America"]))





    


