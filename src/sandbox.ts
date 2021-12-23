/**
 * Useful notes
 * - Compile single file by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile single file : tsc sandbox.ts -w
 * - Initialize config file: tsc --init
 * - After creating better project structure following L#7, 
 * Compile by tsc -w
 * - Once something initially decalared, can't change structure and types
 */

// defining type aliases
type StrOrNum = string | number;
type objWithName = { name: string, uid: StrOrNum };

/** FUNCTIONS */
// 2 ways of defining arrow functions
let func1: Function;
func1 = () => {
    console.log("Function 1");
}

const func2 = () => {
    console.log("Function 2");
}

// defining function with arguments and return type
// TS can infer return type, but defining explicitly is better
const add = (a: number, b: number, optional_1?: StrOrNum, opt_with_default: number = 3): number => {
    console.log(optional_1);
    console.log(opt_with_default);
    return a + b;
}

const greet = (user: objWithName) => {
    console.log(`${user.name} with id = ${user.uid} says hello`);
}

greet({ name: 'ilkin', uid: '111' });

// this is function signutare, argument names are temporary and can change at initialization
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action == 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}
 
/** DYNAMIC TYPES */
// Variables type can change with any but not TS way.
let age: any;
age = 25;
age = true;
age = 'twenty five';
console.log(age);

// List with dynamic type
let mixed: any[] = [];
mixed.push(5);
mixed.push('a string');
mixed.push(false);
console.log(mixed);