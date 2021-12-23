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
// 2 ways of defining arrow functions
let func1;
func1 = () => {
    console.log("Function 1");
};
const func2 = () => {
    console.log("Function 2");
};
// defining function with arguments and return type
const add = (a, b, optional_1, opt_with_default = 3) => {
    console.log(optional_1);
    console.log(opt_with_default);
    return a + b;
};
const greet = (user) => {
    console.log(`${user.name} with id = ${user.uid} says hello`);
};
greet({ name: 'ilkin', uid: '111' });
