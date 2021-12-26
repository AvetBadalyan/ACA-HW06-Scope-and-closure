// Write a function redundant that takes in a string str and returns a function that returns str.

function returnRedundant(str) {
  return function internFunction() {
    return str;
  };
}
console.log(returnRedundant("My name is Avet")());
