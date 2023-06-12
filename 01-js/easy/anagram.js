/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isEqual(s1, s2){
  // Check if each element of s1 is contained in each element of s2
  for (let element of s1){
    if (!s2.has(element)){
      return false;
    };
  };
  return true;
}

function isAnagram(str1, str2) {
    // Check if the length of the two strings is same, if not they can't be rearranged to form one out of the other or vice versa
    if (str1.length !== str2.length){
      return false;
    }

    // Create sets out of the given two strings
    // Remember to make it casing invariant by converting every word in lower case letters
    str1_set = new Set();
    str2_set = new Set();

    for (var i = 0; i < str1.length; i++){
      str1_set.add(str1[i].toLowerCase());
    };

    for (var i = 0; i < str2.length; i++){
      str2_set.add(str2[i].toLowerCase());
    };

    // Check for equality of the two sets
    let decision =  isEqual(str1_set, str2_set);
    console.log(`Input1: ${str1} Input 2: ${str2} Result: ${decision}`);
    return decision
}

module.exports = isAnagram;