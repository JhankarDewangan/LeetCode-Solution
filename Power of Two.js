// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.
// Input: n = 1
// Output: true
// Explanation: 2^0 = 1.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n>1){
     return isPowerOfTwo(n/2);
 }
 if(n==1){
     return true;
 }
 if(n<1){
     return false;
 }
};