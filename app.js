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
// const testResults = [1, 5.2, 1.4, 10.98, 1.4, -5, 8];
// // const storedResults = testResults.slice(); // Copying array
// // const storedResults = testResults.slice(0, 2); // Selecting ranges
// // const storedResults = testResults.slice(-3, -1); // Selecting ranges with negative index
// // const storedResults = testResults.slice(2); // Selecting ranges with only the start index

// // 190. Adding arrays to arrays with concat()
// const storedResults = testResults.concat([3.99, 2]);


// testResults.push(5.91);

// console.log(storedResults, testResults);

// // 191. Retrieving indexes with indexOf() /& lastIndexOf()
// console.log(testResults.lastIndexOf(1.4));

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));

// // 192. Finding Stuff: find() & findIndex()
// const manuel = personData.find((person, idx, persons) => {
//     return person.name === "Manuel";
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

// // 193. Is It Included?
// console.log(testResults.includes(10.98)); // ==> true
// console.log(testResults.indexOf(10.98) !== -1); // Check whether value is exist or not

// 194. Alternative to for Loops: The forEach() Method
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // Regular for-of loop
// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // };

// // Using forEach() method
// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// 195. Transforming Data with map()
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//     return priceObj;
// });

// console.log(prices, taxAdjustedPrices);

// // 196. sort()ing & reverse()ing
// // const sortedPrices = prices.sort(); ==> (4) [10.99, 3.99, 5.99, 6.59]
// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });

// console.log(sortedPrices);

// console.log(sortedPrices.reverse()); // An alternative to reverse a sorted list

// // 197. Filtering Arrays & filter()
// const filteredArray = prices.filter((price, index, prices) => {
//     return price > 6; // ==> (2) [10.99, 6.59]
// });

// console.log(filteredArray);

// // 198. Where Arrow Functions Shine!
// const filteredArrayShorten = prices.filter(p => p > 6); // ==> super short & concise

// console.log(filteredArrayShorten);

// // 199. The Important reduce() Method
// // Using forEach method to calculate a sum of an array
// // let sum = 0;

// // prices.forEach((price) => {
// //     sum += price;
// // });

// // console.log(sum);

// // const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
// //     return preValue + curValue;
// // }, 0);

// // Shorten form
// const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0);

// console.log(sum);

// // 201. Arrays & Strings - split() & join()
// const data = 'New York;10.99;2000';

// // Using split to split an array
// const transformedData = data.split(';');

// // Try to convert elements in the transformed data
// // transformedData[1] = +transformedData[1];
// const mapData = transformedData.map((el) => {
//     if (!isNaN(+el)) {
//         return +el;
//     } else { return el; }
// });

// console.log(transformedData, mapData);

// // Using join method
// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');

// console.log(name);

// // 202. The Spread Operator (...)
// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
// // const copiedPersons = [...persons];
// const copiedPersons = [...persons.map(person => ({ name: person.name, age: person.age }))];
// persons[0].age = 31;

// persons.push({ name: 'Anna', age: 29 });

// console.log(persons, copiedPersons);

// 203. Understanding Array Destructuring
const nameData = ['Max', 'Schwarz', 'Mr', 30];
// Long way to get the name elements
// const firstName = nameData[0];
// const lastName = nameData[1];

// Shortcut for the above lines of code
const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);