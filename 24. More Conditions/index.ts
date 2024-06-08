// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:

let app1 = "Facebook"
let app2 = "Watsapp"
let num1 = 15
let num2 = 20
let Arr = [1,3,5,7,9]


// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings :");
console.log(app1 === 'Facebook');
console.log(app1 === app2);


// Tests using the lower case function
console.log("\n Tests using the lower case function :");
console.log(app1.toLowerCase() === 'facebook');
console.log(app2.toLowerCase() !== 'watsapp');


// Numerical tests involving equality and inequality, greater than and
// less than, greater than or equal to, and less than or equal to
console.log("\n Numerical tests :");
console.log(1 < 2);
console.log(num1 >= num2);


// Tests using "and" and "or" operators
console.log("\n Tests using 'and' and 'or' operators :");
console.log((num1 < 20) && (num2 > 15));
console.log((num1 < 8) || (num2 < 25));


// Test whether an item is in a array
console.log("\n Test whether an item is in a array :");
console.log(Arr.includes(5));
console.log(Arr.includes(8));


// Test whether an item is not in a array
console.log("\n Test whether an item is not in a array :");
console.log(!Arr.includes(4));
console.log(!Arr.includes(3));

