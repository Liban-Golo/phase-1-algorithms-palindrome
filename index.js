
function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  1. Loop from start of word to the middle
  2. Compare the letter at position i with the letter at the mirrored position from the end
  3. If any pair doesn't match, return false
  4. If all pairs match, return true
*/

/*
  Add written explanation of your solution here
  The function checks if a word reads the same forwards and backwards.
  It compares characters from the start and end moving inward. 
  If all pairs match, the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
