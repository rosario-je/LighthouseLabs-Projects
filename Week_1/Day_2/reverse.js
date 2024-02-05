//take user input
//iterate through the array in reverse
//With each iteration, push the value at given index into new array
//Return new reversed array


const input = process.argv.slice(2)
let reverseArray = []

for (let i = input.length - 1; i >= 0; i--){
  let reversedWord = ''
  for (let j = input[i].length - 1; j >= 0; j--){
    reversedWord += input[i][j]
  }
  reverseArray.push(reversedWord)
}
console.log(reverseArray);

