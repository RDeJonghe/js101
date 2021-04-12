// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// algorithm
// create a function that takes a number as an argument
// set a space variable that is equal to the number minus one
// set a start variable that is equal to one
// set a counter variable equal to num of argument
// while counter > 0
// do a console.log of a repeat of space and a repeat of stars
// increment stars by one, decrease space by one
// decrease counter by 1

function triangle(num) {
  let spaceRepeater = num - 1;
  let starRepeater = 1;
  let counter = num;

  while (counter > 0) {
    console.log(' '.repeat(spaceRepeater) + '*'.repeat(starRepeater));
    spaceRepeater -= 1;
    starRepeater += 1;
    counter -= 1;
  }
}

triangle(5);
triangle(9);


/* triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
********* */