// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let start=0,end=s.length-1;start<end; start++ , end--){
        let temp= s[end];
        s[end]=s[start];
        s[start]=temp;
    }
};