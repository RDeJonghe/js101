// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.



// My original solution that worked.
function buyFruit(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let counter = arr[i][1]
    while (counter > 0) {
      results.push(arr[i][0]);
      counter -= 1;
    }
  }
  return results;
}

// book solution
// function buyFruit(fruitsList) {
//   return fruitsList
//     .map(fruit => repeat(fruit))
//     .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }

// function repeat(fruitAndQuantity) {
//   let result = [];
//   let fruit = fruitAndQuantity[0];
//   let quantity = fruitAndQuantity[1];

//   for (let num = 0; num < quantity; num += 1) {
//     result.push(fruit);
//   }

//   return result;
// }





console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]