// Creating arrays
const numbers = [1, 2, 3]; // Better performance perspective
console.log(numbers);

// const moreNumbers = new Array(5); // == []
// const someNumbers = Array(5, 2);

// console.log(moreNumbers);
// console.log(someNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const moreNumbers = Array.from('Hi!');
const someItems = Array.from(listItems);
console.log(moreNumbers, someItems);