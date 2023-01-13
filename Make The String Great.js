// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    s = s.split('');
 let i = 0;
 while (i < s.length - 1) {
     if (s[i] && s[i + 1] && s[i].toLowerCase() === s[i + 1].toLowerCase() && s[i] !== s[i + 1]) { // main check: two adjacent chars, one lowerCase another upperCase
         s.splice(i, 2); // remove those two chars
         i--; // go one step back to start checking if the main case check is relevant for previous char and chars next to removed chars
         continue;
     }
     i++;
 }
 
 return s.join('');
};