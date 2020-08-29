// Creating arrays
// const numbers = [1, 2, 3]; // Better performance perspective
// console.log(numbers);

// // const moreNumbers = new Array(5); // == []
// // const someNumbers = Array(5, 2);

// // console.log(moreNumbers);
// // console.log(someNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const moreNumbers = Array.from('Hi!');
// const someItems = Array.from(listItems);
// console.log(moreNumbers, someItems);

// // Data Can You Store In Arrays
// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', { moreDetail: [] }];

// // Nested arrays
// const analyticsData = [
//     [1, 1.6],
//     [-5.4, 2.1]
// ];

// // Accessing data in a nested array
// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     };
// };

// console.log(personalData[1]);

// Adding elements
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');


// Removing elements
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
// hobbies[5] = 'Reading'; // Rarely used
console.log(hobbies, hobbies[4]);