// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Input: nums = [1,3,4,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort();

for (let i = 0; i < nums.length; i+=2) {
    if (nums[i] === nums[i+1] || nums[i] === nums[i-1]) return nums[i];
}
};