// Practice problem 10
// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let strArr = JSON.stringify(arr);
let deepArr = JSON.parse(strArr);

deepArr.map(nestArr => {
  if (typeof nestArr[0] === 'string') {
    nestArr.sort((a, b) => {
      if (b < a) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
      return 0;
    })
  }
  if (typeof nestArr[0] === 'number') {
    nestArr.sort((a, b) => {
      if (b < a) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
      return 0;
    })
  }
})

console.log(arr);
console.log(deepArr);