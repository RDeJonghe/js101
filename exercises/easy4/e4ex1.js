// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Teddy is 69 years old!

// function ranNum(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function TeddyAge() {
//   return `Teddy is ${ranNum(20, 120)} years old!`;
// }

// console.log(TeddyAge());

function teddy(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i)
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(teddy(18, 41));

