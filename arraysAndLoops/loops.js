let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let animals = ['dog', 'bird', 'lion', 'deer', 'gorilla', 'leopard', 'guinea pig'];

const object = { a: 1, b: 2, c: 3 };


// ForEach
numbers.forEach((number) => {
    console.log(number);
});

animals.forEach((animal) => {
    console.log(animal);
})

//filter
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 === 1);
console.log(evenNumbers);
console.log(oddNumbers);

const critters = animals.filter(animal => animal.length <= 4);
console.log(critters);

const multiple = animals.filter(animal => animal.includes(' '));
console.log(multiple);

//map
const multipleOfTwo = numbers.map(number => number * 2);
console.log(multipleOfTwo);

const alienAnimals = animals.map(animal => animal = animal.split("").reverse().join("").toString());


//sort
const sortedAnimals = animals.sort();
console.log(sortedAnimals);

const numbersSorted = numbers.sort();
console.log(numbersSorted);

//reduce
const reduction = numbers.reduce((total, number) => {
    return total + number;
})
console.log(reduction);

//for..of
// The for...of statement creates a loop iterating over iterable objects,
// including: built-in String, Array, array-like objects
// (e.g., arguments or NodeList), TypedArray, Map, Set, and
// user-defined iterables. It invokes a custom iteration hook with statements
// to be executed for the value of each distinct property of the object.
for (const number of numbers) {
    console.log(number);
};

for (const animal of animals) {
    console.log(animal);
};

//for..in
// The for...in statement iterates over all enumerable properties
// of an object that are keyed by strings (ignoring ones keyed by Symbols),
// including inherited enumerable properties.
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
};

for (let ob in Object.values(object)) {
    console.log(ob);
}
//find
// The find() method returns the value of the first element in the provided
// array that satisfies the provided testing function. If no values satisfies
// the testing function, undefined is returned.
const firstWithFourLetters = animals.find(animal => animal.length <= 4);
console.log(firstWithFourLetters);

const firstWithMoreThanFourLetters = animals.find(animal => animal.length > 4);
console.log(firstWithMoreThanFourLetters);
//findIndex

const findCritter = animals.findIndex((e) => e === 'guinea pig');
console.log(findCritter);
//some
const containsDog = animals.some(e => e === 'dog');
const containsCat = animals.some(e => e === 'cat');
console.log(containsDog);
console.log(containsCat);

//every
const isANumber = numbers.every(e => {
    if(typeof(e) === 'number') return true;
    else return false;
});

console.log(isANumber);

//entries/ fromEntries

//includes

//splice

//slice

//concat