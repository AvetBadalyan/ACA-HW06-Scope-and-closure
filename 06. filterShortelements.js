// Write a function which remove elements with length <= 3
function filterByLength(arr) {
  let newArr = arr.filter(function (element) {
      return element.length > 3;
  });
}
console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
//NEED TO FIX BUGS OF UNDEFINED
