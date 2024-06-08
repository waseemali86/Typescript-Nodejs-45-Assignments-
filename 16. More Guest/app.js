"use strict";
// More Guests: You just found a bigger dinner table, 
// so now more space is available. Think of three
// more guests to invite to dinner.
let GuestArr = ["Ali", "Waseem", "Saad", "Asad"];
let canNotAttend = "Ali";
let newGuest = "Hassan";
GuestArr[GuestArr.indexOf(canNotAttend)] = newGuest;
console.log(GuestArr);
GuestArr.map((items) => console.log(`Dear ${items}, I found a bigger Dinner table so I invited more peoples`));
// BEGIN
let begGuest = "Nazim";
GuestArr.unshift(begGuest);
console.log(GuestArr);
// MIDDLE 
let middleGuest = "Hammad";
let middleIndex = GuestArr.length / 3;
GuestArr.splice(middleIndex, 0, middleGuest);
console.log(GuestArr);
// END Append
GuestArr.push("Sajid");
console.log(GuestArr);
// last part
GuestArr.map((items) => console.log(`Dear ${items}, you are invited more people category to attend Dinner`));
