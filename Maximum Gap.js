// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    var sortArr = nums.sort((a,b) => a-b);
  var res = 0;
  var max = 0;
  if(sortArr.length < 2 ) return 0;
  for(var i = 0; i < sortArr.length ; i++ )
  {
      res = sortArr[i+1] - sortArr[i];
      if(res > max)
      {
          max = res
      }
  }

  return max;
};