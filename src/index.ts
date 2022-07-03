import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// request is async so we need then
axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;
  console.log('ID of response: ' + ID);
});

let apples: any = 5;
var armud: any = '4';

armud = apples;
apples = 'sfs';
console.log(`apples: ${apples} / armud : ${armud}`);

// Array
let colors: string[] = [];
let other_colors: any[] = ['sfasf'];
let super_colors = [];
console.log('Type of colors', typeof colors);

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 1,
  y: 10,
};

const json = '{"x": 20, "y":20}';
const coordinates = JSON.parse(json);

console.log('Json parse ', coordinates);

// delayed initialization
let foundWords: boolean;

foundWords = true;
let numbers = [-10, -2, 10];

type specialType = boolean | number;
var numberAboveZero: specialType = false;
numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}

// Arrow function: function_name = (arguments) : return_type => {
//  body;
// };
// return type can be inferred but arguments can't. Explicitly add types
const logNumber = (i: number): number => {
  console.log(i);
  return i * 2;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// deconstruction
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
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

  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring objects
const { age, name } = profile;
const {
  coords: { lat, lng },
} = profile;
