// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Input: nums = [3,2,3]
// Output: [3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const t = nums.length / 3;
  const map = {};
  const res = [];
  for (let num of nums) {
      if (!map[num]) map[num] = 0;
      map[num]++;
  }
  for (let key in map) {
      if (map[key] > t) {
          res.push(key);
      }
  }
  return res;
};