// EXTRA PRACTICE
// EASY 2 Q2
// EASY 2 Q5
// easy 2 q6
// easy 2 q7



// forEach practice
// can be used with arrays, will execute a function on each element in array, write function in syntax
// forEach is like a way to loop without writing a loop.

// use forEach if you want to do something to each element of an array, but not really save it to a new array (save to a new array is good with map)
/*
let gnr = ['Axl', 'Slash', 'Steven', 'Duff'];

gnr.forEach(el => console.log(el.toUpperCase()));

console.log(gnr);
*/




// These examples would be better with map. We're using push to send it to the new array, this is easier with map


/*
let upArr = [];
gnr.forEach(el => upArr.push(el.toUpperCase()));

console.log(upArr);


let nums = [6.789, 3.497, 2918.345, 2381.982];

rounded = [];

nums.forEach(el => rounded.push(Math.round(el)));

console.log(rounded);
*/

// map practice - use this to create a new array and do something to each element of the old array
/*
let nums = [6.789, 3.497, 2918.345, 2381.982];

let rounded = nums.map(el => Math.round(el));
console.log(rounded);

let replaced = gnr.map(el => el.replace('l', 'L'));
console.log(replaced);
console.log(gnr);
*/
// filter practice - use this to create a new array with only some of the elements of the old array.
/*
let bigNums = nums.filter(el => el > 1000);
console.log(bigNums);

let longNames = gnr.filter(el => el.length > 4);
console.log(longNames);

let noS = gnr.filter(el => el[0] !== 'S');
console.log(noS);
*/


// reduce - used with arrays to iterate. Is complex, you can build forEach, map, filter with reduce
// reduce takes two arguments: a callback function and a value that initializes something called the accumulator. The callback function takes two arguments as well: an element from the array and the current value of the accumulator. It returns a value that will be used as the accumulator in the next invocation of the callback. That sounds more complicated than it is, so let's take a look at two simple uses of reduce:

//ALSO NEED TO INITIALIZE ACCUMULATOR. Note how it's 1 for multiplication
// NOTE FOR STRINGS CAN INITIALIZE THE ACCUMULATOR TO EMPTY STRING ''
/*
> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210
*/

// Have to look for different examples, examples from book take the elements and make an output
/*
let odd = [1, 3, 5, 7];

let sumOdd = odd.reduce((accumulator, element) => accumulator + element, 0);

console.log('This is the sum of odd nums: ' + sumOdd);
*/

// Object.assign()
// Used to combine objects, first object listed gets second object into it. Can put multiple objects in.
// To create a new object with properites of other objects, FIRST ARGUMENT IS AN EMPTY OBJECT.
/*
let baseball = {Mickey : 7};
let football = {LaDanian : 21};
let basketball = {Jordan : 23};

let sports = Object.assign({}, baseball, football, basketball);

console.log(sports);
*/

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
// console.log(str1.endsWith('!'));
// console.log(str2.endsWith('!'));


// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Spot'));
// objName.hasOwnProperty
// objName.hasOwnProperty('propName');
// objName.hasOwnProperty('propName');

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// let newString = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
// console.log(newString);

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// let allAges = Object.assign({}, ages, additionalAges);
// console.log(allAges);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// console.log(str1.match('Dino') !== null);
// console.log(str2.match('Dino') !== null);

// console.log(str1.indexOf('Dino') > -1);
// console.log(str2.indexOf('Dino') > -1);

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push('Dino', 'Hoppy');
// console.log(flintstones);

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// let newString = advice.slice(0, advice.indexOf('house'));
// console.log(newString);

// let advice = "Few things in life are as important as house training your important pet dinosaur.";
// const regex = /['important']/;

// let newString = advice.replace(regex, 'urgent');
// console.log(newString);

// let numbers = [1, 2, 3, 4, 5];

// let newNumbers = numbers.slice().reverse();
// console.log(numbers);
// console.log(newNumbers);

// let nums = [1, 2, 3, 4, 5];

// let newNums = [...nums].sort((function(a, b) {
//   return b - a}
//   ));

// console.log(newNums);
// console.log(nums);

// let newerNums = [...newNums].sort((a, b) => a - b );
// console.log(newerNums);

// let nums = [1, 2, 3, 4, 5];

// let newNums = [];
// nums.forEach(number => newNums.unshift(number));
// console.log(newNums);
// console.log(nums);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";

// famousWords = 'Four score and ' + famousWords;
// console.log(famousWords);

// let start = 'Four score and ';
// famousWords = start + famousWords;
// console.log(famousWords);

// famousWords = start.concat(famousWords);
// console.log(famousWords);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);
// arr.splice(1, 1, 8948372);
// console.log(arr);

