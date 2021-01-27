// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.



function longer(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

function shorter(str1, str2) {
  if (str1.length < str2.length) {
    return str1;
  } else {
    return str2;
  }
}

function shortLongShort(str1, str2) {
  return shorter(str1, str2).concat(longer(str1, str2), shorter(str1, str2));
}

console.log(shortLongShort('FOUR', 'longstring'));

console.log(shortLongShort('evenlongerstring', 'WHAT'));