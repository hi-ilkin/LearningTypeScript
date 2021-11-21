/**
 * Useful notes
 * - Compile by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile : tsc sandbox.ts -w
 */

// TS can infer type from first assigned value
let age = 30;
age = 2/3;

// defining argument type
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(4));