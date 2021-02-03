

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

let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let arr2 = ['George Jetson', 'Judy Jetson'];

let newArr = [].concat(...arr).concat(...arr2);
// console.log(newArr);

let newerArr = [];
arr.forEach(element => {
  newerArr = newerArr.concat(element);
})

arr2.forEach(element => {
  newerArr = newerArr.concat(element);
})

//console.log(newerArr);

let newestArr = arr.reduce((accum, el) => {
  return accum.concat(el)
}, []);

console.log(newestArr);