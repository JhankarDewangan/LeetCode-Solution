// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Input: nums = [1,2,2,3]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let ksm=0
   let ksm1=0
   for (a=0;a<nums.length-1;a++) {     
           if  ( nums[a] == nums[a+1]) { ksm++;ksm1++}
       else if ( nums[a] < nums[a+1] ) ksm++
       else if ( nums[a] > nums[a+1] ) ksm1++  
   }
   if ( ksm == nums.length-1 || ksm1 == nums.length-1) return true
   else return false
};