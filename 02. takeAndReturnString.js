// Write a function redundant that takes in a string str and returns a function that returns str.

function returnRedundant(string) {
  return function internFunction() {
    return string;
  };
}
console.log(returnRedundant("My name is Avet")());
