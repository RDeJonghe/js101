function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

console.log(bar(foo()));

// will return no. foo returns yes no matter what. So pass yes into bar. With a yes parameter it will return no.