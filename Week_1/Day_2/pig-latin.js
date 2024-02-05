//iterate through the array
//iterate through each word in the array
//for each word, move the first letter to the end
//add aye at the end of the word

//pig latin

//"pig"   "latin"

//word = p i g 
// firstLetter = p
// p i g => slice(1) => i g + firstLetter => i g p + ay => i g p ay

//words[i] = pigLatinWord

//let pigLatinSentence = words.join(" ")


const convertSentenceToPigLatin = (sentence) => {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length < 1) {
      continue;
    }

    const firstLetter = word[0];
    const pigLatinWord = word.slice(1) + firstLetter + "ay";
    words[i] = pigLatinWord;
  }

  return words.join(" ");
};

const input = process.argv.slice(2).join(" ");
console.log(convertSentenceToPigLatin(input));
