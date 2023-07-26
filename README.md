```javascript


// OOP way
class Person {
    private age: number;
    private name: string;
    private surname: string;

    constructor(age: number, name: string, surname: string) {
        this.age = age;
        this.name = name;
        this.surname = surname;
    }

    getFullInfo(): string {
        return `Age: ${this.age}, Name: ${this.name}, Surname: ${this.surname}`;
    }
}

const person = new Person(27, 'Wayne', 'Rooney');

person.getFullInfo(); // Age: 27, Name: Wayne, Surname: Rooney

// FP way
function getFullInfo(age: number, name: string, surname: string): string {
    return `Age: ${age}, Name: ${name}, Surname: ${surname}`;
}

getFullInfo(27, 'Wayne', 'Rooney') // Age: 27, Name: Wayne, Surname: Rooney



function getFullInfo(age: number, name: string, surname: string): string {
    return `Age: ${age}, Name: ${name}, Surname: ${surname}`;
}

// Partial application
const _getFullInfo = getFullInfo.bind(this, 27);

_getFullInfo('Wayne', 'Rooney'); // Age: 27, Name: Wayne, Surname: Rooney
_getFullInfo('John', 'Doe'); // Age: 27, Name: John, Surname: Doe



function addTwo(num) {
  return num + 2;
}

function multiplyByTwo(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

const result = square(multiplyByTwo(addTwo(3))); // Result: 100 ((3 + 2) * 2)^2



function compose(...funcs) {
  return initialValue => funcs.reduceRight((acc, func) => func(acc), initialValue);
}

const addTwo = num => num + 2;
const multiplyByTwo = num => num * 2;
const square = num => num * num;

const composedFn = compose(square, multiplyByTwo, addTwo);

const result = composedFn(3); // Result: 100 ((3 + 2) * 2)^2






getECommerceCustomAttributes(
  basket: Basket
): IMParticleCommerceCustomAttributes {
  return flow([
    this.getRequiredECommerceData,
    this.grabPandaCaresData.bind(this, basket.donations[0]),
    this.grabServiceFeeData.bind(this, basket.fees[0]),
    this.grabTotalFees,
    this.grabDeliveryInstructions.bind(this, basket),
    this.grabCouponData.bind(this, basket),
  ])(basket);
}




// Referentially Transparent Function: add
// Takes two numbers as inputs and returns their sum.
function add(a, b) {
  return a + b;
}

// The function call can be replaced with its result (5):
const result1 = add(2, 3); // result1 = 5

// The function call can be replaced with its result (5):
const result2 = 5; // result2 = 5

//////////////////


interface User {
    id: number;
    name: string;
    surname: string;
}
const groupStorage: readonly User[] = [
    {
        id: 1,
        name: 'John',
        surname: 'Lenonn'
    },
    {
        id: 2,
        name: 'Wayne',
        surname: 'Rooney'
    }
];

function getUserById(storage: readonly User[], id: number) {
    return storage.find(user => user.id === id);
}

// Without partial application
const user1 = getUserById(groupStorage, 1);
const user2 = getUserById(groupStorage, 2);

// With partial application
const getUserByIdFromGroupStorage = getUserById.bind(this, groupStorage);

const user1 = getUserByIdFromGroupStorage(1);
const user2 = getUserByIdFromGroupStorage(2);





```


