// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x % 10 == 0 && x !=0)  {
       return false;
   }
   let t = 0;
   while (x > t) {
       t = t * 10 + x % 10;
       x = Math.floor(x / 10);
   }
   return t==x || x==Math.floor(t/10);
};