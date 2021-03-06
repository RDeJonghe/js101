/* Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs. */


function isBalanced(str) {
  let parens = 0;
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === '(') {
      parens += 1;
    } else if (str[i] === ')') {
      parens -= 1;
    }
    if (parens < 0) {
      return false;
    }
  }
  return (parens === 0);
}




console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// The tests above should log true.