// PROBLEM
// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// EXAMPLES: given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // need a flag to indicate when a change is needed 'needUpper'. this functions similar to a counter. start it as true
  // set whole string to lower and split the string
  // iterate over array
  // if statement depends on flag boolean value
  // first element is upper, change flag to false and return upper value
  // else change flag and return to lowercase for el
  // join





console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);