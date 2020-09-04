// 185. Creating Arrays
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

// 186. Which Data Can You Store In Arrays?
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

// 187. push(), pop(), unshift(), shift() - Adding & Removing Elements
// Adding elements
// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');

// // Removing elements
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // Rarely used
// console.log(hobbies, hobbies[4]);

// // 188. The splice() Method
// hobbies.splice(1, 0, 'Good Food', 'Orange');
// console.log(hobbies);

// const removedElements = hobbies.splice(-1, 1);
// console.log(hobbies);

// 189. Selecting ranges & creating copies with slice()
const testResults = [1, 5.2, 1.4, 10.98, 1.4, -5, 8];
// const storedResults = testResults.slice(); // Copying array
// const storedResults = testResults.slice(0, 2); // Selecting ranges
// const storedResults = testResults.slice(-3, -1); // Selecting ranges with negative index
// const storedResults = testResults.slice(2); // Selecting ranges with only the start index

// 190. Adding arrays to arrays with concat()
const storedResults = testResults.concat([3.99, 2]);


testResults.push(5.91);

console.log(storedResults, testResults);

// 191. Retrieving indexes with indexOf() /& lastIndexOf()
console.log(testResults.lastIndexOf(1.4));

const personData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personData.indexOf({ name: 'Manuel' }));