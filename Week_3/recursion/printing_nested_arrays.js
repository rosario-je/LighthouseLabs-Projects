// const printItems = function(array) {
//   for (let item of array) {
//     console.log(item);
//   }
// }

// const array = ["A", "B", "C", "D", "E"];
// printItems(array);

const printItemsRecursion = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItemsRecursion(item);
    } else {
      console.log(item);
    }
  });
}

const array2 = ["A", ["B", "C"], "D", "E"];
printItemsRecursion(array2);