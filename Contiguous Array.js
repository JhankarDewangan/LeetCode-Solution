// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map();
   map.set(0,-1);
   
   let count = 0;
   let res= 0;
   for(let i = 0; i < nums.length ; i++) {
       
       count += nums[i] === 0 ? -1 : 1;
       
       if(map.has(count)) {
           res = Math.max(res,i - map.get(count));
       } else {
           map.set(count,i);
       }
   }
   
   return res;
};