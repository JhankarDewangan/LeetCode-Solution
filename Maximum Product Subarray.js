// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let globalMaxProduct = nums[0];
   let localMaxProduct = nums[0];
   let localMinProduct = nums[0];
 
   for (let i = 1; i < nums.length; i++) {
     // We keep a temp variable because we want to keep track of the localMaxProduct before any calculations.
     let prevLocalMaxProduct = localMaxProduct;
 
     localMaxProduct = Math.max(
       nums[i],
       nums[i] * localMaxProduct,
       nums[i] * localMinProduct
     );
     localMinProduct = Math.min(
       nums[i],
       nums[i] * prevLocalMaxProduct,
       nums[i] * localMinProduct
     );
 
     globalMaxProduct = Math.max(localMaxProduct, globalMaxProduct);
   }
 
   return globalMaxProduct;
 };
 