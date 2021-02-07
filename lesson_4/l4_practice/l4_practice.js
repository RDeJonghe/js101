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
let one = ["one"];
let two = ["two"];
let three = ["three"];

function messWithVars(ex1, ex2, ex3) {
  one = ex2;
  two = ex3;
  three = ex1;
}



messWithVars(['two'], ['three'], ['one']);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);