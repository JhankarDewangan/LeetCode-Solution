// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2);
  let length = nums.length;

  nums.sort((a, b) => { return a - b});
      
  if (length%2 === 1) {
       return nums[(length-1)/2];    
  }
  
  return (nums[length/2-1] + nums[length/2])/2; 
};
