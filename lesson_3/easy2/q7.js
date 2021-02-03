let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements: Barney's name and Barney's number:
// [ 'Barney', 2 ]


// way i figured
let arr = Object.entries(flintstones);

arr = arr[2]; 

console.log(arr);


// way from book

let newArr = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

console.log(newArr);