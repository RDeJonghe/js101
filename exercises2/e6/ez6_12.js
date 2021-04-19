// Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

/* The tests above should log true.

Note that balanced pairs must each start with a (, not a ). */


// ALGORITHM
// USE A COUNTER TO KEEP SCORE IF IT'S BALANCED, 0 IS BALANCED, + OR - DEPENDING ON PARENS
// create a function that takes a string as an argument
// let tally = 0
// iterate over string
// if there is a ( tally += 1
// if there is a ) tally -= 1
// tally can never be -1 -> if it is that means there is a ) out of order. check for this first and return false
// after iteration return tally = 0, that will give the true/false we need

function isBalanced(str) {
  let tally = 0;
  for (let i = 0; i < str.length; i ++) {
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