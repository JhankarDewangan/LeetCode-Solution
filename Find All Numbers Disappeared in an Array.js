// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output = []
   for(let i = 1; i <= nums.length; i++){
     if(nums.indexOf(i) < 0){
       output.push(i)
     }
   }
   return output
};