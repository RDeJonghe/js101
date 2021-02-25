// Write a function that will take a short line of text, and write it to the console log within a box.
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+ */


function bannerize(str) {
  let dash = '-';
  let plus = '+';
  let pipe = '|';
  let empty = ' ';
  console.log(`${plus}${dash.repeat(str.length + 2)}${plus}`);
  console.log(`${pipe}${empty.repeat(str.length + 2)}${pipe}`);
  console.log(`${pipe}${empty}${str}${empty}${pipe}`);
  console.log(`${pipe}${empty.repeat(str.length + 2)}${pipe}`);
  console.log(`${plus}${dash.repeat(str.length + 2)}${plus}`);
}

bannerize('back once again i\'m the renegade master');

