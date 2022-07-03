interface Owner {
  name: string;
  age: number;
}

interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: true,
  summary(): string {
    return `A ${this.color} color drink`;
  },
};

/**
 * Here we created an interface with some properties,
 * and two functions.
 */

interface Car {
  name: string;
  year: number;
  broken: boolean;
  owner: Owner;
  summary(): string;
  updateOwner(newOwner: Owner): void;
}

/**
 * This instance is type of Car interface and must implement
 * its functions.
 */
const oldCivic: Car = {
  name: 'civic',
  year: 2000,
  broken: true,
  owner: {
    name: 'ilkin',
    age: 28,
  },

  summary(): string {
    return `Name: ${this.owner.name}`;
  },

  updateOwner(newOwner: Owner): void {
    this.owner = newOwner;
  },
};

const report = (vehicle: Reportable): void => {
  console.log(vehicle);
};

report(oldCivic);
oldCivic.updateOwner({ name: 'emin', age: 25 });
report(oldCivic);

/**
 * Report function accepts argument type of Reportable.
 * Reportable interface only requires summary() function.
 * Since drink object has that function, it is also accepted
 * as Reportable interface
 */
report(drink);
