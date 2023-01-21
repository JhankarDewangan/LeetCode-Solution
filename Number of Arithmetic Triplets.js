// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.


/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let arr = []
    for (let i=0;i<=nums.length-3;i++){
        for(let j=i+1;j<=nums.length-2;j++){
            for(let k = j+1;k<=nums.length-1;k++){
                if(nums[j]-nums[i]==diff && nums[k]-nums[j]==diff){
                    arr.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return arr.length;
};