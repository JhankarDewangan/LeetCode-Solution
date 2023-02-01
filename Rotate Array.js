// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverse(a, i, j){

    let li = i;

    let ri = j;

    while(li<ri){

        let temp = a[li];

        a[li++] = a[ri];

        a[ri--] = temp;
    }

}
var rotate = function(nums, k) {

 // to decrease computation for same result
  k = k % nums.length;

  // if k is negative 
  // if(k < 0)

  // k = k + nums.length;
  
  
  //part 1
  //reverse left part
  reverse(nums, 0, nums.length-k-1);

  //part 2
  //reverse right part
   reverse(nums, nums.length-k, nums.length-1);

  //all
  
  reverse(nums, 0, nums.length-1);

  return nums;
};