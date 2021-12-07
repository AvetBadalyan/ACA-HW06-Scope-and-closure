//Write a function that implements filtering in array
function filterFalsyValues(arr) {
  let filteredArr = arr.filter(function (element) {
    return (
      element !== "null" ||
      element !== "" ||
      element !== "NaN" ||
      element !== "0"
    );
  });
  return filteredArr;
}
console.log(filterFalsyValues(["hello", 1233, []]));
