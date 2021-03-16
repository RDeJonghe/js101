// PROBLEM:
  /* A triangle is classified as follows:

  Equilateral: All three sides are of equal length.
  Isosceles: Two sides are of equal length, while the third is different.
  Scalene: All three sides are of different lengths.
  To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

  Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'. */
// EXAMPLES: given
// DATA STRUCTURES: numbers, strings, possibly array
// ALGORITHM:
  // set 3 side variables equal to each number (or maybe just have these in an array)
  // sort the array - this will check the lengths of first two greater than last
    // first two elements added greater than last elment
  // check if any of the 3 equal zero, if so return invalid - can have helper function
  // check if all equal each other, if so return equilateral - can have helper function
  // check that all three are different

function triangle(side1, side2, side3) {
  let sortedSidesArr = [side1, side2, side3].sort((a, b) => a - b);

  if (zeroSide(sortedSidesArr)) {
    return 'invalid';
  }
  if (invalidSides(sortedSidesArr)) {
    return 'invalid';
  }
  if (equilateral(sortedSidesArr)) {
    return 'equilatreral';
  }
  if (isosceles(sortedSidesArr)) {
    return 'isosceles';
  }
  if (scalene(sortedSidesArr)) {
    return 'scalene';
  }

}
function zeroSide(arr) {
  return (arr[0] === 0 || arr[1] === 0 || arr[2] === 0);
}
function invalidSides(arr) {
  return ((arr[0] + arr[1]) < arr[2]);
}
function equilateral(arr) {
  return (arr[0] === arr[1] && arr[1] === arr[2])
}
function isosceles(arr) {
  return (arr[0] === arr[1] || arr[1] === arr[2]);
}
function scalene(arr) {
  return (arr[0] !== arr[1] && arr[1] !== arr[2]);
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(2, 4, 4));        // iscoceles