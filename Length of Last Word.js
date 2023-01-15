// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    let output = 0;

    while (s[index] === ' ' && index >= 0) index -= 1;

    while (s[index] !== ' ' && index >= 0) {

        output += 1;
        index -= 1;

    }
    return output;
};