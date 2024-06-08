// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface type {
    Name: string, Age:number, Study:string, 
}

let obj: type = {Name:'Waseem', Age:17, Study:'Matric'};

console.log(`\n Obj contain ABOUT MYSELF: \n`);
console.log(`My Name is : ${obj.Name}`);
console.log(`I am a ${obj.Age} Years old`);
console.log(`I am study in ${obj.Study}`);


