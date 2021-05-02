/* A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'. */

// algorithm
// create a function that takes 3 arguments
// if any of the arguments is 0 return invalid
// pass the values into an array and sort
  // if the first two elements added are less than the last element return invalid
// if all 3 elements are equal return equilatateral
// if all 3 elements are different return scalene
// else return isosceles

function triangle(side1, side2, side3) {
  let sideArr = [side1, side2, side3];
  sideArr.sort((a, b) => a - b);
  console.log(sideArr)

  if (side1 === 0 || side2 === 0 || side3 === 0) {
    return 'invalid';
  }
  if ((sideArr[0] + sideArr[1]) <= sideArr[2]) {
    return 'invalid';
  }

  if (sideArr[0] === sideArr[1] && sideArr[1] === sideArr[2]) {
    return 'equilateral';
  } else if (sideArr[0] === sideArr[1] || sideArr[1] === sideArr[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"