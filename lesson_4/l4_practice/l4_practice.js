// Lesson 4 practice space

// let str = 'abcdefghi';
// console.log(str[2]); // => 'c'
// 
// console.log(str.substring(2, str.length)); // =>'cde'
// 
// let str = 'The grass is green';
// // console.log(str.slice(str.indexOf('grass'), str.indexOf(' is')));

// console.log(str.substring(-5, -2));

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// // console.log(arr.slice(2, 5)[0]); // new array of c, d, e. c is zero index so c

// let arrCopy = arr.slice();
// arrCopy.unshift('A');
// console.log(arr);
// console.log(arrCopy);

// let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' } 
// console.log(obj);

// let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin' };
// console.log(Object.keys(capitals));      // => ['uk', 'france', 'germany']
// console.log(Object.values(capitals));    // => ['London', 'Paris', 'Berlin']
// console.log(Object.values(capitals)[0]); // => 'London'
// console.log(Object.entries(capitals));

// console.log(Object.keys(capitals).includes('mexico'));
// console.log(Object.keys(capitals).includes('uk'));

// let arr = ['foo', 'bar', 'qux'];
// arr['boo'] = 'hoo';
// arr[-1] = 374;
// arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
// console.log(arr.length);        // => 3 (not 5!)
// arr.forEach(element => console.log(element)); // prints: foo, bar, qux
// Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]
// console.log(arr[1]);
// console.log(arr[4]);
// console.log(arr['-1']);

// let arr = [5, 6, 'back', 'once', 'again', {fruit : 'apple'}]
// console.log(arr);
// console.log(arr.length);
// arr['boo'] = 'hoo';
// console.log( '<< ----- >>')
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr['boo']);
// console.log(typeof arr[5]);

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.join('')); // => 'a,b,c,d,e,f'

// let obj = { sky: 'blue', grass: 'green'};
// 
// let arr = Object.entries(obj); // => [ [ 'sky', 'blue' ], [ 'grass', 'green' ] ]
// console.log(arr);
// 
// let newArr = [].concat(...arr);
// console.log(newArr);

// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;  // => 2
// numbers[1] = numbers[1] + 10;
// numbers[4] = numbers[4] + 100;
// numbers[4] = 200;
// console.log(numbers);

// let gnr = {vocals : 'Axl', 'lead guitar' : 'Slash',};
// gnr.drums = 'Duff';
// gnr['bass'] = 'Steven';
// gnr['lead guitar'] = 'SLASH';
// console.log(gnr);

// let str = 'back once again';
// str = 'B' + str.slice(1);
// console.log(str);


// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// function messWithVars(ex1, ex2, ex3) {
//   one = ex2;
//   two = ex3;
//   three = ex1;
// }



// messWithVars(['two'], ['three'], ['one']);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
// 
// let str1 = 'Back';
// str1 = str1.concat(' once again I\'m the Renegade Master');
// console.log(str1);

// let str1 = 'back once again';
// console.log(str1.includes('once', str1.indexOf('ack')));

// let str1 = 'Back, once, again';
// let arr = str1.split(', ');
// console.log(arr);

// let str1 = '    yo    ';
// console.log(str1);
// str1 = str1.trim();
// console.log(str1);

// let str1 = 'back once again';
// // str1 = str1.slice(0, 1).toUpperCase() + str1.substring(1, str1.indexOf(' a')) + ' ' + str1.slice(str1.indexOf('again')).toUpperCase();
// console.log(str1);

// let str1 = '$Back once again';
// console.log(str1.charCodeAt(0));
// console.log(str1.charCodeAt(7));

// console.log(String.fromCharCode(100));
// console.log(String.fromCharCode(201));

// let str1 = 'Back once again ';
// let str2 = 'I\'m the Renegade Master ';
// let str3 = 'D for Damager, Power to the people \n';
// let str4 = 'Back once again with the ill behavior ';
// let str5 = 'With the ill behavior \n';

// console.log(str1 + str2 + str3 + str4.repeat(2) + str5.repeat(4));

