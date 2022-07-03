"use strict";
class Vehicle {
    constructor() {
        this.color = '';
    }
    // default modifier is public for functions
    drive() {
        console.log('driving the vehicle');
    }
}
class Car extends Vehicle {
    /**
     * Shorthand of constructor is adding public infront of the argument(s)
     * constructor(public color: string) {}
     */
    constructor(color) {
        super();
        this.color = color;
    }
    drive() {
        console.log(`driving the ${this.color} car`);
    }
}
const car = new Car('red');
car.drive();
const vehicle = new Vehicle();
// can't call
// vehicle.drive();
