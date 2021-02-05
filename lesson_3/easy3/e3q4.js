let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// I'd say that .slice() returns a copy of an array without mutating the original array.
// What this means is that when arr2 is assigned to arr1.slice() it's assigned to a copy of arr1, not actually arr1.
// so I think arr1 & arr2 have different places in memory.
// so when arr2 is modified, arr1 is not modified since they have different places in memory.
// So arr1 console.logs its original unchanged value

// Wrong