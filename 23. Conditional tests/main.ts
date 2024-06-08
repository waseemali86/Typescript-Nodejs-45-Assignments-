// Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the
// results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// Look closely at your results, and make sure you understand why each line evaluates to True or False.

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// 5 True Tests
 let car: string = 'subaru'
 console.log("\n ---> 5 True conditions tests :");

// 01 Test
console.log("Is car == 'subaru'? I think true ");
console.log(car === 'subaru');

// 02 Test
console.log("Is car != 'toyota'? I think true ");
console.log(car !== 'toyota');

// 03 Test 
console.log("Is the lenght of car > 4? I think true");
console.log(car.length > 4);

// 04 Test 
console.log("Is the lenght of car <= 6? I think true");
console.log(car.length <= 6);

// 05 Test
console.log("Does car start with 's'? I think true");
console.log(car.startsWith('s'));



console.log("\n ---> 5 False conditions tests :");

// 01 Test
console.log("Is car == 'toyota'? I think False ");
console.log(car === 'toyota');

// 02 Test
console.log("Is car in uppercase? I think False ");
console.log(car.toUpperCase() === car);

// 03 Test 
console.log("Is car === 'Subaru'? I think False ");
console.log(car === 'Subaru');

// 04 Test 
console.log("Is car == 'Audi'? I think False ");
console.log(car === 'Audi');

// 05 Test
console.log("Is the lenght of car === 8? I think False ");
console.log(car.length === 8);



