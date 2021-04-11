// easy 2 exercise 4

// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

// algorithm
// create a square function - takes one number
// call the multiply function from previous example with the one number as both arguments
// return this
const multiply = (num1, num2) => num1 * num2;

// function square(num) {
//   return multiply(num, num);
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?

// ALGORITHM
  // multiply function can be used to multiply the same number together
  // a power multiplys the same number against itself x number of times
  // use the multiply function once - that is to the second power, save to result
  // in a loop multiply that total against the number,
  // set a  counter to -1 of the power (since multiply was already called once)

// not an elegant solution but works

// function powered(num, toTheXPower) {
//   let total = multiply(num, num);
//   let counter = toTheXPower - 1;
//   while (counter > 1) {
//     total *= num;
//     counter -= 1;
//   }
//   return total;
// }


// function powered(num, toTheXPow) {
//   return multiply(num, 1) **toTheXPow;
// }

// function powered(num, exp) {
//   let result = 1;

//   while (exp > 0) {
//     result = multiply(result, num);
//     exp -= 1;
//   }
//   return result;
// }

// function powered(num, exp) {
//   let total = 1;

//   while (exp > 0) {
//     total = multiply(total, num);
//     exp -= 1;
//   }
//   return total;
// }



console.log(Math.pow(5, 7));
console.log(powered(5, 7))

