/* Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise. */

// ALGORITHM
// use the previous function to narrow down to the item you want to look at - can set this to a variable if needed
// set a total variable (can prob also do this with reduce)
// if movement in add quantity
// if not subtract
// return if that is > 0

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(num, list) {
  return list.filter(el => el.id === num);
}

function isItemAvailable(num, list) {
  let product = transactionsFor(num, list);
  let totalQuantity = 0;
  
  for (let i = 0; i < product.length; i ++) {
    if (product[i]['movement'] === 'in') {
      totalQuantity += product[i]['quantity'];
    } else {
      totalQuantity -= product[i]['quantity'];
    }
  }
  return totalQuantity > 0;
}

function isItemAvailable(num, list) {
  return transactionsFor(num, list)
    .reduce((accum, el) => {
      if (el['movement'] === 'in') {
        return accum += el['quantity'];
      } else {
        return accum -= el['quantity'];
      }
    }, 0) > 0;
}


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true