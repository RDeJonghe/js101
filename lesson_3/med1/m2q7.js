// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// I'm going to say 34. Although answer is called in the function it is called to assign the variable new answer. So I don't think answer changes, stays 42, and then subtraction happens

// Right

