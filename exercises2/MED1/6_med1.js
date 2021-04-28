// The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

/* F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2 */

// algorithm
// open a function that takes a num as an argument
// if num = 1 return 1
// if num = 2 return 1
// call the function recursively adding two calls together
// return fibonacci(num - 1) + fibonacci(num - 2);



// function fibonacci(num) {
//   if (num === 1) {  
//     return 1;
//   }
//   if (num === 2) {
//     return 1;
//   }

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765



// Suppose you want to know the result of doubling a number, then the result of doubling that number, and so on until the number reaches some predefined maximum, such as 50. You might begin with the following function:

// algorithm 
// stopping condition 50
// num goes up by one


// function doubler(num) {
//   if (num <= 60) {
//     console.log(num);
//     return num = doubler(num * 2);
//   }
// }

// doubler(2)

// function adder(num) {
//   console.log(num);

//   if (num >= 10) {
//     return num;
//   }
//   return num += adder(num + 1);
// }


// adder(2);






