// lesson 5 practice space

// let arr = ['back', 'once', 'Again', 'aas'];
// let arr2 = arr.slice().sort();

// console.log(arr);
// console.log(arr2);

// console.log([2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a));

// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
// });

// let words = ['go', 'ahead', 'and', 'jump'];
// words.sort((a, b) => a.length - b.length);
// console.log(words);

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// arr[0]['c'] = 'cat';
// arr[0].d = 'dog';
// console.log(arr); // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]

// let arr = [6, 12, 18];
// let arr2 = [...arr, 100];
// arr2.push(24);

// console.log(arr);
// console.log(arr2);

// let obj = {a: 3, b: 2};
// let newObj = Object.assign({}, obj);
// newObj['a'] = 5;

// console.log(obj);
// console.log(newObj);

// let arr = [{ b: 'foo' }, ['bar']];
// let shallowArr = [...arr];
// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);

// shallowArr[0]['b'] = 'FOO';
// console.log(arr);
// console.log(deepCopiedArr);
// console.log(shallowArr);