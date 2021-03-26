// lesson 4 second time practice

// let str = 'The grass is green';

// // console.log(str.slice(4, 9));
// console.log(str.slice(-5));
// console.log(str.slice(-8, -6));

// let arr = [{first : 1},['second', '2'], 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(arr.slice(2, 5)[0]);

// // console.log(arr === arr.slice());

// let arrCopy = arr.slice();

// arrCopy.push('h');
// arrCopy[1][0] = 'third'

// console.log(arr);
// console.log(arrCopy);

// let arr = [['first', 2], 'third', 4, ['fifth']];

// // let arrCopy = arr.slice();
// // arrCopy[0][0] = '1st';

// // // arrCopy[2] = 5;

// let fifthArr = arr[3].slice();
// fifthArr[0] = 'sixth';

// console.log(arr);
// // console.log(arrCopy);
// console.log(fifthArr);

// let arr = ['fu'];
// let arr2 = arr.slice();

// arr2[0] = 'bu';

// console.log(arr);
// console.log(arr2);


// let object = { first: [1] };
// let numArray = object["first"].slice(); // 
// numArray.push(2);

// console.log(object);
// console.log(numArray);

// let arr = [['first', 2], 'third', 4, ['fifth']]; // nested array, the pointers (shallow copy are copied over - they are not distinct). The primitive values are distinct though.
// let arrCopy = arr.slice();

// // arrCopy[0][0] = '1st'; // this references the shallow copy and the pointer, so the change will be seen in both places
// // arrCopy[1] = '3rd';

// let arr = [['first', 2], 'third', 4, ['fifth']]; // nested array, the pointers (shallow copy are copied over - they are not distinct). The primitive values are distinct though.
// let arrCopy = arr.slice();

// arrCopy[0][0] = '1st'; // this references the shallow copy and the pointer, so the change will be seen in both places
// arrCopy[1] = '3rd'; // this references a primitive value, the actual value is stored. The change will only be seen in arrCopy
// console.log(arr);
// console.log(arrCopy);

// let arr = [['first', 2], 'third', 4, ['fifth']];
// let fifthArr = arr[3].slice();

// fifthArr[0] = 'sixth';

// console.log(arr);
// console.log(fifthArr);

// let arr = [['first', 2], 'third', 4, ['fifth'], ['sixth']];
// let sixthArr = arr.slice();

// sixthArr[4][0] = '6th';

// console.log(arr);
// console.log(sixthArr);

// let arr = [1, 2, [3]];
// let arrCopy = arr.slice();

// console.log(arr === arrCopy);
// console.log(arr[2] === arrCopy[2]);

// let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' };

// console.log(obj)

// let answer = 'Phoenix';

// if (['Los Angeles', 'San Diego', 'San Francisco'].includes(answer)) {
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// let num = 12.99;
// console.log(Math.floor(num));

// let arr1 = 'back once again';
// let arr2 = 'I\'m the renegade master';

// function logIt(a, b) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }

// function iterateIt(a, b) {
//   let arrCopy = [...arguments[0]];

//   console.log(arrCopy.map(el => el.toUpperCase()));
//   console.log(arr1);
// }

// iterateIt(arr1, arr2);

// function func1(a, b, c) {
//   console.log(arguments[0]);
//   // expected output: 1

//   console.log(arguments[1]);
//   // expected output: 2

//   console.log(arguments[2]);
//   // expected output: 3
// }

// func1(1, 2, 3);


// let num = 31.76;

// let rounded = Number(num.toFixed(1));
// console.log(rounded);
// console.log(typeof rounded);

// let strRound = num.toFixed(0);
// console.log(strRound);
// console.log(typeof strRound);

// let str = '123.56';
// let str2 = '12oz';

// // console.log(parseInt(str, 10))
// // console.log(parseInt(str2, 10))

// console.log(parseFloat(str))
// console.log(parseFloat(str2))

// let str3 = '1234.56789';

// console.log(Number(parseFloat(str3).toFixed(3)));

// let num = 4358;

// // let neg = -Math.abs(num);
// let neg = Math.abs(num) * -1

// console.log(neg);

// let nums = [1, 2, 3]

// let arr = Array(...nums);
// // let arr = [...nums]

// arr[0] = 0;
// console.log(arr);
// console.log(nums)

// let arr = new Array('Back', 'once', 'again', ['im', 'the', 'renegade', 'master']);

// let arr = new Array('back');

// let arr = ['hello', 'world'];

// let newArr = new Array('yo', arr)

// console.log(newArr);


// let str = 'back once again';
// // let newStr = string.slice(string.indexOf('once'), string.indexOf('again'));
// // console.log(newStr)

// let counter = 0;

// for (let i = 0; i < str.length; i++) {
//   newStr = str.substring(counter);
//   console.log(newStr);
//   counter ++;
// }

// let arr = [2, 6, 8, 10];

// arr.splice(1, 0, 4);

// arr.splice(2, 0, 4.5)

// console.log(arr);

// arr.splice(-1, 0, 8.5)

// console.log(arr);


// let str = 'back once again';

// let aChar = str.match(/ag/gi);

// console.log(aChar);

// let arr = [3, 2, 1];

// console.log(arr.reverse());

// let str = '321';
// console.log(str.split('').reverse().join(''));