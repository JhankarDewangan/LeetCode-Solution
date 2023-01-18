// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // This inner function removes all special characters and converts
 // the string to uppercase.
 function stripString(string) {
   return string.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
 }
 
 // Strip the string of special characters and convert it to uppercase.
 let str = stripString(s);
 
 // Initialize left and right pointers at the start and end of the string.
 let left = 0;
 let right = str.length - 1;
 
 // Iterate until the pointers cross.
 while (left < right) {
   // Compare the characters at the left and right pointers.
   let leftChar = str[left];
   let rightChar = str[right];
   
   // If the characters are the same, move the pointers.
   // Otherwise, return false (the string is not a palindrome).
   if (leftChar === rightChar) {
     left++;
     right--;
   } else {
     return false;
   }
 }
 
 // If the loop completes, the string is a palindrome. Return true.
 return true; 
};