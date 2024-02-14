// function sumToOne(n) {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumToOne(4));

function sumToOneRecursive(n) {
  if (n === 1) {
    return 1;
  }

  
  return n + sumToOneRecursive(n - 1);
}

console.log(sumToOneRecursive(4));
