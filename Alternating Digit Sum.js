// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    return n
    .toString()
    .split("")
    .map((x, i) => (i % 2 === 0 ? +x : -x))
    .reduce((a, b) => a + b); 
};