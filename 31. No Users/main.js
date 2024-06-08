"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
let usernames = ['admin', 'saad', 'waseem', 'saim', 'anas'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
else {
    usernames = [];
    console.log("All members have been removed " + usernames.length);
}
