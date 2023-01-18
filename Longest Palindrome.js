// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = new Set();
    
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            count += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }
    
    if (set.size > 0) {
        count++;
    }
    
    return count;
};