// let numbers = [1, 2, 3, 4];
// numbers[0] += 1;
// numbers[1] += 1;
// numbers[2] += 1;
// numbers[3] += 1;
// numbers;               // => [ 2, 3, 4, 5 ]

// for (let i = 0; i < numbers.length; i += 1) {
//   numbers[i] += 1;
// }
// let indx = 0; // have to set index outside of while loop!!! Otherwise it just resets back to 0

// while (indx < numbers.length) {
//   numbers[indx] += 1;
//   console.log(numbers[indx]);
//   indx ++;
// }

// console.log(numbers)

// while (true) {
  // console.log('Back once again');
  // break;
// }

// while (true) {
//   let num = Math.floor(10 * Math.random());
//   console.log(num);

//   if (num === 6) {
//     console.log('6 yo!');
//     break;
//   }
// }

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// let indx = 0;

// while (indx < alphabet.length) {
//   console.log(alphabet[indx]);
//   indx ++;
// }

// for (let char of alphabet) {
//   console.log(char);
// }

// for (let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet[i]);
// }

// let mixed = ['hello' , 10, undefined];

// for (let i = 0; i < mixed.length; i++) {
//   console.log(typeof  mixed[i]);
// }

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// let petsArr = Object.keys(numberOfPets);

// for (let i = 0; i < petsArr.length; i++) {
//   console.log(numberOfPets[petsArr[i]]);
// }

// let indx = 0;
// while(indx < petsArr.length) {
//   console.log(numberOfPets[petsArr[indx]])
//   indx++;
// }

// for (let key in numberOfPets) {
//   console.log(`I have ${numberOfPets[key]} ${key}`);
// }

// let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
// let index = 0;

// while (index < names.length) {
//   if (names[index][0] === 'W') {
//     break;
//   }

//   console.log(names[index]);
//   index += 1;
// }

// let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 1) {
//     continue;
//   }
//   console.log(Math.pow(numbers[i], 2));
// }

// Practice problem: given a string return a new string with every other word removed.
// Also the palindromes problem
// I'd say the first assessment probably has to do with looping over strings, looking for a pattern, passing it to an array
// and returning the result. So practice these and other ones I can think of.
// example on would be to remove all vowels
// Also numbers problem from PEDAC videos

// let arr = [25, 1, 32, 1, 1, 45, 6];

// // for (let el of arr) {
// //   if (el === 1) {
// //     console.log(el + ' the number is 1');
// //   }
// // }

// let arr1 = arr.filter(el => el === 1);
// console.log(arr);
// console.log(arr1);

// let fruits = ['apple', 'banana', 'pear'];
// let transformedElements = [];

// let counter = 0;

// while (true) {
//   transformedElements.unshift(fruits[counter].toUpperCase());
//   counter += 1;
//   if (counter === fruits.length) break;
// }

// console.log(fruits);
// console.log(transformedElements);

// function selectVowels(str) {
//   let selectedChars = '';

//   for (let counter = 0; counter < str.length; counter += 1) {
//     let currentChar = str[counter];

//     if ('aeiouAEIOU'.includes(currentChar)) {
//       selectedChars += currentChar; // this just keeps adding it to the string, it's like concatenating but with +=
//       console.log(selectedChars);
//     }
//   }

//   return selectedChars;
// }

// console.log(selectVowels('Back Once Again'));


// let str1 = 'Back';
// let str2 = '';

// function add1 (str) {
//   while (str.length < 30) {
//     str += '1nce';
//     console.log(str);
//   }
// }

// add1(str1);

// let numberOfVowels = selectVowels('Back Once Again').length;
// console.log(numberOfVowels);


// let nums = [2, 4, 6, 8, 10];

// function doubleNums(numArr) {
//   let doubled = [];
//   let counter = 0;

//   while (true) {
//     doubled.push(nums[counter] * 2);
//     counter += 1;
  
//     if (counter >= nums.length) break;
//   }
//   return doubled;
// }

// console.log(doubleNums(nums));

// let gnr = ['Axl', 'Slash', 'Duff', 'Steven'];
// let newArr = [];

// gnr.forEach(el => {
//   newArr.push(el + ' used to do a little Mr. Brownstone');
// })

// console.log(gnr);
// console.log(newArr);