// let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let arr2 = ['George Jetson', 'Judy Jetson'];

// let newArr = [].concat(...arr).concat(...arr2);
// // console.log(newArr);

// let newerArr = [];
// arr.forEach(element => {
//   newerArr = newerArr.concat(element);
// })

// arr2.forEach(element => {
//   newerArr = newerArr.concat(element);
// })

// //console.log(newerArr);

// let newestArr = arr.reduce((accum, el) => {
//   return accum.concat(el)
// }, []);

// console.log(newestArr);


// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.endsWith('!'));
// console.log(str2.endsWith('1'));

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Spot')); // this is like .includes for arrays, hasOwnProperty for objects

// console.log(ages.hasOwnProperty('Herman'));

// console.log(ages.hasOwnProperty('Joe'));
// console.log(ages.hasOwnProperty('Lily'));
// console.log(ages.hasOwnProperty('Grandpa'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// let newString = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
// console.log(newString);

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// let additionalAges = { Marilyn: 22, Spot: 237 };

// // Object.assign(ages, additionalAges);

// // console.log(ages);

// let allAges = Object.assign({}, ages, additionalAges);
// console.log(allAges);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push('Dino');
// console.log(flintstones);

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", 'Hoppy');

// console.log(flintstones);

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// // Expected return value:
// // => 'Few things in life are as important as '

// console.log(advice.slice(0, advice.indexOf('house')));

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// let newString = advice.replace('important', 'urgent');
// console.log(newString);

// let numbers = [1, 2, 3, 4, 5];

// let newNums = [...numbers].sort((a, b) => {
//   return b - a;
// });

// // console.log(numbers);
// // console.log(newNums);


// let numbers = [1, 2, 3, 4, 5];

// let newNums = [];

// numbers.forEach(el => {
//   newNums.unshift(el);
// })

// console.log(numbers);
// console.log(newNums);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";

// // famousWords = 'Four score and '.concat(famousWords);
// console.log(famousWords);

// console.log('Four score and ' + famousWords);

// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// let nums = [1, 2, 3, 4, 5];
// 
// nums.splice(2, 1);
// console.log(nums);
// nums.splice(3, 0, 2394, 2192);
// console.log(nums);

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// let newArr = [];

// // flintstones.reduce((accum, el) => {
// //   return newArr = accum.concat(el);
// // }, [])

// flintstones.forEach(el => {
//   return newArr = newArr.concat(el);
// })

// console.log(newArr);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// // Create an array from this object that contains only two elements: Barney's name and Barney's number: 

// console.log(Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift());
// console.log(flintstones);


// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').filter(char => char === 't').length);

// let numbers = [1, 2, 3, 4, 5];

// let nums = [].concat(numbers).reverse();

// console.log(numbers);
// console.log(nums);

// let numbers = [1, 2, 3, 4, 5];

// let nums = [...numbers].sort((a, b) => b - a);

// console.log(numbers);
// console.log(nums);

// let newNums = [2, 56, 34, 2, 89837, 45, 1, 39485, 9, 382, 3, 45];

// let sorted = [...newNums].sort((a, b) => a - b);

// let backsort = [...newNums].sort((a, b) => b - a)

// console.log(sorted);
// console.log(backsort);

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages.hasOwnProperty('Herman'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.\

// let newStr = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
// console.log(newStr);

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);

// console.log(ages);

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// // Expected return value:
// // => 'Few things in life are as important as '

// console.log(advice.slice(0, advice.indexOf('house')));

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// let advice2 = advice.replace('important', 'urgent');
// console.log(advice2);

// let numbers = [1, 2, 3, 4, 5];

// let nums = numbers.slice().reverse();
// console.log(nums);
// console.log(numbers);

// let nums = [...numbers].sort((a, b) => {
//   return b - a
// });
// console.log(nums);
// console.log(numbers);

// let nums = [];
// numbers.forEach(el => {
//   return nums.unshift(el); // could also use push if you wanted them to go in normal order. So unshift is like push but for reversed order
// })
// console.log(nums);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// 
// let number1 = 8;  // false
// let number2 = 95; // true
// 
// console.log(numbers.includes(number1));

// let famousWords = "seven years ago...";
// 
// console.log('Four score and '.concat(famousWords));
// console.log('Four score and ' + famousWords);

// let arr = [1, 2, 3, 4, 5];
// 
// arr.splice(2, 1);
// console.log(arr);

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let jetsons = ['George', 'Judy'];

// let newArr = [].concat(...flintstones).concat(...jetsons);
// console.log(newArr);

// let newArr = flintstones.reduce((accum, el) => {
  // return accum.concat(el);
// }, [])
// console.log(newArr);

