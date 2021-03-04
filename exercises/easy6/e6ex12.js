// PROBLEM:
// Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.



function isBalanced(str) {
  let tally = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      tally += 1;
    }
    if (str[i] === ')') {
      tally -= 1;
    }
    if (tally < 0) {
      return false;
    }
  }
  return tally === 0;
}




console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);