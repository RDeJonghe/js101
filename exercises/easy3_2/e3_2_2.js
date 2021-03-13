// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(str) {
  console.log(`+${'-'.repeat(str.length + 2)}+`)
  console.log(`|${' '.repeat(str.length + 2)}|`);
  console.log(`| ${str} |`)
}

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('Back once again');

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+