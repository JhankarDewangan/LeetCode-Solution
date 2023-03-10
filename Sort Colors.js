// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p0 = 0;
   let curr = 0;
   let p2 = nums.length - 1;
   let tmp;
   
   while (curr <= p2) {
         if (nums[curr] === 0) {
               tmp = nums[p0];
               nums[p0++] = nums[curr];
               nums[curr++] = tmp;
         } else if (nums[curr] === 2) {
               tmp = nums[curr];
               nums[curr] = nums[p2];
               nums[p2--] = tmp;
         } else curr++;
   };
};