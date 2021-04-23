/* A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, , then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively. */


// ALGORITHM
// with the language entry (a string)
  // will have to split to array of commands at spaces to interpret it
  // will have to convert each string number to a number
  // will have to have helper functions for each word - each word will call the helper functions

let stack = [];
let register = 0;

// HELPER FUNCTIONS

const NUMBER = (num) => {
  register = Number(num);
}

const NEG_NUMBER = (num) => {
  register = Number(num);
}

// PUSH : Push the register value onto the stack. Leave the value in the register.
// take val from register and put into stack, 
const PUSH = () => {
  // return stack.push(num);
  return stack.push(register);
  
}

const MULT = () => {
  return register = register * stack.pop();
}

const PRINT = () => {
  console.log(register);
}

// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
const ADD = () => {
  return register = register + stack.pop();
}

const SUB = () => {
  return register = register - stack.pop();
}

const DIV = () => {
  return register = Math.round(register / stack.pop());
}

const REMAINDER = () => {
  return register = Math.round(register % stack.pop());
}

// POP : Remove the topmost item from the stack and place it in the register.
const POP = () => {
  register = stack.pop();
}

// SPLIT STRING to array of words / numbers to iterate over
const NUMBERS = '0123456789';


function minilang(commands) {
  let inputArr = commands.split(' ');

  let counter = 0;
  
  while (counter < inputArr.length) {
    if ((inputArr[counter].includes('-'))) {
        NEG_NUMBER(inputArr[counter]);
    }
    if (NUMBERS.includes(inputArr[counter])) {
        NUMBER(inputArr[counter]);
    }
    if (inputArr[counter] === 'PUSH') {
      PUSH();
      }
    if (inputArr[counter] === 'MULT') {
      MULT();
    }
    if (inputArr[counter] === 'PRINT') {
      PRINT();
    }
    if (inputArr[counter] === 'ADD') {
      ADD();
    }
    if (inputArr[counter] === 'SUB') {
      SUB();
    }
    if (inputArr[counter] === 'DIV') {
      DIV();
    }
    if (inputArr[counter] === 'REMAINDER') {
      REMAINDER();
    }
    if (inputArr[counter] === 'POP') {
      POP();
    }

    counter += 1;
  }
  return register;
}

// minilang('PRINT');
//0
// This is just print the register

//  (minilang('5 PUSH 3 MULT PRINT'));
// 15
// number alone goes in stack - all commands start with a number (this would be a question I would ask) so first num goes in reg
// push 3 - this just pushes 3 in stack
// mult - different actions 1. num popped from stack, 2. register = register * popped value

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5 is the register, prints 5
// 
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5
  minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

  minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)



// function minilang(commands) {
//   let inputArr = commands.split(' ');

//   if (inputArr.length === 1 && inputArr[0] === 'PRINT') {
//     PRINT();
//   }
  
  
  
//   register = Number(inputArr[0]); // may have to convert to number elsewhere or set this differently

//   let counter = 1;

//   while (counter < inputArr.length) {
//     if (inputArr[counter] === 'PUSH') {
//       PUSH(Number(inputArr[counter + 1])) // may have to convert to a number elsewhere
//       }
//     if (inputArr[counter] === 'MULT') {
//       MULT();
//     }
//     if (inputArr[counter] === 'PRINT') {
//       PRINT();
//     }
//     if (inputArr[counter] === 'ADD') {
//       ADD();
//     }
//     if (inputArr[counter] === 'SUB') {
//       SUB();
//     }
//     if (inputArr[counter] === 'DIV') {
//       DIV();
//     }
//     if (inputArr[counter] === 'REMAINDER') {
//       REMAINDER();
//     }
//     if (inputArr[counter] === 'POP') {
//       POP();
//     }

//     counter += 1;
//   }
//   return register;
// }