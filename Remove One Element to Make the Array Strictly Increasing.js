// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let count = 0;
for(let i =0; i<nums.length-1; i++){
    if(nums[i]>=nums[i+1]) {
        if(count===1) return false
    
        if(nums[i+1]> (nums[i-1] || 0)) {
            count++;
        
        }else if(nums[i] < (nums[i+2] || Infinity)) {
            count++;
            i++;
        } else return false; 
    }
}
return true
};