// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Input: nums = [10,2]
// Output: "210"

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(!nums || nums.length === 0) {
       return '0';
   }
   
   nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
   if(nums[0] === 0) {
       return '0';
   }
   return nums.join('');
};