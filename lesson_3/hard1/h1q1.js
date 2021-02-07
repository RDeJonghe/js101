function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// No, second function doesn't have anything on the line for return, so it won't return anything. The code after return is insignificant.