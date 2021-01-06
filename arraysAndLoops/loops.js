let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let animals = ['dog', 'bird', 'lion', 'deer', 'gorilla', 'leopard', 'guinea pig'];

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


//sort

//reduce

//for..of

//for..in

//find

//findIndex

//every

//some

//entries/ fromEntries

//includes

//splice

//slice

//concat