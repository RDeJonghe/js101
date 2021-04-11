// Write a function that will take a short line of text, and write it to the console log within a box.

// algorithm
// create a function that takes a string
// console.log for each line of text
// use repeat with str.length + 2 for the dashes and spaces

function logInBox(str) {
  console.log('+' + '-'.repeat(str.length + 2) + '+');
  console.log('|' + ' '.repeat(str.length + 2) + '|');
  console.log('| ' + str + ' |');
  console.log('|' + ' '.repeat(str.length + 2) + '|');
  console.log('+' + '-'.repeat(str.length + 2) + '+');
}



logInBox('To boldly go where no one has gone before.');

/* 
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+ */

logInBox('');
/*
+--+
|  |
|  |
|  |
+--+ */