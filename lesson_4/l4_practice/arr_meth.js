// Array methods lesson

// [1, 2, 3].forEach((number, indx) => {
//   console.log(`This is the index: ${indx} and this is the number: ${number}`);
// });

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeys = Object.keys(produce);

// produceKeys.forEach(el => console.log(el));

// let produceKeyValues = Object.entries(produce);
// produceKeyValues contains:
//   [['apple', 'Fruit'],
//    ['carrot', 'Vegetable'],
//    ['pear', 'Fruit'],
//    ['broccoli', 'Vegetable']]

// produceKeyValues.forEach(keyValue => {
//   // let [ key, value ] = keyValue;
//   let key = keyValue[0];
//   let value = keyValue[1];

//   console.log(`${key} is a ${value}`);
// });
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable

// let produceKeyValues = Object.entries(produce);

// let veggies = produceKeyValues.filter(keyValue => {
//   let [key, value] = keyValue;
//   return value === 'Vegetable';
//   }
// )

// console.log(veggies);
// let arr = [];
// [1, 2, 3].forEach((el, indx) => {
//   arr.unshift(el * 2, indx)
// });

// console.log(arr);

// let str = 'back once again';

// let arr = str.split('').map(el => el.toUpperCase());
// console.log(arr);

// let arr = str.split('').forEach(el => el.toUpperCase());
// console.log(arr);

// let newStr = str.split('').map(el => el.toUpperCase()).join('');
// console.log(newStr);

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceValue = Object.values(produce);
// produceValue = produceValue.filter(el => {
//   return el === 'Fruit';
// });
// console.log(produceValue);

// let prodKeyValue = Object.entries(produce);
// let arr = [];

// prodKeyValue.forEach(el => {
//   let [key, value] = el;
//   // let key = el[0];
//   // let value = el[1];
//   if (value === 'Vegetable') {
//   return arr.push([key, value]);
//   }
// })
// console.log(arr);

// let keyVal = Object.entries(produce);
// let obj = {};

// keyVal.forEach(el => {
//   let [key, value] = el
//   if (value === 'Vegetable') {
//     return obj[key] = value;
//   }
// }
// )

// console.log(obj);

// return an object with all people in 20s.
// let people = {
//   Joe : 23,
//   Mike : 34,
//   Julie : 20,
//   Susan : 18,
//   Emily : 39
// }

// let peopleArr = Object.entries(people);

// let obj = {};

// peopleArr.forEach(el => {
//   let [key, value] = el;
//   if (value >= 20 && value <= 30) {
//     return obj[key] = value;
//   }
// })

// console.log(obj);

// let superBowls = {
//   Brady : 7,
//   Steelers : 6,
//   Patriots : 6,
//   '49ers' : 5
// }

// let sixBowls = {};

// let keyVal = Object.entries(superBowls);

// keyVal.forEach(el => {
//   let key = el[0];
//   let val = el[1];
//   if (val === 6) {
//     sixBowls[key] = val;
//   }
// })

// console.log(sixBowls);


// let str = 'What\'s up doc';

// let double = str.split('').map(char => char + char).join('');
// console.log(double);

// let str = 'back once again i\'m the renegade master';
// let vowels = 'aeiou'

// let selected = str.split('').filter(el => vowels.includes(el)).join('');
// console.log(selected);

// Take an object, only take some of the key values, return new object, don't alter original...
// To do this convert to array and use forEach

// let obj = {
//   kawasaki : 'kx',
//   yamaha : 'yz',
//   honda : 'cr',
//   suzuki : 'rm'
// }

// let keyVal = Object.entries(obj);
// let favBikes = {};

// keyVal.forEach(el => {
//   let key = el[0];
//   let val = el[1];
//   if (val === 'cr' || val === 'rm') {
//     return favBikes[key] = val;
//   }
// })
// console.log(favBikes);
// console.log(obj);


// let keyVal = Object.entries(obj);
// let favBikes = {};

// keyVal.forEach(el => {
//   let [key, val] = el;
//   if (val === 'kx' || val === 'yz') {
//   favBikes[key] = val;
//   }
// })

// console.log(favBikes);

// let nums = [2, 4, 6, 8, 10];

// console.log(nums.some(el => el >= 10));

// let animals = { a: 'ant?', b: 'bear?', c: 'cat?' };

// console.log(Object.values(animals).some(el => el.endsWith('?')));
// console.log(Object.values(animals).every(el => el.endsWith('?')));

// let nums = [20, 25, 30, 99];
// console.log(nums.every(el => el > 30));

// let revNums = nums.slice().reverse();

// console.log(nums);
// console.log(revNums);

// console.log(nums.includes(10));
// console.log(nums.includes(50));

// let gnr = {
//   axl : 'vocals',
//   slash : 'guitar'
// }

// console.log(Object.keys(gnr).includes('axl'));
// let obj = {a: 'apple', b: 'banana', c: 'custard'};
// console.log(obj.hasOwnProperty('banana')); // => true
// console.log(obj.hasOwnProperty('f')); // => false

// console.log([1, 2, 3].filter(el => el === 3));