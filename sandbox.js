/**
 * Useful notes
 * - Compile by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile : tsc sandbox.ts -w
 * - Once something initially decalared, can't change structure and types
 */
// explicit type defining
var character;
var age;
var isLoggedIn;
// arrays: initialize with empty array otherwise push won't work
var ninjas = [];
ninjas.push('str');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(true);
// mixed.push(10);
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
// Dynamic (Any type)
var new_age = 25;
new_age = 'sl';
new_age = true;
var ninja_any;
