// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const str = [...s];

   for(let i = 1; i < str.length; i++) {
       if (!str[i]) {
           continue;
       }

       if (str[i] === str[i - 1]) {
           str[i] = str[i - 1] = null;
           let left = i - 2;
           let right = i + 1;

           while (!str[left] && left >= 0) {
               left--;
           }

           while (!str[right] && right < str.length) {
               right++;
           }

           while(str[left] === str[right] && str[left] != null && left >= 0 && right < str.length) {
               str[left] = str[right] = null;
               left--;
               right++;
           }
       }
   }

   return str.join('')
};