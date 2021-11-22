"use strict";
/**
 * Useful notes
 * - Compile by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile : tsc sandbox.ts -w
 * - Once something initially decalared, can't change structure and types
 */
// explicit type defining
let character;
let age;
let isLoggedIn;
// arrays: initialize with empty array otherwise push won't work
let ninjas = [];
ninjas.push('str');
// union types
let mixed = [];
mixed.push('hello');
mixed.push(true);
// mixed.push(10);
let uid;
uid = '123';
uid = 123;
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
// Dynamic (Any type)
let new_age = 25;
new_age = 'sl';
new_age = true;
let ninja_any;
