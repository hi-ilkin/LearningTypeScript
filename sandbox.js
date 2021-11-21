/**
 * Useful notes
 * - Compile by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile : tsc sandbox.ts -w
 */
// TS can infer type from first assigned value
var age = 30;
age = 2 / 3;
// defining argument type
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(4));
