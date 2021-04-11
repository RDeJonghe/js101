/* The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&. */

// ONLY ONE OF THE TWO SIDES CAN BE TRUTHY

// algorithm
// create function
// start a conditional
// if first value
  // nested if statement for second value
  // if second value - return false
  // else return true
// do the same for the second value
  // if statement and nested if
// after conditional just return false since if both are true/false it returns false



// function xor(arg1, arg2) {
//   if (arg1 && arg2) {
//     return false;
//   }
//   if (arg1) {
//     if (arg2) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   if (arg2) {
//     if (arg1) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// function xor(value1, value2) {
//   if ((value1 && !value2) || (value2 && !value1)) {
//     return true;
//   }
//   return false;
// }

// function xor(a, b) {
//   return (Boolean(a) !== Boolean(b));
// }


// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean('a'));
// console.log(Boolean(''));
// console.log(Boolean(true));
// console.log(Boolean([]));
// console.log(Boolean('yes'));
// console.log(Boolean(5));