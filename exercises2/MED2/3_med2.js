 /* A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees. */

// algorithm
// create a function that takes 3 arguments
// put all the arguments in an array and sort
// if first el is 0 return invalid
// reduce and add, if not = 180 return invalid
// if 3rd el is > 90 return obtuse
// if 3rd el is < retur acute
// else right

function triangle(side1, side2, side3) {
  let sideArr = [side1, side2, side3];
  sideArr.sort((a, b) => a - b);

  if (sideArr[0] === 0) {
    return 'invalid';
  }
  if (sideArr.reduce((accum, el) => accum + el, 0) !== 180) {
    return 'invalid';
  }

  if (sideArr[2] > 90) {
    return 'obtuse';
  } else if (sideArr[2] < 90) {
    return 'acute';
  } else {
    return 'right';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"