// let newArr = [];
// flintstones.forEach(el => {
//   return newArr = newArr.concat(el);
// })
// console.log(newArr);

// jetsons.forEach(el => {
//   return newArr = newArr.concat(el);
// })
// console.log(newArr);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// 
// let arr = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();
// console.log(arr);

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// 
// console.log(Array.isArray(numbers));

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// 
// console.log(statement1.split('').filter(el => el === 't').length);
// console.log(statement2.split('').filter(el => el === 'E').length);

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// newArr = [].concat(...flintstones);
// console.log(newArr);

// let newArr = flintstones.reduce((accum, el) => {
  // return accum.concat(el);
// }, [])
// 
// console.log(newArr);

// let newArr = [];
// flintstones.forEach(el => {
  // newArr = newArr.concat(el);
// })
// 
// console.log(newArr);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// 
// let arr = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();
// console.log(arr);
// 
// let arr2 = Object.keys(flintstones).filter(key => key === 'Barney' || key === 'Wilma');
// console.log(arr2);

// let numbers = [1, 2, 3, 4, 5];

// let nums = numbers.slice().reverse();

// let nums = [...numbers].sort((a, b) => {
  // return b - a})

// let nums = [];
// 
// numbers.forEach(el => {
  // nums.unshift(el);
// })
// 
// console.log(nums);
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// let numbers2 = [1, 2, 3, 4];
// let numbers3 = [1, 2, 3, 4];

// numbers.length = 0;
// console.log(numbers);

// numbers2.splice(0, numbers2.length);
// console.log(numbers2);

// while (numbers3.length !== 0) {
//   numbers3.pop();
// }
// console.log(numbers3);

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').filter(el => el === 't').length);

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// 
// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages.hasOwnProperty('Herman'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
// 
// munstersDescription = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
// console.log(munstersDescription);

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// 
// Object.assign(ages, additionalAges);
// console.log(ages);
// console.log(additionalAges);

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino');
// console.log(flintstones);

// let numbers = [1, 2, 3, 4, 5];

// // let nums = numbers.slice().reverse();

// let nums = [...numbers].sort((a, b) => b - a)

// console.log(numbers);
// console.log(nums);

// let nums = [];

// numbers.forEach(el => {
//   return nums.unshift(el);
// })

// console.log(nums);

// console.log(numbers);

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// 
// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages.hasOwnProperty('Herman'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// 
// Object.assign(ages, additionalAges);
// console.log(ages);
// 
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(str2.includes('Dino'));

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// 
// let advice2 = advice.slice(0, advice.indexOf('house'));
// console.log(advice2);

// let advice = "Few things in life are as important as house training your pet important dinosaur.";
// let advice2 = advice.replace(/important/g, 'urgent');
// console.log(advice2);
// advice2 = advice2.replace(/as/g, 'AS');
// console.log(advice2);

// let numbers = [1, 2, 3, 4, 5];

// let nums = numbers.slice().reverse();
// let nums = [...numbers].sort((a, b) => b - a);
// let nums = [];
// numbers.forEach(el => {
  // return nums.unshift(el);
// })

// console.log(numbers);
// console.log(nums);


// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// 
// let number1 = 8;  // false
// let number2 = 95; // true
// 
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";
// 
// console.log('Four score and '.concat(famousWords));
// console.log('Four score and ' + famousWords);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// let arr = [].concat(...flintstones);

// let arr = flintstones.reduce((accum, el) => {
  // return accum.concat(el);
// }, [])

// let arr = [];
// flintstones.forEach(el => {
  // return arr = arr.concat(el);
// })
// 
// console.log(arr);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let arr = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift()

// console.log(arr);

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// 
// console.log(statement1.split('').filter(char => char === 't').length);
// console.log(statement2.split('').filter(char => char === 'E').length);

// let numbers = [1, 2, 3, 4];

// numbers.length = 0;

// while (numbers.length !== 0) {
  // numbers.pop();
// }

// numbers.splice(0, numbers.length);

// console.log(numbers);

// let arr = ([1, 2, 3] + [4, 5]);

// console.log(arr[0]);

// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1)

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);

// can make a constant function (anonymous function) and use it to test for valid entries

// const VALID_DELIVERY = entry => ['online', 'on campus'].includes(entry);

// console.log(VALID_DELIVERY('hybrid'));
// console.log(VALID_DELIVERY('online'));

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers); 
// // this wll set six index to value of 5, others will say empty.
// console.log(numbers[5]);
// // this will log undefined, even though it is technically empty and not actually undefined

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
// console.log(str1.endsWith('!'));
// console.log(str2.endsWith('!'));

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// 
// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages.hasOwnProperty('Lily'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
// console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

