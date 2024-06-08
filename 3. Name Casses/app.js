"use strict";
// Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Waseem";
console.log("lowercase:", personName.toLowerCase());
// To UpperCase
console.log("uppercase:", personName.toUpperCase());
// To TitleCase
console.log("titlecase", personName.replace(/\bw/g, c => c.toUpperCase()));
