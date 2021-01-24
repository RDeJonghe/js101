// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

/*
for (let counter = 1; counter < 100; counter ++) {
  if (counter % 2 === 1) {
    continue;
  }
  console.log(counter);
} */

// student solution shown
// different way to do it. Note even += 2 is outside of if statement.

let even = 2;

while (even < 21) {
  if (even % 2 === 0) {
    console.log(even);
  }
  even += 2;
}