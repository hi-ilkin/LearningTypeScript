/**
 * Useful notes
 * - Compile by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile : tsc sandbox.ts -w
 * - Initialize config file: tsc --init
 * - Once something initially decalared, can't change structure and types
 */

// 2 ways of defining arrow functions
let func1: Function;
func1 = () => {
    console.log("Function 1");
}

const func2 = () => {
    console.log("Function 2");
}

// defining function with arguments and return type
const add = (a: number, b: number, optional_1?: number | string, opt_with_default: number = 3): number => {
    console.log(optional_1);
    console.log(opt_with_default);
    return a + b;
}