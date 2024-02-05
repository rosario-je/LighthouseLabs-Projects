//Function takes a string and for each case, it adds a certian value to the empty string variable
const obfuscate = (str) => {
  //Initialize an empty string
  let obfuscatedStr = "";

  //Create a map to assign the desired values for specific chars when they appear
  const obfuscationMap = {
    'a': '4',
    'e': '3',
    'o': '0',
    'l': '1'
  };
  //Iterate through the string
  for (const char of str){
    //For every char, add the value of given key into them empty string if it matches the char, and also add any other character
    obfuscatedStr += obfuscationMap[char] || char
  };
  return obfuscatedStr;
};

//User input
const userInput = process.argv.slice(2);

//Variable which calls the function with the user input as an argument
const obfuscatedPassword = obfuscate(userInput.join(" "));

//Log the resulting string
console.log(obfuscatedPassword);
