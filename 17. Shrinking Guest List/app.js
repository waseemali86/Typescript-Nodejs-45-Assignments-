"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive
// in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names
let guests = ["Ali", "Hassan", "Saad", "Saim", "Anas"];
console.log("Due to limited space , only two people can be invited for Dinner.");
// remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you are no longer invited to Dinner.`);
}
// Print a message to each of the two people still on your list,
// letting them know they’re still invited.
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited for Dinner`);
});
// Remove the last two names from your list, so you have an empty list.
let Guests = ["Ali", "Hassan"];
// Print your list to make sure you actually have an empty list at the end of your program.
guests.pop();
guests.pop();
console.log("Final Guest List:", guests);
