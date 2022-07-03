let carMakers = ['ford', 'toyota', 'kia'];

const mat2d = [[1, 2], [2], [1, 2, 3, 4]];
const acar = carMakers[3];
console.log(acar); // undefined

carMakers.map((car) => {
  return car.toUpperCase();
});

// tuples
type Drink = [string, boolean, number];

let drinks: Drink[] = [];
const pepsi: Drink = ['brown', true, 50];
drinks.push(pepsi);
console.log(drinks);

const carStats = {
  horsepower: 500,
};

carStats.horsepower;
