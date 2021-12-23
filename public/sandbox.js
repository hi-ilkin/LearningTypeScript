"use strict";
/**
 * Useful notes
 * - Compile single file by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile single file : tsc sandbox.ts -w
 * - Initialize config file: tsc --init
 * - After creating better project structure following L#7,
 * Compile by tsc -w
 * - Once something initially decalared, can't change structure and types
 */
/** FUNCTIONS */
// 2 ways of defining arrow functions
let func1;
func1 = () => {
    console.log("Function 1");
};
const func2 = () => {
    console.log("Function 2");
};
// defining function with arguments and return type
// TS can infer return type, but defining explicitly is better
const add = (a, b, optional_1, opt_with_default = 3) => {
    console.log(optional_1);
    console.log(opt_with_default);
    return a + b;
};
const greet = (user) => {
    console.log(`${user.name} with id = ${user.uid} says hello`);
};
greet({ name: 'ilkin', uid: '111' });
// this is function signutare, argument names are temporary and can change at initialization
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
/** DYNAMIC TYPES */
// Variables type can change with any but not TS way.
let age;
age = 25;
age = true;
age = 'twenty five';
console.log(age);
// List with dynamic type
let mixed = [];
mixed.push(5);
mixed.push('a string');
mixed.push(false);
console.log(mixed);
