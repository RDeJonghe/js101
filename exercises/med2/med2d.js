/* Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future. */


let day = new Date(2006, 02, 16, 7, 11, 22, 23);

// console.log(day);
// console.log(day.toString());
// console.log(day.toTimeString());
// console.log(day.toUTCString());

console.log(day.getHours());
console.log(day.getTime())


// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

