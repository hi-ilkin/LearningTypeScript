/**
 * Useful notes
 * - Compile by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile : tsc sandbox.ts -w
 * - Once something initially decalared, can't change structure and types
 */

 // explicit type defining
 let character: string;
 let age: number;
 let isLoggedIn: boolean;

// arrays: initialize with empty array otherwise push won't work
let ninjas: string[] = [];
ninjas.push('str');

// union types
let mixed: (string|boolean)[] = [];
mixed.push('hello');
mixed.push(true);
// mixed.push(10);

let uid: string|number;
uid = '123';
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}