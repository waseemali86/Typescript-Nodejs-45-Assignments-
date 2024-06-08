// More Guests: You just found a bigger dinner table, 
// so now more space is available. Think of three
// more guests to invite to dinner.

let GuestArr: string [] = ["Ali", "Waseem", "Saad", "Asad"];
let canNotAttend: string = "Ali";

let newGuest: string = "Hassan";
GuestArr [GuestArr.indexOf(canNotAttend)] = newGuest;
console.log(GuestArr);

GuestArr.map((items) => 
    console.log(`Dear ${items}, I found a bigger Dinner table so I invited more peoples`)
);

// BEGIN
let begGuest: string = "Nazim";
GuestArr.unshift(begGuest);
console.log(GuestArr);

// MIDDLE 
let middleGuest: string = "Hammad";
let middleIndex = GuestArr.length/3;
GuestArr.splice(middleIndex,0,middleGuest);
console.log(GuestArr);

// END Append
GuestArr.push("Sajid");
console.log(GuestArr);

// last part
GuestArr.map((items) => 
    console.log(`Dear ${items}, you are invited more people category to attend Dinner`));
