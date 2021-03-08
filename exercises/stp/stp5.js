// PROBLEM

// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// EXAMPLES: given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // remember can check if upper or lower by el === el.toUpperCase()
  // split to an array
  // iterate over the array
  // map to a new array since it will be transformed, map is a good choice when sending everything and changing it
  // check if its upper or lower with conditional, if so change it
  // leave everything else
  // join and return

// My first attempt that works:
function swapCase(str) {
  let arr = str.split('');

  let switched = arr.map(el => {
    if (el === el.toLowerCase()) {
      return el = el.toUpperCase();
    } else if (el === el.toUpperCase()) {
      return el = el.toLowerCase();
    } else {
      return el;
    }
  })
  return switched.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

