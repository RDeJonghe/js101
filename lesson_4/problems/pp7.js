// practice problem 7 from lesson 4

console.log(['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
}));

// map will return a new array. Typically map is used to perform a transformation on all the elements. This looks to be more like a selection like filter. Regardless I think it will return the element with length over 3 in a new array

// returns undefined for the element with a length 3 or less, probably because map does something on every element and passes it to new array. Since nothing was returned for this it is undefined.

// When a function doesn't explicitly return something, it implicitly returns undefined. That's why we see undefined as the first element of the returned array.