// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsob ={}
    if(nums.length ==1) return nums[0];
    for(n of nums ){
      if(numsob[n]) {
          numsob[n]+=1
      } else if(!numsob[n]) {
          numsob[n]=1;
      }
       } 
       for(key in numsob) {
           if(numsob[key] ==1) 
           return key
       }
};