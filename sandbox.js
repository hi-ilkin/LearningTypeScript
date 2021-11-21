/**
 * Useful notes
 * - Compile by running : tsc sandbox.ts [sandbox.js]
 * - Continious compile : tsc sandbox.ts -w
 */
// arrays
var names = ['robert', 'downey'];
names.push('jr');
// not allowed
// names.push(3);
// will put empty to index 3 and 4
names[5] = 'tom';
console.log(names);
// defining mixed array. You can only push types are already available
var mixed = ['ken', 4, 'str2', 5, false];
mixed.push(true);
// Objects: Once initially decalared, can't change structure and types
var ninja = {
    name: 'mario',
    belt: 'yellow',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '50'
// name.skills = ['fighting']
