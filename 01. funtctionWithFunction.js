// Create a function that implements partial sum
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
