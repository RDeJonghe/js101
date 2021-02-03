// Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let valArr = Object.keys(ages);

console.log(valArr.includes('Spot'));

// can also use hasOwnProperty

console.log(ages.hasOwnProperty('Spot'));
console.log(ages.hasOwnProperty('Herman'));