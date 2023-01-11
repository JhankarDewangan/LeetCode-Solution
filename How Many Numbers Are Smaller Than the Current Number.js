// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ans=[]
    let i=0
    while(i<nums.length){
        let count=0
        for(let num of nums){
            if(nums[i]>num){
                count+=1
            }
        }
        ans.push(count)
        i++;
    }
    return ans
    
};