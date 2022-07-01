/** CLASSES */
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'website', 40);

let invoices: Invoice[] = [];
invoices.push(invOne);

// by default properties are public
invOne.client = 'luigi';
console.log(invoices);

/** DOM & TYPE CASTING */

// ! at the end means that developer is sure that anchor variable won't be null
const anchor = document.querySelector('a')!;
console.log(anchor.href);

// getting by class name - but it returns just form so we cast it
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
});

