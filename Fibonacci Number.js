// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,Given n, calculate F(n).Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    return (n === 0 || n === 1) ? n : (fib(n - 1) + fib (n - 2));
};