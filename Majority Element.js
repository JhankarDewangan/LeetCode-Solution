// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, maxValue = 0;
   
   for(let i=0; i < nums.length; i++){
       if(count === 0){
           maxValue = nums[i];
       }
       count += nums[i] === maxValue ? 1 : -1;
   }
   
   return maxValue;
};

 