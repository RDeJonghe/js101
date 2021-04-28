// Write a method that returns true if its argument looks like a URL, false if it does not.

function isUrl(str) {
  let regex = /^https?:\/\/\S+$/;

  if (str.match(regex)) {
    return true;
  }
  else {
    return false;
  }

  // return Boolean(str.match(regex)) // could also do like this
}

let regex = /https?:\/\/\S+/;


console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false