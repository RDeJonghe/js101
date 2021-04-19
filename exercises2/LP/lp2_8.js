/* Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas. */

// ALGORITHM
// create a function that takes an array of nested array items
// create an empty results array
// iterate over the array
  // on each iteration set a counter variable equal to the second element of the array
  // create a nested while loop, while counter > 0
  // push the first element to results array
  // counter -= 1;
// return results array

function buyFruit(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i ++) {
    let counter = arr[i][1];

    while (counter > 0) {
      results.push(arr[i][0]);
      counter -= 1;
    }
  }
  return results;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]