// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// set a counter = to the element for the number


function buyFruit(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    let counter = arr[i][1];

    while (counter > 0) {
      results.push(arr[i][0]);
      counter --;
    }
  }
  return results;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

