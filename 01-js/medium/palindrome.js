/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  reverse_string = ""

  // Remove punctuation from the string
  var punctuationPattern = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  str = str.replace(punctuationPattern, '');

  // Remove spaces from the string
  str = str.replace(/\s/g, '');
  
  // Reverse the string
  for (var x = str.length - 1; x >= 0; x--){
    reverse_string += str[x];
  }

  // Check if the reversed string and the original string are the same
  if(str.toLowerCase() === reverse_string.toLowerCase()){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
