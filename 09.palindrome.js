// Check whether string is palindrome, or not.
function palindrome(inputString) {
  let j = inputString.length - 1;
  for (let i = 0; i < j / 2; i++) {
    if (inputString[i] != inputString[j - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("qaxaq"));

//Best solution
function solution(inputString) {
  return inputString == inputString.split("").reverse().join("");
}
