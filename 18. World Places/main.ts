// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.

let favoritePlaces: string[] = ["Makkah", "Kashmir", "Gorakh Hill", "K2 Peak", "Naran Kagan"]

// Print your array in its original order.

console.log("original order  " + favoritePlaces);

// Print your array in alphabetical order without modifying the actual list.

console.log("alphabetical order  " + [...favoritePlaces].sort());

// Show that your array is still in its original order by printing it.

console.log("original order  " + favoritePlaces);


// Print your array in reverse alphabetical order without changing the order of the original list.

console.log("reverse alphabetical order  " + [...favoritePlaces].sort().reverse());


// Show that your array is still in its original order by printing it again.

console.log("original order  " + favoritePlaces);


// Reverse the order of your list. Print the array to show that its order has changed.

console.log("Reverse the order of your list  " + favoritePlaces.reverse());


// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Reverse the order of your list again  " + favoritePlaces.reverse());


// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("alphabetical order  " + favoritePlaces.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("alphabetical order  " + favoritePlaces.sort().reverse());