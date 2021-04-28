// Challenge: write a method that changes dates in the format 2016-06-17 to the format 17.06.2016. You must use a regular expression and should use methods described in this section.


const formatDate = (str) => {
  let regex = /^(\d\d\d\d)\1-(\d\d)\2-(\d\d)\3$/;
  return str.replace(regex, '$2.$3.$1')
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)