// console.log(false == '0'); // this will print true
// console.log(false === '0'); // this will print false

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// let otherAges = {Mary : 29};
// 
// Object.assign(ages, additionalAges, otherAges);
// console.log(ages);
// 
// let newAges = Object.assign({}, ages, otherAges);
// console.log(newAges);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('dino'));
// console.log(str2.includes('Dino'));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// 
// flintstones.push('Dino');
// flintstones.unshift('Joe');
// console.log(flintstones);

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", 'Hoppy');
// flintstones.unshift('Jake', 'Sally');
// console.log(flintstones);

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// let newAdvice = advice.slice(0, advice.indexOf('house'));
// console.log(newAdvice);
// 
// let advice = "Few things in life are as important as house training your important pet dinosaur.";
// 
// console.log(advice.replace('important', 'urgent'));

// console.log(advice.replace(/important/g, 'urgent')); // note no +like before with global.
// console.log(advice.replace(/e/g, 'E'));
// console.log(advice.replace(/or/g, '$$&&$$'));


// let numbers = [1, 2, 3, 4, 5]; // reverse and sort without modifying original array

// let nums = numbers.slice().reverse();

// let nums = [...numbers].sort((a, b) => { // remember when making lists, can use ... spread syntax. Also remember syntax of putting [] empty brackets for an array.
//   return b - a
// });

// let nums = [];
// numbers.forEach(el => {
//   return nums.unshift(el);
// })

// console.log(nums);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// 
// let number1 = 8;  // false
// let number2 = 95; // true
// 
// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";
// 
// console.log('Four score and ' + famousWords);
// console.log('Four score and '.concat(famousWords));

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);
// arr.splice(2, 2, 'three', 'four');
// console.log(arr);

// let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// let newArr = [].concat(...arr);

// let newArr = [];
// arr.forEach(el => {
//   return newArr = newArr.concat(el);
// })

// newArr = arr.reduce((accum, el) => {
//   return accum.concat(el);
// }, [])

// console.log(newArr);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let arr = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();
// console.log(arr);

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// 
// console.log(statement1.split('').filter(el => el === 't').length);
// console.log(statement2.split('').filter(el => el === 't').length);

// let numbers = [1, 2, 3, 4];

// numbers.length = 0;

// numbers.splice(0, numbers.length);
// 
// while (numbers.length > 0) {
  // numbers.shift();
// }
// console.log(numbers);

// console.log([1, 2, 3] + [4, 5]);
// This will output strings. Concatenating will convert these to strings and then put it all together, so 34 is also combined

// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1);
// this will log 'hello there'. str2 was set with the value of str1 but they are not linked, they store the primitive value

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1); // this will show 42, even with slice. I had thought slice would make it so it wasn't altered but I was wrong

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return color === 'blue' || color === 'green';
// }

// console.log(isColorValid('yellow'));
// console.log(isColorValid('green'));
// console.log(isColorValid('blue'));

// let phrase = 'The Flintstones Rock!';
// for (let counter = 9; counter >=0; counter -= 1) {
//   console.log(' '.repeat(counter) + phrase);
// }
// for (let counter = 0; counter <=9; counter += 1) {
//   console.log(' '.repeat(counter) + phrase);
// }
// for (let counter = 9; counter >=0; counter -= 1) {
//   console.log(' '.repeat(counter) + phrase);
// }
// for (let counter = 0; counter <=9; counter += 1) {
//   console.log(' '.repeat(counter) + phrase);
// }

// let munstersDescription = "The Munsters are creepy and spooky.";
// // `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// let newDescr = munstersDescription.split('').map(el => {
//   if (el === 'T' || el === 'M') {
//     return el.toLowerCase();
//   }
//   else {
//     return el.toUpperCase();
//   }
// }).join('');

// console.log(newDescr);

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;``
// }
// can also refactor like this: 
// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   for (divisor; divisor > 0; divisor -= 1) {
//     if (number % divisor === 0) {
//     factors.push(number / divisor);
//     }
//   }
//   return factors;
// }

// console.log(factors(8))
// console.log(factors(16))
// console.log(factors(5))
// console.log(factors(20))

//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

// let nanArray = [NaN];
// 
// console.log(nanArray[0] === NaN);
// console.log(Number.isNaN(nanArray[0]));

// let answer = 42;
// 
// function messWithIt(someNumber) {
  // return (someNumber += 8);
// }
// 
// let newAnswer = messWithIt(answer);
// 
// console.log(answer - 8); // 34

// Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// // What does the following code output?

// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// paper, rock
// paper,
// paper, rock.

// PAPER


// function foo(param = "no") {
//   return "yes"; // returns yes no matter what
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }
// // What will the following function invocation return?
// console.log( bar(foo())); // foo is no
// // so bar(no); this evaluates to no
// // no

