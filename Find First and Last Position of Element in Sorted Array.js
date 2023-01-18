// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let indexes = [-1, -1];
    
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(nums[mid] === target || nums[mid] > target) right = mid - 1;
        if(nums[mid] < target) left = mid + 1
    }
    
	 if(nums[left] === target) indexes[0] = left;
    
    left = 0; right = nums.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(nums[mid] === target || nums[mid] < target) left = mid + 1;
        if(nums[mid] > target) right = mid - 1
    }
	
    if(nums[right] === target) indexes[1] = right;
    
    return indexes;
};