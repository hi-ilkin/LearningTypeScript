"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/posts/1';
// request is async so we need then
axios_1.default.get(url).then((response) => {
    const todo = response.data;
    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    console.log('ID of response: ' + ID);
});
let apples = 5;
var armud = '4';
armud = apples;
apples = 'sfs';
console.log(`apples: ${apples} / armud : ${armud}`);
// Array
let colors = [];
let other_colors = ['sfasf'];
let super_colors = [];
console.log('Type of colors', typeof colors);
// Classes
class Car {
}
let car = new Car();
// Object literal
let point = {
    x: 1,
    y: 10,
};
const json = '{"x": 20, "y":20}';
const coordinates = JSON.parse(json);
console.log('Json parse ', coordinates);
// delayed initialization
let foundWords;
foundWords = true;
let numbers = [-10, -2, 10];
var numberAboveZero = false;
numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    numberAboveZero = numbers[i];
}
// Arrow function: function_name = (arguments) : return_type => {
//  body;
// };
// return type can be inferred but arguments can't. Explicitly add types
const logNumber = (i) => {
    console.log(i);
    return i * 2;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const throwError = (message) => {
    throw new Error(message);
};
// deconstruction
const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};
const logWeather = ({ date, weather }) => {
    console.log(`Weather of ${date} is ${weather}`);
};
logWeather(todaysWeather);
// object annotations
const profile = {
    age: 20,
    name: 'ilkin',
    coords: {
        lat: 0,
        lng: 20,
    },
    setAge(age) {
        this.age = age;
    },
};
// destructuring objects
const { age, name } = profile;
const { coords: { lat, lng }, } = profile;
