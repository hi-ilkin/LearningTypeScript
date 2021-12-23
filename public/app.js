"use strict";
/** DOM & TYPE CASTING */
// ! at the end means that developer is sure that anchor variable won't be null
const anchor = document.querySelector('a');
console.log(anchor.href);
// getting by class name - but it returns just form so we cast it
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
