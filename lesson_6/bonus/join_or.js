// PROBLEM: Our code currently uses the Array.prototype.join method to create the list of numbers, but join can only insert a simple delimiter between each array element; it isn't smart enough to display a joining word for the last element.
  // DEFAULT IS OR WITH COMMA
  // CAN CHANGE DELIMITER AND WORD BASED ON ARGUMENTS PASSED
  // IF ONLY ONE NUMBER IN ARRAY JUST RETURN NUMBER AS A STRING
  // INPUT: array of numbers, delimiter and word, both strings
  // OUTPUT: string
// EXAMPLES GIVEN
// DATA STRUCTURES: array, string
// ALGORITHM
  // create a function that takes 3 arguments - an array of numbers, delimiter, word
    // default for delimiter is a comma, default for word is 'or'
  // handle edge cases - if array is empty return empty array, if array length is one return that number in string format 
  // the word 'or' does not have a comma after it, it can be made part of the final element of the array
    // make the elements of the array strings
      // can use String - may have to iterate
    // if 2 elements
      // concat the word between the two elements, no delimiter
    // if 3 elements
    // concat the word to the beginning of the last element followed by a space then the number
  // join using the delimiter and return using delimiter passed

function joinOr(arr, delim = ', ', word = 'or') {
  if (arr.length === 0 || arr.length === 1) {
    return String(arr);
  }

  let stringArr = arr.map(num => String(num));

  if (stringArr.length === 2) {
    return stringArr[0] + ' ' + word + ' ' + stringArr[1];
  }
  
  stringArr[stringArr.length - 1] = word + ' ' + stringArr[stringArr.length - 1]

  return stringArr.join(delim);
} 

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

