// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

let GuestArr: string [] = ["Ali", "Waseem", "Saad", "Asad"];
let canNotAttend: string = "Ali";

let newGuest: string = "Hassan";
GuestArr [GuestArr.indexOf(canNotAttend)] = newGuest;

GuestArr.map((items) => (console.log(`Dear ${items} , You are invited to Dinner`)));


