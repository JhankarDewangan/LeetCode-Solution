// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Input: nums = [2,1,2]
// Output: 5
// Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);
     const N = nums.length - 2;
     for (let i = 0; i < N; i++) {
       if (nums[i] < nums[i + 1] + nums[i + 2]) return nums[i] + nums[i + 1] + nums[i + 2];
     }
     return 0;
};