// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.


// Return the maximum number of balanced strings you can obtain.

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let matches = 0;
let balance = 0;

for (let i = 0; i < s.length; i++) {

    if (s[i] === "R") {
        balance -= 1;
    } else if (s[i] === "L") {
        balance += 1;
    }

    if (balance === 0) {
        matches += 1;
    }
}

return matches;
};